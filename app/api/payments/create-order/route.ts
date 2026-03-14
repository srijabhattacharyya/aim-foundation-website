
import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      throw new Error("Razorpay credentials are not configured in environment variables.");
    }

    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    const { amount, donationId } = await req.json();

    const options = {
      amount: Math.round(parseFloat(amount) * 100), // amount in paise
      currency: "INR",
      receipt: `receipt_${donationId}`,
      notes: {
        donationId: donationId
      }
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json(order);
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
