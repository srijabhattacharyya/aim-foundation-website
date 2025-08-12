
'use server';

import { z } from 'zod';
import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { revalidatePath } from 'next/cache';

const galleryItemSchema = z.object({
  description: z.string(),
  status: z.enum(['Active', 'Inactive']),
  sequence: z.number(),
  initiatives: z.array(z.string()),
  imageUrl: z.string().url(),
});

export async function addGalleryItem(
    itemData: z.infer<typeof galleryItemSchema>, 
    id: string | null
) {
  try {
    const validatedData = galleryItemSchema.parse(itemData);
    
    if (id) {
        const docRef = adminDb.collection('gallery').doc(id);
        await docRef.update({
            ...validatedData,
            updatedAt: FieldValue.serverTimestamp(),
        });
        revalidatePath('/gallery');
        revalidatePath('/admin/gallery');
        return { success: true, id: id };

    } else {
        const docRef = await adminDb.collection('gallery').add({
            ...validatedData,
            createdAt: FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp(),
        });
        revalidatePath('/gallery');
        revalidatePath('/admin/gallery');
        return { success: true, id: docRef.id };
    }

  } catch (error) {
    console.error("Error adding/updating gallery item: ", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed on the server." };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function getGalleryItems() {
    try {
        const snapshot = await adminDb.collection('gallery').orderBy('sequence', 'asc').get();
        if (snapshot.empty) {
            return { success: true, data: [] };
        }
        const items = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                description: data.description,
                imageUrl: data.imageUrl,
                status: data.status,
                sequence: data.sequence,
                initiatives: data.initiatives,
            };
        });
        return { success: true, data: items };
    } catch (error) {
        console.error("Error fetching gallery items: ", error);
        return { success: false, error: "Failed to fetch gallery items." };
    }
}

export async function deleteGalleryItem(id: string) {
    try {
        await adminDb.collection('gallery').doc(id).delete();
        revalidatePath('/gallery');
        revalidatePath('/admin/gallery');
        return { success: true };
    } catch (error) {
        console.error("Error deleting gallery item: ", error);
        return { success: false, error: "Failed to delete gallery item." };
    }
}
