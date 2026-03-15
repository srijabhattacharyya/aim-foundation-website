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
import { Loader2 } from "lucide-react";

interface DonationFormProps {
  cause: string;
  donationAmountsIndian: DonationAmount[];
  donationAmountsNonIndian: DonationAmount[];
  defaultIndianAmount: string;
  defaultNonIndianAmount: string;
  formTitle: string;
  formSubtitle: string;
  hideAmount?: boolean;
  razorpayButtonId?: string;
  isSubscription?: boolean;
}

export default function DonationForm({
  cause,
  donationAmountsIndian,
  donationAmountsNonIndian,
  defaultIndianAmount,
  defaultNonIndianAmount,
  formTitle,
  formSubtitle,
  hideAmount = false,
  razorpayButtonId = "pl_SQxZiuYPAbjQdo",
  isSubscription = false,
}: DonationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const rzpButtonRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      nationality: "Indian",
      amount: hideAmount ? "" : defaultIndianAmount,
      otherAmount: "",
      cause,
      initiative: cause,
      agree: true,
    },
  });

  const nationality = form.watch("nationality");

  useEffect(() => {
    if (!hideAmount) {
      if (nationality === "Indian") {
        form.setValue("amount", defaultIndianAmount);
      } else {
        form.setValue("amount", defaultNonIndianAmount);
      }
    }
    form.setValue("otherAmount", "");
  }, [nationality, form, defaultIndianAmount, defaultNonIndianAmount, hideAmount]);

  useEffect(() => {
    if (isDataSaved && rzpButtonRef.current && nationality === "Indian") {
      rzpButtonRef.current.innerHTML = "";
      
      const script = document.createElement("script");
      if (isSubscription) {
        script.src = "https://cdn.razorpay.com/static/widget/subscription-button.js";
        script.setAttribute("data-subscription_button_id", razorpayButtonId);
        script.setAttribute("data-button_theme", "brand-color");
      } else {
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.setAttribute("data-payment_button_id", razorpayButtonId);
      }
      script.async = true;
      rzpButtonRef.current.appendChild(script);
    }
  }, [isDataSaved, nationality, razorpayButtonId, isSubscription]);

  async function onSubmit(values: z.infer<typeof donationSchema>) {
    setIsSubmitting(true);
    try {
      let finalAmount = 0;
      if (!hideAmount) {
        const displayAmount = values.amount === 'other' ? values.otherAmount : values.amount;
        finalAmount = parseFloat(displayAmount || "0");
        
        if (isNaN(finalAmount) || finalAmount <= 0) {
          throw new Error("Please enter a valid donation amount.");
        }
      }

      await addDoc(collection(db, "donations"), {
        nationality: values.nationality,
        amount: finalAmount,
        cause: values.cause,
        initiative: values.initiative,
        paymentStatus: "initiated",
        createdAt: serverTimestamp(),
      });

      if (values.nationality === "Non-Indian") {
        window.location.href = "https://stripe.com/in";
        return;
      }

      setIsDataSaved(true);
      toast({
        title: "Details Saved",
        description: "Please complete your donation using the button below.",
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Could not save your details.',
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
                <p className="text-primary font-semibold text-sm italic text-center">
                  All donors will receive impact updates and photos from the workshops and activities.
                </p>
                <DonationFormFields
                  donationAmountsIndian={donationAmountsIndian}
                  donationAmountsNonIndian={donationAmountsNonIndian}
                  hideAmount={hideAmount}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</>
                  ) : (
                    'Confirm & Proceed'
                  )}
                </Button>
              </form>
            </Form>
          </FormProvider>
        ) : (
          <div className="flex flex-col items-center space-y-8 py-12 animate-in fade-in zoom-in duration-300">
            <div className="w-full bg-muted/30 rounded-xl border border-dashed p-8 min-h-[160px] flex items-center justify-center">
              <form ref={rzpButtonRef} className="flex justify-center w-full">
                {/* Razorpay Button Injected Here */}
              </form>
            </div>

            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsDataSaved(false)} 
              className="mt-4"
            >
              Go Back / Edit Details
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
