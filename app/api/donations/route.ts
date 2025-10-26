
import { NextResponse } from 'next/server';
import { getAdminDb } from '@/app/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { donationSchema } from '@/components/sections/donation-forms/schemas';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const validatedFields = donationSchema.safeParse(data);

    if (!validatedFields.success) {
      console.error('Validation Errors:', validatedFields.error.flatten().fieldErrors);
      return NextResponse.json({
        message: 'Validation failed. Please check the fields.',
        errors: validatedFields.error.flatten().fieldErrors,
      }, { status: 400 });
    }

    const finalAmount =
      validatedFields.data.otherAmount && validatedFields.data.otherAmount.trim() !== ''
        ? validatedFields.data.otherAmount
        : validatedFields.data.amount;

    const dataToSave = {
      ...validatedFields.data,
      amount: finalAmount,
      createdAt: FieldValue.serverTimestamp(),
    };

    delete (dataToSave as any).agree;
    delete (dataToSave as any).otherAmount;

    const db = getAdminDb();
    await db.collection('donations').add(dataToSave);

    return NextResponse.json({
      success: true,
      message: 'Donation recorded successfully. Please proceed with the payment.',
    }, { status: 201 });

  } catch (e: any) {
    console.error('Error recording donation to Firestore:', e);
    return NextResponse.json({
        message: `Database Error: ${e.message || 'Could not record donation.'}`,
    }, { status: 500 });
  }
}
