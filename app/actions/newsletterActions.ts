
'use server';

import { z } from 'zod';
import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

const formSchema = z.object({
  email: z.string().email({ message: 'A valid email is required.' }),
});

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors.email?.[0] || 'Invalid email address.',
    };
  }

  const { email } = validatedFields.data;

  try {
    const subscriberRef = adminDb.collection('subscribers').doc(email);
    const docSnap = await subscriberRef.get();

    if (docSnap.exists) {
      return {
        success: false,
        message: 'This email is already subscribed.',
      };
    }

    await subscriberRef.set({
      email: email,
      createdAt: FieldValue.serverTimestamp(),
    });

    return {
      success: true,
      message: 'Thank you for subscribing!',
    };
  } catch (e) {
    console.error('Error subscribing:', e);
    return {
      success: false,
      message: 'Could not subscribe. Please try again later.',
    };
  }
}
