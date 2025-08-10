
'use server';

import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

export interface Donation {
    id: string;
    createdAt: string;
    fullName: string;
    email: string;
    amount: string;
    otherAmount?: string;
    cause: string;
}

export async function addDonation(data: any) {
  console.log("addDonation server action started.");

  if (!adminDb || !adminDb.collection) {
    console.error("Firebase Admin SDK is not initialized correctly. adminDb or adminDb.collection is not available.");
    return { success: false, error: "Server configuration error." };
  }
  console.log("Firebase Admin SDK seems to be initialized.");
    
  try {
    const { recaptcha, ...donationData } = data;
    console.log("Attempting to add document to 'donations' collection with data:", donationData);
    
    const docRef = await adminDb.collection("donations").add({
      ...donationData,
      createdAt: FieldValue.serverTimestamp(),
    });

    console.log("Document successfully written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (e) {
    console.error("Error adding document to Firestore: ", e);
    // Return a generic error to the client for security
    return { success: false, error: "Could not record donation. Please try again." };
  }
}

export async function getDonations(): Promise<{ success: boolean; data?: Donation[]; error?: string }> {
    console.log("getDonations server action started.");
    if (!adminDb || !adminDb.collection) {
        console.error("Firebase Admin SDK is not initialized correctly.");
        return { success: false, error: "Server configuration error." };
    }

    try {
        console.log("Attempting to fetch 'donations' collection...");
        const donationsSnapshot = await adminDb.collection('donations').orderBy('createdAt', 'desc').get();
        console.log(`Successfully fetched ${donationsSnapshot.docs.length} documents.`);

        const donations: Donation[] = donationsSnapshot.docs.map(doc => {
            const data = doc.data();
            // Safely handle the createdAt field to prevent crashes
            const createdAt = data.createdAt && typeof data.createdAt.toDate === 'function' 
                ? data.createdAt.toDate().toISOString() 
                : new Date().toISOString();
            
            return {
                id: doc.id,
                createdAt: createdAt,
                fullName: data.fullName || '',
                email: data.email || '',
                amount: data.amount || '',
                otherAmount: data.otherAmount || '',
                cause: data.cause || 'N/A',
            };
        });
        console.log(`Successfully processed ${donations.length} donations.`);
        return { success: true, data: donations };
    } catch (e: any) {
        console.error("Error fetching documents from Firestore: ", e);
        // Provide a more specific error message for permission issues.
        if (e.code === 'permission-denied' || (e.message && e.message.includes('access token'))) {
            return { success: false, error: "Could not retrieve donations. Please check server permissions." };
        }
        return { success: false, error: "Could not retrieve donations. " + e.message };
    }
}
