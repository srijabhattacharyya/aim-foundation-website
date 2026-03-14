
"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DonationFormFields } from "@/components/sections/donation-forms/DonationFormFields";
import { Form } from "@/components/ui/form";
import { DonationAmount } from "@/types/donation";
import { donationSchema } from '@/components/sections/donation-forms/schemas';
import type { z } from "zod";
import { countries } from "@/app/lib/countries";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { db } from "@/app/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Loader2, CheckCircle2 } from "lucide-react";

interface DonationFormProps {
  cause: string;
  donationAmountsIndian: DonationAmount[];
  donationAmountsNonIndian: DonationAmount[];
  defaultIndianAmount: string;
  defaultNonIndianAmount: string;
  formTitle: string;
  formSubtitle: string;
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
  const [isDataSaved, setIsDataSaved] = useState(false);
  const rzpButtonRef = useRef<HTMLDivElement>(null);

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

  // Dynamically load the Razorpay script once data is saved
  useEffect(() => {
    if (isDataSaved && rzpButtonRef.current) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_SQxZiuYPAbjQdo");
      script.async = true;
      rzpButtonRef.current.appendChild(script);
    }
  }, [isDataSaved]);

  async function onSubmit(values: z.infer<typeof donationSchema>) {
    setIsSubmitting(true);
    try {
      const amountStr = values.otherAmount?.trim() || values.amount;
      const finalAmount = parseFloat(amountStr);
      
      // 1. Save all details to Firestore first (for 80G and records)
      await addDoc(collection(db, "donations"), {
        ...values,
        amount: finalAmount,
        paymentStatus: "initiated",
        createdAt: serverTimestamp(),
      });

      // 2. Switch to payment button view
      setIsDataSaved(true);
      toast({
        title: "Details Saved",
        description: "Please proceed to payment using the button below.",
      });
    } catch (error: any) {
      console.error("❌ Submission Error:", error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'An error occurred while saving your details.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full border-0 shadow-none rounded-none">
      <CardContent className="p-6 md:p-8 relative">
        <div className="absolute top-4 left-4 h-16 w-32 bg-white flex items-center justify-center p-2 rounded-md border shadow-sm">
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
          <p className="text-muted-foreground">
            {isDataSaved ? "Step 2: Complete your Payment" : formSubtitle}
          </p>
        </div>

        {!isDataSaved ? (
          <FormProvider {...form}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <DonationFormFields
                  donationAmountsIndian={donationAmountsIndian}
                  donationAmountsNonIndian={donationAmountsNonIndian}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white" 
                  size="lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving Details...</>
                  ) : (
                    'Confirm & Proceed to Pay'
                  )}
                </Button>
              </form>
            </Form>
          </FormProvider>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 space-y-6 animate-fade-in-up">
            <div className="text-center space-y-2">
              <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-bold font-headline">Details Confirmed</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Your information has been securely recorded. Click the button below to complete your donation on Razorpay.
              </p>
            </div>
            
            {/* This is where the Razorpay script will inject the button */}
            <div ref={rzpButtonRef} className="flex justify-center w-full min-h-[60px]">
              {/* Script injects here */}
            </div>

            <Button variant="ghost" onClick={() => setIsDataSaved(false)} className="text-xs text-muted-foreground">
              ← Edit details
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
