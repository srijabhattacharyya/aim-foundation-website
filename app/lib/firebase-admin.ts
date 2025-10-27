
import admin from 'firebase-admin';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

// Cached instances
let db: Firestore | null = null;
let storage: Storage | null = null;

function initializeAdminApp() {
    // Prevent re-initialization in a serverless environment
    if (admin.apps.length > 0) {
        return;
    }

    // When running in a Google Cloud environment (like this dev environment or Vercel),
    // initializeApp() with no arguments will automatically use Application Default Credentials.
    // This is the most secure method and does not require service account keys.
    try {
        admin.initializeApp();
        console.log('Firebase Admin SDK initialized successfully using Application Default Credentials.');
    } catch (error: any) {
        console.error('Firebase Admin Initialization Error:', error.message);
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
