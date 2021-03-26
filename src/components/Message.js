import React from "react";
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

function Message({ className }) {
  return (
    <div className={className}>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1070106683316338688/mJxptTmV_400x400.jpg"
          alt="profil"
        />
      </div>
      <div className="message">
        <header>
          <h3>Victor Darcel </h3>
          <span>· {formatDistanceToNow(1615747265360, { locale: fr })}</span>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          maxime dolore, itaque sequi necessitatibus porro ducimus qui
          voluptatum quo quisquam.
        </p>
        <footer>
          <IconContainer iconcolor="#1da1f2">
            <FiMessageCircle />
          </IconContainer>
          <IconContainer iconcolor="#5cb85c">
            <FiRefreshCw />
          </IconContainer>
          <IconContainer iconcolor="#d9534f" count="5">
            <FiHeart />
          </IconContainer>
          <IconContainer iconcolor="#1da1f2">
            <FiUpload />
          </IconContainer>
          <IconContainer iconcolor="#d9534f">
            <FiX />
          </IconContainer>
        </footer>
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
