import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAZNXApOspKZLkSU9XOzoU9fkke9vBP9h0",
  authDomain: "crwn-db-99083.firebaseapp.com",
  databaseURL: "https://crwn-db-99083.firebaseio.com",
  projectId: "crwn-db-99083",
  storageBucket: "crwn-db-99083.appspot.com",
  messagingSenderId: "675554235470",
  appId: "1:675554235470:web:6e9cb87860d3530102df1f",
  measurementId: "G-BP4F2EJN2F"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;