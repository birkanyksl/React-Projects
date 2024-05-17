import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "mychatappreact.firebaseapp.com",
  projectId: "mychatappreact",
  storageBucket: "mychatappreact.appspot.com",
  messagingSenderId: "377470181604",
  appId: "1:377470181604:web:26d4a6c3c9e6574722ccf1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
