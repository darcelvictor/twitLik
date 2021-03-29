import app from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
  login = () => console.log("login");
}

const firebase = new Firebase();

export default firebase;