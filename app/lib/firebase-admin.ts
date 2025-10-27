
import { initializeApp, applicationDefault, getApp, App } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

// Cached instances
let app: App | null = null;
let db: Firestore | null = null;
let storage: Storage | null = null;

function initializeAdminApp() {
    if (app) {
        return;
    }

    try {
        // Use applicationDefault() to automatically use the service account credentials
        // provided by the Google Cloud environment (like Compute Engine or Vercel).
        app = initializeApp({
            credential: applicationDefault(),
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'aim-foundation-website.appspot.com',
        });
        console.log('Firebase Admin SDK initialized successfully using Application Default Credentials.');
    } catch (error: any) {
        // If initialization fails, try to get the already initialized app.
        // This can happen during Next.js hot reloads.
        if (error.code === 'app/duplicate-app') {
            app = getApp();
        } else {
            console.error('Firebase Admin Initialization Error:', error.message);
            throw new Error(`Failed to initialize Firebase Admin SDK: ${error.message}`);
        }
    }
}

export function getAdminDb(): Firestore {
    initializeAdminApp();
    if (!db) {
        db = getFirestore(app!);
    }
    return db;
}

export function getAdminStorage(): Storage {
    initializeAdminApp();
    if (!storage) {
        storage = getStorage(app!);
    }
    return storage;
}
