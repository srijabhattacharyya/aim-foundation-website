'use server';

import { adminDb, adminStorage } from '../firebase-admin';
import { revalidatePath } from 'next/cache';

export interface Patron {
  id: string;
  name: string;
  logoUrl: string;
  logoPath: string;
  createdAt: FirebaseFirestore.Timestamp;
}

// Add a new patron
export async function addPatron(name: string, logo: File): Promise<{ success: boolean, error?: string, newPatron?: Patron }> {
  if (!adminDb || !adminStorage) {
    const errorMsg = 'Firebase Admin SDK not initialized. Cannot add patron.';
    console.error(errorMsg);
    return { success: false, error: errorMsg };
  }
  
  try {
    // Upload image to Firebase Storage
    const logoBuffer = Buffer.from(await logo.arrayBuffer());
    const logoPath = `patrons/${Date.now()}-${logo.name}`;
    const file = adminStorage.bucket().file(logoPath);
    
    await file.save(logoBuffer, {
      metadata: {
        contentType: logo.type,
      },
    });

    const [logoUrl] = await file.getSignedUrl({
        action: 'read',
        expires: '03-09-2491' // A far-future date
    });

    // Add patron info to Firestore
    const patronRef = adminDb.collection('patrons').doc();
    const newPatron: Omit<Patron, 'id'> = {
      name,
      logoUrl,
      logoPath,
      createdAt: new Date() as any, // Firestore admin handles Timestamp conversion
    };
    
    await patronRef.set(newPatron);

    // Revalidate the homepage and patrons page to show new data
    revalidatePath('/');
    revalidatePath('/admin/patrons');
    
    return { success: true, newPatron: { id: patronRef.id, ...newPatron } as Patron };
  } catch (error: any) {
    console.error('Error adding patron:', error);
    return { success: false, error: error.message };
  }
}

// Get all patrons
export async function getPatrons(): Promise<Patron[]> {
  if (!adminDb) {
    console.error('Firebase Admin SDK not initialized. Cannot get patrons.');
    return [];
  }
  
  try {
    const snapshot = await adminDb.collection('patrons').orderBy('createdAt', 'desc').get();
    if (snapshot.empty) {
      return [];
    }
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Patron));
  } catch (error) {
    console.error('Error getting patrons:', error);
    return [];
  }
}

// Delete a patron
export async function deletePatron(patronId: string, logoPath: string): Promise<{ success: boolean; error?: string }> {
  if (!adminDb || !adminStorage) {
     const errorMsg = 'Firebase Admin SDK not initialized. Cannot delete patron.';
    console.error(errorMsg);
    return { success: false, error: errorMsg };
  }
  
  try {
    // Delete from Firestore
    await adminDb.collection('patrons').doc(patronId).delete();

    // Delete from Storage
    await adminStorage.bucket().file(logoPath).delete();

    // Revalidate paths
    revalidatePath('/');
    revalidatePath('/admin/patrons');

    return { success: true };
  } catch (error: any) {
    console.error('Error deleting patron:', error);
    return { success: false, error: error.message };
  }
}
