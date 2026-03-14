
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
      cause,
      initiative: cause,
      agree: true,
    },
  });

  const nationality = form.watch("nationality");

  useEffect(() => {
    if (nationality === "Indian") {
      form.setValue("amount", defaultIndianAmount);
    } else {
      form.setValue("amount", defaultNonIndianAmount);
    }
  }, [nationality, form, defaultIndianAmount, defaultNonIndianAmount]);

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
      const finalAmount = parseFloat(values.amount);
      
      // Save record to Firestore
      await addDoc(collection(db, "donations"), {
        ...values,
        amount: finalAmount,
        paymentStatus: "initiated",
        createdAt: serverTimestamp(),
      });

      setIsDataSaved(true);
      toast({
        title: "Selection Saved",
        description: "Please click the button below to complete your donation.",
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
    <Card className="w-full border-0 shadow-none rounded-none bg-background">
      <CardContent className="p-6 md:p-10 relative">
        <div className="absolute top-4 left-4 h-16 w-32 bg-white flex items-center justify-center p-2 rounded-md border shadow-sm">
          <Image
            src="/images/logo.png"
            alt="AIM Foundation Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </div>

        <div className="text-center mb-10 pt-20">
          <h2 className="text-3xl font-bold font-headline uppercase tracking-tight">{formTitle}</h2>
          <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm mt-2">
            {formSubtitle}
          </p>
        </div>

        {!isDataSaved ? (
          <FormProvider {...form}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                <DonationFormFields
                  donationAmountsIndian={donationAmountsIndian}
                  donationAmountsNonIndian={donationAmountsNonIndian}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold" 
                  size="lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</>
                  ) : (
                    'Confirm & Proceed'
                  )}
                </Button>
              </form>
            </Form>
          </FormProvider>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 space-y-8 animate-fade-in-up">
            <div className="text-center space-y-3">
              <CheckCircle2 className="h-14 w-14 text-primary mx-auto" />
              <h3 className="text-2xl font-bold font-headline">Ready to Pay</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Click the button below to finish your donation via Razorpay's secure gateway.
              </p>
            </div>
            
            <div ref={rzpButtonRef} className="flex justify-center w-full min-h-[60px]">
              {/* Razorpay Script Injects Button Here */}
            </div>

            <Button variant="ghost" onClick={() => setIsDataSaved(false)} className="text-xs text-muted-foreground hover:text-primary">
              ← Change amount or nationality
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
