import React from "react";
import CreateMessage from "../components/CreateMessage";
import Header from "../components/Header";
import Message from "../components/Message";
import "../styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <CreateMessage />
      <Message />
    </div>
  );
};

export default App;
