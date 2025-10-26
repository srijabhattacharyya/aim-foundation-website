
'use server';

import { z } from 'zod';
import { getAdminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { newsletterSchema } from '@/components/sections/donation-forms/schemas';


export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  // Honeypot check
  if (formData.get('honeypot')) {
    return {
      success: false,
      message: 'Bot detected.',
    };
  }

  const validatedFields = newsletterSchema.safeParse({
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
    const db = getAdminDb();
    
    const subscribersRef = db.collection('subscribers');
    const existingSubscriberQuery = await subscribersRef.where('email', '==', email).limit(1).get();

    if (!existingSubscriberQuery.empty) {
      return {
        success: false,
        message: 'This email is already subscribed.',
      };
    }

    await subscribersRef.add({
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
