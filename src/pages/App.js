import React from "react";
import CreateMessage from "../components/CreateMessage";
import Header from "../components/Header";
import Message from "../components/Message";

import useAuth from "../hooks/useAuth";
import firebase, { FirebaseContext } from "../firebase";
//import "../styles/App.css";

const App = () => {
  const user = useAuth();
  console.log(user);
  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      <div className="app">
        <Header />
        <CreateMessage />
        <Message />
      </div>
    </FirebaseContext.Provider>
  );
};

export default App;
