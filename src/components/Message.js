import React, { useContext, useState, useEffect } from "react";
import FirebaseContext from "../firebase/context";
import styled from "styled-components";
import {
  FiHeart,
  FiX,
  FiMessageCircle,
  FiRefreshCw,
  FiUpload,
} from "react-icons/fi";
import { formatDistanceToNow } from "date-fns/esm";
import { fr } from "date-fns/locale";
import IconContainer from "./IconContainer";

function Message({ className, message }) {
  const { user, firebase } = useContext(FirebaseContext);
  const [isLike, setisLike] = useState(false);

  useEffect(() => {
    if (user) {
      const isLike = message.likes.some((like) => like.likeBy.id === user.uid);
      setisLike(isLike);
    }
  }, []);

  const handleLike = () => {
    setisLike((prevIsLike) => !prevIsLike);
    const likeRef = firebase.db.collection("messages").doc(message.id);

    if (!isLike) {
      const like = { likeBy: { id: user.uid, name: user.displayName } };
      const updateLikes = [...message.likes, like];
      likeRef.update({ likes: updateLikes });
    } else {
      const updateLikes = message.likes.filter(
        (like) => like.likeBy.id !== user.uid
      );
      likeRef.update({ likes: updateLikes });
    }
  };

  const handleDeleteMessage = () => {
    const messageRef = firebase.db.collection("messages").doc(message.id);
    messageRef.delete();
  };

  const isOwner = user && user.uid === message.postedBy.id;
  return (
    <div className={className}>
      <div>
        <img src={message.photo} alt="profil" />
      </div>
      <div className="message">
        <header>
          <h3>{message.postedBy.name}</h3>
          <span>· {formatDistanceToNow(message.createAt, { locale: fr })}</span>
        </header>
        <p>{message.message}</p>
        {user && (
          <footer>
            <IconContainer iconcolor="#1da1f2">
              <FiMessageCircle />
            </IconContainer>
            <IconContainer iconcolor="#5cb85c">
              <FiRefreshCw />
            </IconContainer>
            <IconContainer
              iconcolor="#d9534f"
              count={message.likes.length}
              onClick={() => handleLike()}
              isLike={isLike}
            >
              <FiHeart />
            </IconContainer>
            <IconContainer iconcolor="#1da1f2">
              <FiUpload />
            </IconContainer>
            {isOwner && (
              <IconContainer
                iconcolor="#d9534f"
                onClick={() => handleDeleteMessage()}
              >
                <FiX />
              </IconContainer>
            )}
          </footer>
        )}
      </div>
    </div>
  );
}

export default styled(Message)`
  display: flex;
  border: 1px solid #e6ecf0;
  border-width: 0 1px 1px;
  padding: 0.5rem 1rem;
  transition: 200ms;
  cursor: pointer;
  :hover {
    background: #f5f8fa;
  }
  div > img {
    border-radius: 50%;
    margin-right: 1rem;
    max-width: 40px;
    max-height: 40px;
  }
  header {
    display: flex;
    h3 > span {
      color: #657786;
      font-weight: 400;
      margin-left: 2px;
    }
  }
  header h3,
  p {
    margin: 0;
    font-size: 1rem;
    white-space: pre-wrap;
  }
  footer {
    display: flex;
    justify-content: space-between;
    color: #657786;
    padding-top: 0.5rem;
    font-size: 1.2rem;
  }
`;
