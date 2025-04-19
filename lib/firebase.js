// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjCNKv4XtUJhECe5NDq-5VgIlXhDezGnk",
  authDomain: "king-ads-matchs.firebaseapp.com",
  projectId: "king-ads-matchs",
  storageBucket: "king-ads-matchs.firebasestorage.app",
  messagingSenderId: "754797197609",
  appId: "1:754797197609:web:85ce96f9e516da16f81f38"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
