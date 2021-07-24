import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB1iqALLYuPsrF2PGoXsMvyChqdxmkAGGE",
  authDomain: "medium-clone-6b17e.firebaseapp.com",
  projectId: "medium-clone-6b17e",
  storageBucket: "medium-clone-6b17e.appspot.com",
  messagingSenderId: "101908030856",
  appId: "1:101908030856:web:3ff15c6d46e156462e063d",
  measurementId: "G-YF9BYZQ2M7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;