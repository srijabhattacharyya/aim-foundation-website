'use server';

import Razorpay from 'razorpay';
import { randomBytes } from 'crypto';

export async function createRazorpayOrder(amount: number, currency: string = 'INR') {
  try {
    const instance = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const options = {
      amount: amount * 100, // amount in the smallest currency unit
      currency,
      receipt: `receipt_order_${randomBytes(8).toString('hex')}`,
    };

    const order = await instance.orders.create(options);

    if (!order) {
      return { success: false, message: 'Could not create Razorpay order.' };
    }

    return { success: true, order };
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return { success: false, message: 'An error occurred while creating the payment order.' };
  }
}
