
import admin from 'firebase-admin';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';
import { firebaseAdminConfig } from '@/src/app/lib/firebase-admin-config';

// Cached instances
let db: Firestore | null = null;
let storage: Storage | null = null;

function initializeAdminApp() {
    if (admin.apps.length > 0) {
        return;
    }

    const { projectId, clientEmail, privateKey } = firebaseAdminConfig;

    if (!projectId || !clientEmail || !privateKey) {
        console.error('Firebase Admin SDK environment variables are not set correctly in firebase-admin-config.ts');
        throw new Error("Missing Firebase Admin credentials.");
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
    if (!admin.apps.length) {
       initializeAdminApp();
    }
    if (!db) {
        db = getFirestore();
    }
    return db;
}

export function getAdminStorage(): Storage {
     if (!admin.apps.length) {
       initializeAdminApp();
    }
    if (!storage) {
        storage = getStorage();
    }
    return storage;
}
