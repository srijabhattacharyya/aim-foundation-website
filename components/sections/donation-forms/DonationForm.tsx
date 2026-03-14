
"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DonationFormFields } from "@/components/sections/donation-forms/DonationFormFields";
import { Form } from "@/components/ui/form";
import { DonationAmount } from "@/types/donation";
import { donationSchema } from '@/components/sections/donation-forms/schemas';
import type { z } from "zod";
import { countries } from "@/app/lib/countries";
import { useToast } from "@/hooks/use-toast";
import { SubmitButton } from "./SubmitButton";
import { db } from "@/app/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from 'next/navigation';

interface DonationFormProps {
  cause: string;
  donationAmountsIndian: DonationAmount[];
  donationAmountsNonIndian: DonationAmount[];
  defaultIndianAmount: string;
  defaultNonIndianAmount: string;
  formTitle: string;
  formSubtitle: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function DonationForm({
  cause,
  donationAmountsIndian,
  donationAmountsNonIndian,
  defaultIndianAmount,
  defaultNonIndianAmount,
  formTitle,
  formSubtitle,
}: DonationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      nationality: "Indian",
      amount: defaultIndianAmount,
      otherAmount: "",
      fullName: "",
      email: "",
      countryCode: "+91",
      mobile: "",
      dob: "",
      pan: "",
      aadhar: "",
      passport: "",
      country: "India",
      state: "",
      city: "",
      address: "",
      pincode: "",
      agree: false,
      cause,
      initiative: cause,
    },
  });

  const nationality = form.watch("nationality");
  const selectedCountry = form.watch("country");

  useEffect(() => {
    if (nationality === "Indian") {
      form.setValue("country", "India");
      form.setValue("countryCode", "+91");
      form.setValue("passport", "");
      form.setValue("amount", defaultIndianAmount);
    } else {
      if (form.getValues("country") === "India") form.setValue("country", "");
      form.setValue("countryCode", "+1");
      form.setValue("pan", "");
      form.setValue("aadhar", "");
      form.setValue("state", "");
      form.setValue("amount", defaultNonIndianAmount);
    }
    form.resetField("mobile");
    form.resetField("otherAmount");
  }, [nationality, form, defaultIndianAmount, defaultNonIndianAmount]);

  useEffect(() => {
    if (selectedCountry) {
      const countryData = countries.find(c => c.name === selectedCountry);
      if (countryData) {
        form.setValue("countryCode", countryData.dial_code);
      }
    }
  }, [selectedCountry, form]);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  
  async function onSubmit(values: z.infer<typeof donationSchema>) {
    setIsSubmitting(true);
    try {
      const amountStr = values.otherAmount && values.otherAmount.trim() !== '' 
        ? values.otherAmount 
        : values.amount;
      
      const finalAmountInRupees = parseFloat(amountStr);
      if (isNaN(finalAmountInRupees) || finalAmountInRupees <= 0) {
        throw new Error("Please enter a valid donation amount.");
      }

      // 1. Save preliminary record to Firestore
      const docRef = await addDoc(collection(db, "donations"), {
        ...values,
        amount: finalAmountInRupees,
        paymentStatus: "initiated",
        createdAt: serverTimestamp(),
      });

      if (values.nationality === 'Indian') {
        const res = await loadRazorpay();
        if (!res) throw new Error("Could not load payment gateway.");

        // 2. Create Order on Server
        const orderRes = await fetch("/api/payments/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            amount: finalAmountInRupees, 
            donationId: docRef.id 
          }),
        });
        
        const orderData = await orderRes.json();

        if (orderData.error) {
          throw new Error(orderData.error);
        }

        // Safer prefill contact formatting
        const formattedContact = `${values.countryCode}${values.mobile}`.replace(/\D/g, "");

        // 3. Open Razorpay Checkout Modal
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: orderData.amount, // Strictly use the amount from the backend order
          currency: orderData.currency, 
          name: "AIM Foundation",
          description: `Donation for ${values.cause}`,
          image: "/images/logo.png",
          order_id: orderData.id,
          handler: async function (response: any) {
            // 4. Verify payment on server
            const verifyRes = await fetch("/api/payments/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                donationId: docRef.id
              }),
            });
            const verifyData = await verifyRes.json();
            
            if (verifyData.status === "Payment verified") {
              toast({ title: "Success!", description: "Thank you for your support." });
              form.reset();
              router.push('/thank-you');
            } else {
              toast({ variant: "destructive", title: "Failed", description: "Payment verification failed." });
              setIsSubmitting(false);
            }
          },
          prefill: {
            name: values.fullName,
            email: values.email,
            contact: formattedContact,
          },
          notes: {
            donationId: docRef.id
          },
          retry: {
            enabled: true
          },
          theme: { color: "#2ecc71" },
          modal: {
            ondismiss: function() {
              setIsSubmitting(false);
            }
          }
        };

        // Debug logging
        console.log("Razorpay Key Status:", !!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID);
        console.log("Order Data:", orderData);
        console.log("Checkout Options (Prefill Contact):", formattedContact);

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        // International logic (Redirect to generic processor for now)
        toast({ title: "Redirecting...", description: "Connecting to international gateway." });
        window.open("https://stripe.com/in", "_blank");
        form.reset();
        router.push('/thank-you');
      }

    } catch (error: any) {
      console.error("❌ Submission Error:", error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'An error occurred.',
      });
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full border-0 shadow-none rounded-none">
      <CardContent className="p-6 md:p-8 relative">
        <div className="absolute top-4 left-4 h-16 w-32 bg-white flex items-center justify-center p-2 rounded-md">
          <Image
            src="/images/logo.png"
            alt="AIM Foundation Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </div>

        <div className="text-center mb-8 pt-20">
          <h2 className="text-3xl font-bold font-headline">{formTitle}</h2>
          <p className="text-muted-foreground">{formSubtitle}</p>
        </div>

        <FormProvider {...form}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <DonationFormFields
                donationAmountsIndian={donationAmountsIndian}
                donationAmountsNonIndian={donationAmountsNonIndian}
              />
              <SubmitButton isSubmitting={isSubmitting} />
            </form>
          </Form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
