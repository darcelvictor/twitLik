import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../firebase";
import Message from "./Message";

const MessageList = () => {
  const { firebase } = useContext(FirebaseContext);
  const [messages, setMessages] = useState([]);

  const handleSnapshot = (snapshot) => {
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setMessages(messages);
  };

  useEffect(() => {
    const getMessage = () => {
      try {
        firebase.db
          .collection("messages")
          .orderBy("createAt", "desc")
          .onSnapshot(handleSnapshot);
      } catch (err) {
        console.log(err);
      }
    };

    return getMessage();
  }, [firebase]);

  return (
    <div>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
        // <p key={id}>{message}</p>
      ))}
    </div>
  );
};

export default MessageList;
