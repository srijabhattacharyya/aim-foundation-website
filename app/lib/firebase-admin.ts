
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

    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    // The private key needs to be properly formatted. Vercel automatically handles the newlines.
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    // If these environment variables are not set, it's a configuration error.
    if (!projectId || !clientEmail || !privateKey) {
        console.error('Firebase Admin SDK environment variables are not set. Required: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY');
        // We throw an error here to make it clear during development/deployment that the config is missing.
        // The error seen by the user will be the one from the catch block in the server action.
        return;
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
        console.log('Firebase Admin SDK initialized successfully using service account environment variables.');
    } catch (error: any) {
        console.error('Firebase Admin Initialization Error:', error.message);
        // This will help diagnose if there's a problem with the credentials setup.
        throw new Error("Failed to initialize Firebase Admin SDK. Please check your FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY environment variables.");
    }
}

// Call initialization once at module load
initializeAdminApp();

export function getAdminDb(): Firestore {
    if (!admin.apps.length) {
       initializeAdminApp();
       if (!admin.apps.length) {
         throw new Error("Admin SDK not initialized");
       }
    }
    if (!db) {
        db = getFirestore();
    }
    return db;
}

export function getAdminStorage(): Storage {
     if (!admin.apps.length) {
       initializeAdminApp();
       if (!admin.apps.length) {
         throw new Error("Admin SDK not initialized");
       }
    }
    if (!storage) {
        storage = getStorage();
    }
    return storage;
}
