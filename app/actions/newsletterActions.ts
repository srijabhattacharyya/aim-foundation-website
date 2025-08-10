
'use server';

import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: 'A valid email is required.' }),
});

export async function addSubscriber(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;

  if (!adminDb || typeof adminDb.collection !== 'function') {
    console.error("Firebase Admin SDK is not initialized correctly for addSubscriber.");
    return { success: false, error: { _form: ["Server configuration error. Please try again later."] } };
  }
  
  try {
    const subscriberRef = adminDb.collection('subscribers').doc(email);
    const doc = await subscriberRef.get();

    if (doc.exists) {
        return { success: false, error: { _form: ["This email is already subscribed."] } };
    }

    await subscriberRef.set({
      email: email,
      createdAt: FieldValue.serverTimestamp(),
    });

    return { success: true };
  } catch (e: any) {
    console.error("Error adding subscriber to Firestore:", e);
    let errorMessage = "Could not subscribe. Please try again.";
    if (e.code === 'permission-denied') {
        errorMessage = "Permission denied. Please check server permissions.";
    } else if (e.message) {
        errorMessage = `A server error occurred: ${e.message}`;
    }
    return { success: false, error: { _form: [errorMessage] } };
  }
}
