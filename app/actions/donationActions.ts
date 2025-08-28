
'use server';

import { z } from 'zod';
import { donationSchema } from '@/components/sections/donation-forms/schemas';

export async function addDonation(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  // Manually handle checkbox value
  const refinedData = {
    ...data,
    agree: data.get('agree') === 'on',
    amount: data.get('otherAmount') && (data.get('otherAmount') as string).trim() !== '' ? '' : data.get('amount'),
  };

  const validatedFields = donationSchema.safeParse(refinedData);

  if (!validatedFields.success) {
    console.error("Validation Errors:", validatedFields.error.flatten().fieldErrors);
    return {
        success: false,
        message: 'Validation failed. Please check the fields.',
        errors: validatedFields.error.flatten().fieldErrors,
        data: null,
    };
  }
  
  const finalAmount = validatedFields.data.otherAmount && validatedFields.data.otherAmount.trim() !== '' 
    ? validatedFields.data.otherAmount 
    : validatedFields.data.amount;
  
  const dataToReturn = {
    ...validatedFields.data,
    amount: finalAmount,
  };

  // @ts-ignore
  delete dataToReturn.agree;
  
  return { success: true, message: "Validation successful.", data: dataToReturn, errors: {} };
}
