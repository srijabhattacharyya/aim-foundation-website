
import { initializeApp, applicationDefault, getApp, App, getApps } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';
import { GoogleAuth } from 'google-auth-library';

let app: App;
let db: Firestore;
let storage: Storage;

function initializeAdminApp() {
  if (!getApps().length) {
    try {
      // This line is for ensuring the auth context is established, as per the user's snippet.
      new GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/cloud-platform"],
      });

      app = initializeApp({
        credential: applicationDefault(),
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      });
      console.log('✅ Firebase Admin initialized using Application Default Credentials.');
    } catch (error: any) {
      console.error('❌ Firebase Admin Initialization Error:', error.message);
      // It's better to throw the error to halt execution if initialization fails
      throw new Error(`Failed to initialize Firebase Admin SDK: ${error.message}`);
    }
  } else {
    app = getApp();
    // console.log('✅ Using existing Firebase Admin app.');
  }
}

// Call the initialization function at the module level.
initializeAdminApp();

export function getAdminDb(): Firestore {
  if (!db) {
    db = getFirestore(app);
  }
  return db;
}

export function getAdminStorage(): Storage {
  if (!storage) {
    storage = getStorage(app);
  }
  return storage;
}
