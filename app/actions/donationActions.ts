
'use server';

import { z } from 'zod';
import { donationSchema } from '@/components/sections/donation-forms/schemas';

export async function addDonation(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const refinedData = {
    ...data,
    agree: data.get('agree') === 'on',
  };

  const validatedFields = donationSchema.safeParse(refinedData);

  if (!validatedFields.success) {
    console.error("Validation Errors:", validatedFields.error.flatten().fieldErrors);
    return {
        success: false,
        message: 'Validation failed. Please check the fields.',
        errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  // Only validation is done on the server. The client will handle the DB write.
  return { success: true, message: "Validation successful.", data: validatedFields.data };
}
