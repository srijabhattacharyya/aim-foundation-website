// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "aim-foundation-website.firebaseapp.com",
  projectId: "aim-foundation-website",
  storageBucket: "aim-foundation-website.appspot.com",
  messagingSenderId: "369069818961",
  appId: "1:369069818961:web:757e7424c581373950f0c0",
  measurementId: "G-G6J36E91R3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
