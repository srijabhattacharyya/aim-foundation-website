
'use server';

import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

// Donations
export async function fetchDonations() {
    const snapshot = await adminDb.collection('donations').orderBy('createdAt', 'desc').get();
    return snapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt.toDate().toISOString(),
        };
    });
}

export async function deleteDonation(id: string) {
    await adminDb.collection('donations').doc(id).delete();
}

// Subscribers
export async function fetchSubscribers() {
    const snapshot = await adminDb.collection('subscribers').orderBy('createdAt', 'desc').get();
    return snapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            email: data.email,
            createdAt: data.createdAt.toDate().toISOString(),
        };
    });
}

export async function deleteSubscriber(id: string) {
    await adminDb.collection('subscribers').doc(id).delete();
}


// Gallery
export async function fetchGalleryImages() {
    const snapshot = await adminDb.collection('gallery').orderBy('sequence', 'asc').get();
    return snapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt.toDate().toISOString(),
        };
    });
}

export async function addGalleryImage(data: { description: string; status: 'Active' | 'Inactive'; sequence: number; imageUrl: string; }) {
    await adminDb.collection('gallery').add({
        ...data,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
    });
}

export async function updateGalleryImage(id: string, data: { description: string; status: 'Active' | 'Inactive'; sequence: number; imageUrl: string; }) {
    await adminDb.collection('gallery').doc(id).update({
        ...data,
        updatedAt: FieldValue.serverTimestamp(),
    });
}

export async function deleteGalleryImage(id: string) {
    await adminDb.collection('gallery').doc(id).delete();
}
