
'use server';

import { db } from '@/lib/firebase-admin';
import { collection, getDocs, deleteDoc, doc, query, orderBy, Timestamp } from 'firebase/firestore';

export interface Donation {
    id: string;
    createdAt: string;
    fullName: string;
    email: string;
    amount: string;
    otherAmount?: string;
    cause: string;
    nationality?: string;
    mobile?: string;
    dob?: string;
    pan?: string;
    aadhar?: string;
    passport?: string;
    country?: string;
    state?: string;
    city?: string;
    address?: string;
    pincode?: string;
    initiative?: string;
}

export interface Subscriber {
    id: string;
    email: string;
    createdAt: string;
}

export interface GalleryImage {
    id: string;
    description: string;
    status: 'Active' | 'Inactive';
    sequence: number;
    imageUrl: string;
    createdAt: string;
}

export async function fetchDonations() {
    try {
        const donationsRef = collection(db, 'donations');
        const q = query(donationsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);

        const fetchedDonations: Donation[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const createdAt = (data.createdAt as Timestamp)?.toDate().toISOString() || new Date().toISOString();
            return { id: doc.id, ...data, createdAt } as Donation;
        });
        
        return { success: true, data: fetchedDonations };
    } catch (err: any) {
        console.error("Error fetching donations: ", err);
        return { success: false, error: "Could not retrieve donations." };
    }
}

export async function deleteDonation(id: string) {
    try {
        await deleteDoc(doc(db, 'donations', id));
        return { success: true };
    } catch (e: any) {
        console.error("Error deleting donation: ", e);
        return { success: false, error: "Could not delete the donation." };
    }
}

export async function fetchSubscribers() {
    try {
        const subscribersRef = collection(db, 'subscribers');
        const q = query(subscribersRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const fetchedSubscribers: Subscriber[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const createdAt = (data.createdAt as Timestamp)?.toDate().toISOString() || new Date().toISOString();
            return {
                id: doc.id,
                email: data.email || 'N/A',
                createdAt: createdAt,
            };
        });
        
        return { success: true, data: fetchedSubscribers };
    } catch (err: any) {
        console.error("Error fetching subscribers: ", err);
        return { success: false, error: "Could not retrieve subscribers." };
    }
}

export async function deleteSubscriber(id: string) {
    try {
        await deleteDoc(doc(db, 'subscribers', id));
        return { success: true };
    } catch (error: any) {
        console.error("Error deleting subscriber:", error);
        return { success: false, error: "Failed to delete subscriber." };
    }
}

export async function fetchGalleryImages() {
    try {
        const galleryRef = collection(db, 'gallery');
        const q = query(galleryRef, orderBy('sequence', 'asc'));
        const querySnapshot = await getDocs(q);

        const fetchedImages: GalleryImage[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const createdAt = (data.createdAt as Timestamp)?.toDate().toISOString() || new Date().toISOString();
            return { 
                id: doc.id,
                description: data.description,
                status: data.status,
                sequence: data.sequence,
                imageUrl: data.imageUrl,
                createdAt
            } as GalleryImage;
        });
        
        return { success: true, data: fetchedImages };
    } catch (err: any) {
        console.error("Error fetching gallery images: ", err);
        return { success: false, error: "Could not retrieve gallery items." };
    }
}
