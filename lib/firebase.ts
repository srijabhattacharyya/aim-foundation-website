// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "aim-foundation-website.firebaseapp.com",
  projectId: "aim-foundation-website",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "aim-foundation-website.appspot.com",
  messagingSenderId: "369069818961",
  appId: "1:369069818961:web:757e7424c581373950f0c0",
  measurementId: "G-G6J36E91R3"
};

// Initialize Firebase App
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
