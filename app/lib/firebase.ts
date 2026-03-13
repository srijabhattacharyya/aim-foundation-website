
// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// These values are ideally set via environment variables in your hosting provider (Hostinger/Vercel).
// If they are not set, it will fallback to the project ID you provided.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "aim-foundation-web.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "aim-foundation-web",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "aim-foundation-web.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-0Q40BRFCRS",
};

// Prevent multiple Firebase instances on hot reloads
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firestore & Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
