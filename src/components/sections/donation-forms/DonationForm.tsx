
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
import { Loader2, CheckCircle2, X } from "lucide-react";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = useState(false);
  const rzpButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      nationality: "Indian",
      amount: defaultIndianAmount,
      otherAmount: "",
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
    form.setValue("otherAmount", "");
  }, [nationality, form, defaultIndianAmount, defaultNonIndianAmount]);

  // Dynamically load the Razorpay script once data is saved (only for Indian donors)
  useEffect(() => {
    if (isDataSaved && rzpButtonRef.current && nationality === "Indian") {
      // Clear previous content
      rzpButtonRef.current.innerHTML = "";
      
      const formElement = document.createElement("form");
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_SQxZiuYPAbjQdo");
      script.async = true;
      formElement.appendChild(script);
      rzpButtonRef.current.appendChild(formElement);
    }
  }, [isDataSaved, nationality]);

  async function onSubmit(values: z.infer<typeof donationSchema>) {
    setIsSubmitting(true);
    try {
      const displayAmount = values.amount === 'other' ? values.otherAmount : values.amount;
      const finalAmount = parseFloat(displayAmount || "0");
      
      if (isNaN(finalAmount) || finalAmount <= 0) {
        throw new Error("Please enter a valid donation amount.");
      }

      // Save record to Firestore
      await addDoc(collection(db, "donations"), {
        nationality: values.nationality,
        amount: finalAmount,
        cause: values.cause,
        initiative: values.initiative,
        paymentStatus: "initiated",
        createdAt: serverTimestamp(),
      });

      if (values.nationality === "Non-Indian") {
        toast({
          title: "Redirecting...",
          description: "Connecting to international gateway.",
        });
        window.location.href = "https://stripe.com/in";
        return;
      }

      setIsDataSaved(true);
      toast({
        title: "Details Confirmed",
        description: "Please complete the payment using the button displayed.",
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

  const paymentOverlay = mounted && isDataSaved && nationality === "Indian" ? createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-card w-full max-w-md p-8 rounded-2xl shadow-2xl relative border border-primary/20 flex flex-col items-center space-y-6 text-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-4 top-4 rounded-full hover:bg-muted"
          onClick={() => setIsDataSaved(false)}
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="bg-primary/10 p-4 rounded-full">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold font-headline">Ready to Pay</h3>
          <p className="text-muted-foreground text-sm">
            Your selection has been saved. Please click the Razorpay button below to complete your contribution securely.
          </p>
        </div>
        
        <div ref={rzpButtonRef} className="flex justify-center w-full min-h-[60px] py-4">
          {/* Razorpay Script Injects Button Here */}
        </div>

        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
          Securely processed by Razorpay
        </p>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
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
        </CardContent>
      </Card>
      {paymentOverlay}
    </>
  );
}
