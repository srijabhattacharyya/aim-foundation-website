
import admin from 'firebase-admin';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

// Cached instances
let db: Firestore | null = null;
let storage: Storage | null = null;

function initializeAdminApp() {
    // Prevent re-initialization
    if (admin.apps.length > 0) {
        return;
    }

    // This configuration relies on Application Default Credentials (ADC).
    // It will automatically find credentials when deployed on Vercel
    // or when you are logged in via the gcloud CLI on your local machine.
    try {
        admin.initializeApp({
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        });
        console.log('Firebase Admin SDK initialized successfully using ADC.');
    } catch (error: any) {
        console.error('Firebase Admin Initialization Error:', error.message);
        // Provide a helpful error message for the user
        if (error.message.includes('Could not find')) {
             throw new Error(
                `Firebase Admin initialization failed. For local development, please authenticate via the Google Cloud CLI by running: 'gcloud auth application-default login'. Details: ${error.message}`
            );
        }
        throw new Error(`Failed to initialize Firebase Admin SDK: ${error.message}`);
    }
}

export function getAdminDb(): Firestore {
    initializeAdminApp();
    if (!db) {
        db = getFirestore();
    }
    return db;
}

export function getAdminStorage(): Storage {
    initializeAdminApp();
    if (!storage) {
        storage = getStorage();
    }
    return storage;
}
