
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

    const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
    if (!serviceAccountKey) {
        console.error("Firebase Admin SDK: FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set.");
        throw new Error("FIREBASE_SERVICE_ACCOUNT_KEY is not set.");
    }

    let credentials;
    try {
        // First, try to parse it as a JSON object
        credentials = JSON.parse(serviceAccountKey);
    } catch (e) {
        try {
            // If that fails, try to decode it from base64
            const decodedKey = Buffer.from(serviceAccountKey, 'base64').toString('utf-8');
            credentials = JSON.parse(decodedKey);
        } catch (e2) {
            console.error("Failed to parse Firebase service account key. It's not a valid JSON string or base64-encoded JSON.");
            throw new Error("Invalid Firebase service account key format.");
        }
    }

    try {
        admin.initializeApp({
            credential: admin.credential.cert(credentials),
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'aim-foundation-website.appspot.com'
        });
    } catch (error: any) {
        console.error('Firebase Admin Initialization Error:', error.message);
        throw new Error("Failed to initialize Firebase Admin SDK.");
    }
}

// Call initialization once
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
