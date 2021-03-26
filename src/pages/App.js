import React from "react";
import Header from "../components/Header";
import Message from "../components/Message";
import MessageForm from "../components/MessageForm";
import "../styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MessageForm />
      <Message />
    </div>
  );
};

export default App;
