// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7KC8mOohm7WmWwlaK46oxKgukMfw2Wo4",
  authDomain: "proyecto-final-integrado-895f1.firebaseapp.com",
  projectId: "proyecto-final-integrado-895f1",
  storageBucket: "proyecto-final-integrado-895f1.appspot.com",
  messagingSenderId: "718486698985",
  appId: "1:718486698985:web:43c39518637aab79ae978"
};


const app = initializeApp(firebaseConfig);
export default app;
export const db = getFirestore();