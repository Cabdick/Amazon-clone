import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJBlR-vPyvg7JKy7PUX8pwVanFnQTic84",
  authDomain: "clone-cc4e3.firebaseapp.com",
  databaseURL: "https://clone-cc4e3.firebaseio.com",
  projectId: "clone-cc4e3",
  storageBucket: "clone-cc4e3.appspot.com",
  messagingSenderId: "202406878797",
  appId: "1:202406878797:web:5f8a3dfc4299b198dc0604",
  measurementId: "G-SR2JZZT56D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
