// lib/fetchMatchs.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getMatchs() {
  const querySnapshot = await getDocs(collection(db, "matchs"));
  const matchs = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return matchs;
}
