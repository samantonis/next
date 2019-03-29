import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const config = {
  apiKey: publicRuntimeConfig.API_KEY,
  authDomain: publicRuntimeConfig.AUTH_DOMAIN,
  databaseURL: publicRuntimeConfig.DATABASE_URL,
  projectId: publicRuntimeConfig.PROJECT_ID,
  storageBucket: publicRuntimeConfig.STORAGE_BUCKET,
  messagingSenderId: publicRuntimeConfig.MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.auth = firebase.auth();
    this.db = firebase.database();
  }

  createUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  login = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  resetPassword = email => this.auth.sendPasswordResetEmail(email);

  updatePassword = password => this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
