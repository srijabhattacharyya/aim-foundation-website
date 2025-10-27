
import { initializeApp, applicationDefault, getApp, App, getApps } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

let app: App | null = null;
let db: Firestore | null = null;
let storage: Storage | null = null;

function initializeAdminApp() {
    if (getApps().length === 0) {
        try {
            app = initializeApp({
                credential: applicationDefault(),
                storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
            });
            console.log('Firebase Admin SDK initialized successfully using Application Default Credentials.');
        } catch (error: any) {
            console.error('Firebase Admin Initialization Error:', error.message);
            // Provide a more helpful error message for local development
            if (error.message.includes('Could not find')) {
                console.error("Hint: You may need to run 'gcloud auth application-default login' in your terminal.");
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
        db = getFirestore(app!);
    }
    return db;
}

export function getAdminStorage(): Storage {
    if (!storage) {
        storage = getStorage(app!);
    }
    return storage;
}
