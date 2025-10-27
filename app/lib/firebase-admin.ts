
import { initializeApp, applicationDefault, getApp, App, getApps } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

// Cached instances
let app: App;
let db: Firestore;
let storage: Storage;

function initializeAdminApp() {
    // Check if the app is already initialized to prevent errors during hot reloads
    if (!getApps().length) {
        try {
            // Use applicationDefault() to automatically use the service account credentials
            // provided by the Google Cloud environment (like a Compute Engine VM or Vercel).
            app = initializeApp({
                credential: applicationDefault(),
                storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
            });
            console.log('Firebase Admin SDK initialized successfully using Application Default Credentials.');
        } catch (error: any) {
            console.error('Firebase Admin Initialization Error:', error.message);
            throw new Error(`Failed to initialize Firebase Admin SDK: ${error.message}`);
        }
    } else {
        // If already initialized, get the existing app instance
        app = getApp();
    }
}

// Initialize the app right away
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
