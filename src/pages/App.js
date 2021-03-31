import React from "react";
import CreateMessage from "../components/CreateMessage";
import Header from "../components/Header";
import MessageList from "../components/MessageList";

import useAuth from "../hooks/useAuth";
import firebase, { FirebaseContext } from "../firebase";
//import "../styles/App.css";

const App = () => {
  const user = useAuth();
  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      <main className="app">
        <Header />
        <CreateMessage />
        <MessageList />
      </main>
    </FirebaseContext.Provider>
  );
};

export default App;
