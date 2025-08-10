
'use server';

import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: 'A valid email is required.' }),
  recaptcha: z.string().min(1, { message: 'Please complete the reCAPTCHA.' }),
});

export async function addSubscriber(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    email: formData.get('email'),
    recaptcha: formData.get('g-recaptcha-response'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, recaptcha } = validatedFields.data;

  // Verify reCAPTCHA token
  try {
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`, {
        method: 'POST',
    });
    const recaptchaData = await response.json();
    if (!recaptchaData.success) {
        console.error("reCAPTCHA verification failed with data:", recaptchaData);
        return { success: false, error: { _form: ['reCAPTCHA verification failed. Please try again.'] } };
    }
  } catch (e: any) {
    console.error("reCAPTCHA verification request failed: ", e.message);
    return { success: false, error: { _form: ["Could not verify reCAPTCHA. Please try again."] } };
  }

  if (!adminDb || !adminDb.collection) {
    console.error("Firebase Admin SDK is not initialized correctly for addSubscriber.");
    return { success: false, error: { _form: ["Server configuration error."] } };
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
    console.error("Error adding subscriber to Firestore: ", e.message);
    let errorMessage = "Could not subscribe. Please try again.";
    if (e.code === 'permission-denied') {
        errorMessage = "Permission denied. Please check server permissions.";
    }
    return { success: false, error: { _form: [errorMessage] } };
  }
}
