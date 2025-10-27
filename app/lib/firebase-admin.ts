
import admin from 'firebase-admin';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

// Cached instances
let db: Firestore | null = null;
let storage: Storage | null = null;

function initializeAdminApp() {
    // Only initialize if no apps are present.
    if (admin.apps.length > 0) {
        return;
    }

    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    // The private key needs to be properly formatted. 
    // Vercel and local .env files handle newlines differently. This handles both.
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
        console.error('Firebase Admin SDK environment variables are not set. Required: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY');
        throw new Error("Missing Firebase Admin credentials in environment variables.");
    }

    try {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId,
                clientEmail,
                privateKey,
            }),
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'aim-foundation-website.appspot.com',
        });
        console.log('Firebase Admin SDK initialized successfully.');
    } catch (error: any) {
        console.error('Firebase Admin Initialization Error:', error.message);
        throw new Error("Failed to initialize Firebase Admin SDK. Please check your Firebase Admin credentials.");
    }
}

export function getAdminDb(): Firestore {
    // Lazy-initialize on first call
    if (!admin.apps.length) {
       initializeAdminApp();
    }
    if (!db) {
        db = getFirestore();
    }
    return db;
}

export function getAdminStorage(): Storage {
     // Lazy-initialize on first call
     if (!admin.apps.length) {
       initializeAdminApp();
    }
    if (!storage) {
        storage = getStorage();
    }
    return storage;
}
