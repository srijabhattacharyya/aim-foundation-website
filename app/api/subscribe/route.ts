
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getAdminDb } from '@/app/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { newsletterSchema } from '@/components/sections/donation-forms/schemas';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ message: 'Bot detected.' }, { status: 400 });
    }

    const validatedFields = newsletterSchema.safeParse({ email: body.email });

    if (!validatedFields.success) {
      return NextResponse.json({ 
        message: validatedFields.error.flatten().fieldErrors.email?.[0] || 'Invalid email address.' 
      }, { status: 400 });
    }

    const { email } = validatedFields.data;
    const db = getAdminDb();
    
    const subscribersRef = db.collection('subscribers');
    const existingSubscriberQuery = await subscribersRef.where('email', '==', email).limit(1).get();

    if (!existingSubscriberQuery.empty) {
      return NextResponse.json({ message: 'This email is already subscribed.' }, { status: 409 });
    }

    await subscribersRef.add({
      email: email,
      createdAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ message: 'Thank you for subscribing!' }, { status: 201 });

  } catch (e) {
    console.error('Error subscribing:', e);
    return NextResponse.json({ message: 'Could not subscribe. Please try again later.' }, { status: 500 });
  }
}
