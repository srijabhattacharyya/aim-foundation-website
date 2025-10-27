import { NextResponse } from "next/server";
import admin from "firebase-admin";

// Check if the app is already initialized
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
    console.log("✅ Firebase Admin initialized in test-firestore route");
  } catch (error) {
    console.error("❌ Firebase Admin init error:", error);
  }
}

const db = admin.firestore();

export async function GET() {
  try {
    const testDocRef = db.collection("vercel_test").doc("connection_check");
    await testDocRef.set({
      message: "Firestore connection successful ✅",
      timestamp: new Date().toISOString(),
    });

    const doc = await testDocRef.get();
    const data = doc.data();

    console.log("🔥 Firestore Test Document:", data);

    return NextResponse.json({
      success: true,
      data,
      note: "You can safely delete this test route after verification.",
    });
  } catch (error: any) {
    console.error("❌ Firestore test failed:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
