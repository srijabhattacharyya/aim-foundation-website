
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
import { SubmitButton } from "./SubmitButton";
import { db } from "@/app/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

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
  const [showPaymentButton, setShowPaymentButton] = useState(false);
  const paymentButtonContainerRef = useRef<HTMLDivElement>(null);
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

  // Inject Razorpay Script when showPaymentButton becomes true
  useEffect(() => {
    if (showPaymentButton && paymentButtonContainerRef.current) {
      // Clear container first
      paymentButtonContainerRef.current.innerHTML = "";
      
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_SQxZiuYPAbjQdo");
      script.async = true;
      
      const formElement = document.createElement("form");
      formElement.appendChild(script);
      
      paymentButtonContainerRef.current.appendChild(formElement);
      
      toast({
        title: "Ready for Payment",
        description: "Please click the Razorpay button below to complete your donation.",
      });
    }
  }, [showPaymentButton, toast]);

  async function onSubmit(values: z.infer<typeof donationSchema>) {
    setIsSubmitting(true);
    try {
      const amountStr = values.otherAmount?.trim() || values.amount;
      const finalAmountInRupees = parseFloat(amountStr);
      
      if (isNaN(finalAmountInRupees) || finalAmountInRupees <= 0) {
        throw new Error("Please enter a valid donation amount.");
      }

      // 1. Save donation record to Firestore
      await addDoc(collection(db, "donations"), {
        ...values,
        amount: finalAmountInRupees,
        paymentStatus: "initiated",
        createdAt: serverTimestamp(),
      });

      if (values.nationality === "Indian") {
        // Show the Razorpay Payment Button container
        setShowPaymentButton(true);
      } else {
        // International logic
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
          <p className="text-muted-foreground">{formSubtitle}</p>
        </div>

        {!showPaymentButton ? (
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
        ) : (
          <div className="space-y-6 text-center py-8">
            <div className="bg-muted p-4 rounded-lg mb-6">
              <p className="font-semibold text-primary">Details saved successfully!</p>
              <p className="text-sm text-muted-foreground mt-1">Please complete the final step by clicking the payment button below.</p>
            </div>
            
            <div ref={paymentButtonContainerRef} className="flex justify-center min-h-[60px]">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>

            <Button 
              variant="ghost" 
              onClick={() => setShowPaymentButton(false)}
              className="mt-4"
            >
              Back to Edit Details
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
