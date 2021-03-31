import app from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }
  login = async (provider) => {
    const { user } = await this.auth.signInWithPopup(
      this[`${provider}Provider`]
    );
  };
  logout = async () => {
    this.auth
      .signOut()
      .then()
      .catch((error) => {
        console.log("logout doesn't work");
        console.log(error);
      });
  };
}

const firebase = new Firebase();

export default firebase;
