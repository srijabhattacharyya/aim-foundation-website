
import Razorpay from "react-razorpay";
import { NextResponse } from "next/server";
import RazorpayNode from "razorpay";

export async function POST(req: Request) {
  try {
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      console.error("❌ RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET is missing from environment variables.");
      return NextResponse.json({ error: "Razorpay credentials are not configured on the server." }, { status: 500 });
    }

    const razorpay = new RazorpayNode({
      key_id,
      key_secret,
    });

    const body = await req.json();
    const { amount, donationId } = body;

    if (!amount || isNaN(parseFloat(amount))) {
      console.error("❌ Invalid amount received in create-order:", amount);
      return NextResponse.json({ error: "Invalid donation amount." }, { status: 400 });
    }

    // Convert INR to Paise (must be an integer)
    const amountInPaise = Math.round(parseFloat(amount) * 100);

    if (amountInPaise < 100) {
      return NextResponse.json({ error: "Amount must be at least ₹1." }, { status: 400 });
    }

    const options = {
      amount: amountInPaise,
      currency: "INR",
      // Receipt must be unique and max 40 chars. Using timestamp + partial ID for safety.
      receipt: `rcpt_${donationId?.substring(0, 10) || Date.now()}`,
      notes: {
        donationId: donationId || "anonymous",
      }
    };

    console.log("🚀 Creating Razorpay Order with options:", JSON.stringify(options));

    const order = await razorpay.orders.create(options);
    
    console.log("✅ Razorpay Order created successfully:", order.id);
    
    return NextResponse.json(order);
  } catch (error: any) {
    console.error("❌ Razorpay Order Creation Error:", error);
    // Return the actual error message from Razorpay if available
    const errorMsg = error.error?.description || error.message || "Unknown error creating order";
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
