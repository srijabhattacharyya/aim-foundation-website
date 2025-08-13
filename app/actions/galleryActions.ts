
'use server';

import { z } from 'zod';
import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { revalidatePath } from 'next/cache';
import { getStorage } from 'firebase-admin/storage';
import { Buffer } from 'buffer';

const galleryItemSchema = z.object({
  description: z.string(),
  status: z.enum(['Active', 'Inactive']),
  sequence: z.number(),
  imageUrl: z.string().url(),
});

const addGalleryItemSchema = z.object({
    description: z.string().min(1, 'Description is required'),
    status: z.enum(['Active', 'Inactive']),
    sequence: z.coerce.number().min(0, 'Sequence must be a positive number'),
    imageUrl: z.string().url('A valid image URL is required'),
});


export async function addGalleryItem(
    itemData: z.infer<typeof addGalleryItemSchema>, 
    id: string | null
) {
  try {
    const validatedData = addGalleryItemSchema.parse(itemData);
    
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

export async function deleteGalleryItem(id: string) {
    try {
        const docSnap = await adminDb.collection('gallery').doc(id).get();
        const data = docSnap.data();
        if (data && data.imageUrl) {
            try {
                const storage = getStorage();
                const imageRef = storage.bucket().file(new URL(data.imageUrl).pathname.split('/').pop()!);
                await imageRef.delete();
            } catch (storageError) {
                console.warn("Could not delete image from storage, it might not exist or there's a permission issue:", storageError);
            }
        }
        await adminDb.collection('gallery').doc(id).delete();
        revalidatePath('/gallery');
        revalidatePath('/admin/gallery');
        return { success: true };
    } catch (error) {
        console.error("Error deleting gallery item: ", error);
        return { success: false, error: "Failed to delete gallery item." };
    }
}
