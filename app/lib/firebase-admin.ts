
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
        // Parse the JSON string from the environment variable
        const serviceAccount = JSON.parse(serviceAccountKey);
        app = initializeApp({
          credential: cert(serviceAccount),
          storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        });
        console.log('✅ Firebase Admin initialized using FIREBASE_SERVICE_ACCOUNT_KEY.');
      } else {
        // Fallback for local development or GCP environments
        app = initializeApp({
          storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        });
        console.log('✅ Firebase Admin initialized using default credentials.');
      }
    } catch (error: any) {
      console.error('❌ Firebase Admin Initialization Error:', error.message);
      // Helpful hint for the user
      if (error.message.includes('Unexpected token')) {
        console.error('👉 Hint: Ensure your FIREBASE_SERVICE_ACCOUNT_KEY environment variable is a valid JSON string (check for missing braces or quotes).');
      }
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
