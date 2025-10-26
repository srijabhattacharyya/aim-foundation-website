
import admin from 'firebase-admin';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

// Cached instances
let db: Firestore | null = null;
let storage: Storage | null = null;

function initializeAdminApp() {
    if (admin.apps.length > 0) {
        return;
    }

    try {
        // When deployed on Vercel (or other Google Cloud environments),
        // the Admin SDK can automatically find the credentials, but sometimes
        // needs the projectId for context.
        admin.initializeApp({
             projectId: process.env.FIREBASE_PROJECT_ID,
             storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'aim-foundation-website.appspot.com'
        });
        console.log('Firebase Admin SDK initialized successfully using Application Default Credentials.');
    } catch (error: any) {
        console.error('Firebase Admin Initialization Error:', error.message);
        // This will help diagnose if there's a problem with the default credentials setup.
        throw new Error("Failed to initialize Firebase Admin SDK. Ensure the Vercel project is correctly linked to a Google Cloud service account with appropriate permissions, and the FIREBASE_PROJECT_ID environment variable is set.");
    }
}

// Call initialization once at module load
initializeAdminApp();

export function getAdminDb(): Firestore {
    if (!db) {
        db = getFirestore();
    }
    return db;
}

export function getAdminStorage(): Storage {
    if (!storage) {
        storage = getStorage();
    }
    return storage;
}
