
import crypto from "crypto";
import { NextResponse } from "next/server";
import { getAdminDb } from "@/app/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, donationId } = await req.json();

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign)
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      const db = getAdminDb();
      
      // Update the donation record with success status and payment details
      await db.collection("donations").doc(donationId).update({
        paymentStatus: "success",
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        updatedAt: new Date(),
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
