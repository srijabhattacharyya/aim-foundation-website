
'use server';

import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '@/lib/firebase';

export async function addDonation(data: any) {
  try {
    const docRef = await addDoc(collection(db, "donations"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, error: e };
  }
}
