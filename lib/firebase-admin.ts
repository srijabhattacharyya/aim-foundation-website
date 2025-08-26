
import admin from 'firebase-admin';
import { getApps, getApp, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  : undefined;

if (!getApps().length) {
  try {
    initializeApp({
      credential: admin.credential.cert(serviceAccount!),
      storageBucket: "aim-foundation-website.appspot.com",
    });
    console.log("Firebase Admin SDK initialized successfully.");
  } catch (e: any) {
    if (e.code !== 'auth/invalid-credential') {
        console.error("Firebase Admin SDK initialization error:", e);
    }
  }
}

let db: admin.firestore.Firestore, storage: admin.storage.Storage;

try {
    db = getFirestore(getApp());
    storage = getStorage(getApp());
} catch (e:any) {
    if (e.code !== 'auth/invalid-credential') {
        console.error("Error getting Firestore/Storage instance:", e);
    }
    // Assign dummy objects if initialization fails in a context where it's not critical
    // @ts-ignore
    db = db || {}; 
    // @ts-ignore
    storage = storage || {};
}


export { db, storage };
