
// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Make sure you have these environment variables set in Vercel
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "aim-foundation-website.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "aim-foundation-website",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "aim-foundation-website.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "369069818961",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:369069818961:web:757e7424c581373950f0c0",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-0Q40BRFCRS",
};

// Prevent multiple Firebase instances on hot reloads
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firestore & Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
