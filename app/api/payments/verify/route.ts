
import crypto from "crypto";
import { NextResponse } from "next/server";
import { db } from "@/app/lib/firebase";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, donationId } = await req.json();

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) throw new Error("Razorpay secret not configured");

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", secret)
      .update(sign)
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Update the donation record with success status
      // We use the client SDK here because we've enabled 'update' in rules
      // as a fallback for missing service account keys.
      const donationRef = doc(db, "donations", donationId);
      await updateDoc(donationRef, {
        paymentStatus: "success",
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        updatedAt: serverTimestamp(),
      });

      return NextResponse.json({ status: "Payment verified" });
    } else {
      return NextResponse.json({ status: "Invalid signature" }, { status: 400 });
    }
  } catch (error: any) {
    console.error("Error verifying payment:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
