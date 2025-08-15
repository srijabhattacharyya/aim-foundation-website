
'use server';

import { adminDb } from '@/lib/firebase-admin';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import { revalidatePath } from 'next/cache';

// Donation Interfaces & Functions
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

export async function fetchDonations(): Promise<{ success: boolean; data?: Donation[]; error?: string }> {
    try {
        const donationsRef = adminDb.collection('donations');
        const q = donationsRef.orderBy('createdAt', 'desc');
        const querySnapshot = await q.get();

        const donations: Donation[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const createdAt = (data.createdAt as Timestamp).toDate().toISOString();
            return { id: doc.id, ...data, createdAt } as Donation;
        });

        return { success: true, data: donations };
    } catch (err: any) {
        console.error("Error fetching donations from server action: ", err);
        return { success: false, error: "Could not retrieve donations." };
    }
}

export async function deleteDonation(id: string): Promise<{ success: boolean; error?: string }> {
    try {
        await adminDb.collection('donations').doc(id).delete();
        revalidatePath('/admin/donations');
        return { success: true };
    } catch (e: any) {
        console.error("Error deleting donation from server action: ", e);
        return { success: false, error: "Could not delete the donation." };
    }
}


// Subscriber Interfaces & Functions
export interface Subscriber {
    id: string;
    email: string;
    createdAt: string;
}

export async function fetchSubscribers(): Promise<{ success: boolean; data?: Subscriber[]; error?: string }> {
    try {
        const subscribersRef = adminDb.collection('subscribers');
        const q = subscribersRef.orderBy('createdAt', 'desc');
        const querySnapshot = await q.get();
        
        const subscribers: Subscriber[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const createdAt = (data.createdAt as Timestamp).toDate().toISOString();
            return {
                id: doc.id,
                email: data.email || 'N/A',
                createdAt: createdAt,
            };
        });
        
        return { success: true, data: subscribers };
    } catch (err: any) {
        console.error("Error fetching subscribers from server action: ", err);
        return { success: false, error: "Could not retrieve subscribers." };
    }
}

export async function deleteSubscriber(id: string): Promise<{ success: boolean; error?: string }> {
    try {
        await adminDb.collection('subscribers').doc(id).delete();
        revalidatePath('/admin/subscribers');
        return { success: true };
    } catch (error: any) {
        console.error("Error deleting subscriber from server action:", error);
        return { success: false, error: "Failed to delete subscriber." };
    }
}


// Gallery Interfaces & Functions
export interface GalleryImage {
  id: string;
  description: string;
  imageUrl: string;
  status: 'Active' | 'Inactive';
  sequence: number;
}

export async function fetchGalleryImages(): Promise<{ success: boolean; data?: GalleryImage[]; error?: string }> {
    try {
      const q = adminDb.collection('gallery').orderBy('sequence', 'asc');
      const querySnapshot = await q.get();
      const fetchedImages: GalleryImage[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as GalleryImage));
      return { success: true, data: fetchedImages };
    } catch (error) {
      console.error("Error fetching gallery items from server action: ", error);
      return { success: false, error: 'Failed to fetch gallery items.' };
    }
}
