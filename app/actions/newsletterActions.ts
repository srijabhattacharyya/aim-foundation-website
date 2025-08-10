
'use server';

import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: 'A valid email is required.' }),
});

export async function addSubscriber(prevState: any, formData: FormData) {
  console.log("addSubscriber server action started.");

  const validatedFields = formSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    console.log("Validation failed:", validatedFields.error.flatten().fieldErrors);
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;

  if (!adminDb || typeof adminDb.collection !== 'function') {
    const errorMsg = "Firebase Admin SDK is not initialized correctly for addSubscriber.";
    console.error(errorMsg);
    return { success: false, error: { _form: [errorMsg] } };
  }
  
  try {
    console.log(`Attempting to access subscribers collection for email: ${email}`);
    const subscriberRef = adminDb.collection('subscribers').doc(email);
    const doc = await subscriberRef.get();

    if (doc.exists) {
        console.log(`Email ${email} is already subscribed.`);
        return { success: false, error: { _form: ["This email is already subscribed."] } };
    }

    console.log(`Adding new subscriber: ${email}`);
    await subscriberRef.set({
      email: email,
      createdAt: FieldValue.serverTimestamp(),
    });
    console.log(`Successfully added subscriber: ${email}`);

    return { success: true, error: null };
  } catch (e: any) {
    console.error("Error in addSubscriber server action: ", e);
    let errorMessage = "Could not subscribe. Please try again.";
    if (e.message) {
        errorMessage = `A server error occurred: ${e.message}`;
    }
    return { success: false, error: { _form: [errorMessage] } };
  }
}
