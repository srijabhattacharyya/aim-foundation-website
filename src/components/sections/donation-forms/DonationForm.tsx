
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
      
      const finalAmount = parseFloat(amountStr);
      if (isNaN(finalAmount) || finalAmount <= 0) {
        throw new Error("Please enter a valid donation amount.");
      }

      // 1. Save preliminary data to Firestore
      const docRef = await addDoc(collection(db, "donations"), {
        ...values,
        amount: finalAmount,
        paymentStatus: "pending",
        createdAt: serverTimestamp(),
      });

      if (values.nationality === 'Indian') {
        const res = await loadRazorpay();
        if (!res) throw new Error("Razorpay SDK failed to load");

        const orderRes = await fetch("/api/payments/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: finalAmount, donationId: docRef.id }),
        });
        const orderData = await orderRes.json();

        if (orderData.error) throw new Error(orderData.error);

        // Note: amount and currency are fetched automatically from order_id
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          name: "AIM Foundation",
          description: `Donation for ${values.cause}`,
          order_id: orderData.id,
          handler: async function (response: any) {
            const verifyRes = await fetch("/api/payments/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...response, donationId: docRef.id }),
            });
            const verifyData = await verifyRes.json();
            if (verifyData.status === "Payment verified") {
              toast({ title: "Success!", description: "Thank you for your donation." });
              form.reset();
              router.push('/thank-you');
            } else {
              toast({ variant: "destructive", title: "Verification Failed", description: "Payment verification failed." });
            }
          },
          prefill: {
            name: values.fullName,
            email: values.email,
            contact: values.mobile,
          },
          theme: { color: "#2ecc71" },
          modal: {
            ondismiss: function() {
              setIsSubmitting(false);
            }
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        toast({ title: "Donation Recorded!", description: "Redirecting to payment..." });
        const paymentUrl = "https://stripe.com/in";
        window.open(paymentUrl, "_blank");
        form.reset();
        router.push('/thank-you');
      }

    } catch (error: any) {
       toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: error.message || 'Could not process donation.',
      });
      setIsSubmitting(false);
    } finally {
      // setIsSubmitting(false); // Managed by Razorpay or catch block
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
