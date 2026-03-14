
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      console.error("❌ Razorpay credentials missing in environment variables");
      return NextResponse.json({ error: "Razorpay credentials not configured." }, { status: 500 });
    }

    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    const body = await req.json();
    const { amount, donationId } = body;

    if (!amount || isNaN(parseFloat(amount))) {
      return NextResponse.json({ error: "Invalid donation amount." }, { status: 400 });
    }

    // Convert INR to Paise (MUST be an integer)
    const amountInPaise = Math.round(parseFloat(amount) * 100);

    if (amountInPaise < 100) {
      return NextResponse.json({ error: "Amount must be at least ₹1 (100 paise)." }, { status: 400 });
    }

    const options = {
      amount: amountInPaise,
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: {
        donationId: donationId || "anonymous",
      }
    };

    console.log("🚀 Creating Razorpay Order for amount:", amountInPaise);

    const order = await razorpay.orders.create(options);
    
    if (!order) {
      throw new Error("Failed to create order object from Razorpay");
    }

    return NextResponse.json(order);
  } catch (error: any) {
    console.error("❌ Razorpay Order API Error:", error);
    const errorMsg = error.error?.description || error.message || "Failed to create order";
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
