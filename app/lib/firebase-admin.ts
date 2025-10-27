
import { initializeApp, applicationDefault, getApp, App, getApps } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

let app: App | null = null;
let db: Firestore | null = null;
let storage: Storage | null = null;

function initializeAdminApp() {
    if (!getApps().length) {
        try {
            app = initializeApp({
                credential: applicationDefault(),
                storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
            });

            // 👇 ADD THESE LINES HERE
            console.log("✅ Using Service Account:", process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
            console.log("✅ Using Workload Identity Provider:", process.env.GOOGLE_WORKLOAD_IDENTITY_PROVIDER);

            console.log('Firebase Admin SDK initialized successfully.');
        } catch (error: any) {
            console.error('Firebase Admin Initialization Error:', error.message);
            throw new Error(`Failed to initialize Firebase Admin SDK: ${error.message}`);
        }
    } else {
        app = getApp();
    }
}

initializeAdminApp();

export function getAdminDb(): Firestore {
    if (!db) db = getFirestore(app!);
    return db;
}

export function getAdminStorage(): Storage {
    if (!storage) storage = getStorage(app!);
    return storage;
}
