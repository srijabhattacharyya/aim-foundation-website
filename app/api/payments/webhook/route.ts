
import crypto from "crypto";
import { getAdminDb } from "@/app/lib/firebase-admin";

export async function POST(req: Request) {
  try {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const body = await req.text();
    const signature = req.headers.get("x-razorpay-signature");

    if (!secret || !signature) {
      return new Response("Missing secret or signature", { status: 400 });
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    if (signature === expectedSignature) {
      const event = JSON.parse(body);
      const db = getAdminDb();

      if (event.event === "payment.captured") {
        const payment = event.payload.payment.entity;
        const donationId = payment.notes?.donationId;

        if (donationId) {
          await db.collection("donations").doc(donationId).update({
            paymentStatus: "captured",
            razorpayPaymentId: payment.id,
            updatedAt: new Date(),
          });
        }
      }

      return new Response("Webhook received", { status: 200 });
    }

    return new Response("Invalid signature", { status: 400 });
  } catch (error: any) {
    console.error("Webhook error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
