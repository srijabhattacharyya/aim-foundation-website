
'use server';

import { z } from 'zod';
import { connectToDatabase } from '@/lib/mongodb';
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
    const client = await connectToDatabase();
    const db = client.db();
    
    const existingSubscriber = await db.collection('subscribers').findOne({ email: email });

    if (existingSubscriber) {
      return {
        success: false,
        message: 'This email is already subscribed.',
      };
    }

    await db.collection('subscribers').insertOne({
      email: email,
      createdAt: new Date(),
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
