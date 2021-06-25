import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5sG31rtC4lcmrgirOj55QqGnKMYz9sCw",
  authDomain: "clone-b2d1e.firebaseapp.com",
  projectId: "clone-b2d1e",
  storageBucket: "clone-b2d1e.appspot.com",
  messagingSenderId: "1015087346049",
  appId: "1:1015087346049:web:922a190e04511745263880",
  measurementId: "G-ME2BGPW3RM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
