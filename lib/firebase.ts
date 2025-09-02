
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "aim-foundation-website.firebaseapp.com",
  projectId: "aim-foundation-website",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "aim-foundation-website.appspot.com",
  messagingSenderId: "369069818961",
  appId: "1:369069818961:web:757e7424c581373950f0c0",
  measurementId: "G-G6J36E91R3"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
