
import { initializeApp, cert, getApp, App, getApps } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

let app: App;
let db: Firestore;
let storage: Storage;

function initializeAdminApp() {
  if (!getApps().length) {
    try {
      const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

      if (serviceAccountKey) {
        // If providing a full JSON string via environment variable
        const serviceAccount = JSON.parse(serviceAccountKey);
        app = initializeApp({
          credential: cert(serviceAccount),
          storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        });
        console.log('✅ Firebase Admin initialized using Service Account Key from environment.');
      } else {
        // Fallback to application default (useful for local Firebase CLI or GCP environments)
        app = initializeApp({
          storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        });
        console.log('✅ Firebase Admin initialized using Application Default Credentials.');
      }
    } catch (error: any) {
      console.error('❌ Firebase Admin Initialization Error:', error.message);
      throw new Error(`Failed to initialize Firebase Admin SDK: ${error.message}`);
    }
  } else {
    app = getApp();
  }
}

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
