
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
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [frequency, setFrequency] = useState<"monthly" | "onetime">("onetime");
  const rzpButtonRef = useRef<HTMLFormElement>(null);

  // Radix UI Dialog blocks pointer events on the body. We need to force them back on 
  // when showing the Razorpay button to ensure it's clickable.
  useEffect(() => {
    if (isDataSaved) {
      const timer = setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
      }, 500);
      return () => {
        clearTimeout(timer);
        document.body.style.pointerEvents = '';
      };
    }
  }, [isDataSaved]);

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
      form.setValue("amount", nationality === "Indian" ? defaultIndianAmount : defaultNonIndianAmount);
    }
    form.setValue("otherAmount", "");
  }, [nationality, form, defaultIndianAmount, defaultNonIndianAmount, hideAmount]);

  useEffect(() => {
    if (isDataSaved && rzpButtonRef.current && nationality === "Indian") {
      const container = rzpButtonRef.current;
      container.innerHTML = ""; // Clean slate
      
      const script = document.createElement("script");
      let targetId = razorpayButtonId;
      let isSub = isSubscription;

      // Logic for Ignite Change Initiative frequency toggle
      if (cause === "Ignite Change Initiative") {
        if (frequency === "monthly") {
          targetId = "pl_SRZFNDgbZeFnpp";
          isSub = true;
        } else {
          targetId = "pl_SRN9Lp4szo4GJs";
          isSub = false;
        }
      }

      // We add a cache-busting timestamp to force the script to re-run
      // especially when switching between onetime and monthly scripts.
      const timestamp = Date.now();
      if (isSub) {
        script.src = `https://cdn.razorpay.com/static/widget/subscription-button.js?v=${timestamp}`;
        script.setAttribute("data-subscription_button_id", targetId);
        script.setAttribute("data-button_theme", "brand-color");
      } else {
        script.src = `https://checkout.razorpay.com/v1/payment-button.js?v=${timestamp}`;
        script.setAttribute("data-payment_button_id", targetId);
      }
      script.async = true;
      
      // Slight delay to ensure React has finished any DOM updates for the key change
      const timeout = setTimeout(() => {
        container.appendChild(script);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [isDataSaved, nationality, razorpayButtonId, isSubscription, frequency, cause]);

  async function onSubmit(values: z.infer<typeof donationSchema>) {
    setIsSubmitting(true);
    if (values.nationality === "Non-Indian") {
      window.location.href = "https://stripe.com/in";
      setIsSubmitting(false);
      return;
    }
    setIsDataSaved(true);
    setIsSubmitting(false);
  }

  return (
    <Card className="w-full border-0 shadow-none rounded-none bg-background overflow-hidden">
      <CardContent className="p-6 md:p-8">
        {!isDataSaved ? (
          <>
            <div className="flex flex-col items-center mb-6">
              <Image
                src="/images/logo.png"
                alt="AIM Foundation"
                width={120}
                height={48}
                className="object-contain mb-4"
              />
              <h2 className="text-2xl font-bold font-headline uppercase text-center">{formTitle}</h2>
              <p className="text-muted-foreground text-xs uppercase tracking-widest text-center mt-1">{formSubtitle}</p>
            </div>
            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <DonationFormFields
                    donationAmountsIndian={donationAmountsIndian}
                    donationAmountsNonIndian={donationAmountsNonIndian}
                    hideAmount={hideAmount}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-bold transition-all hover:scale-[1.02]" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Confirm & Proceed'}
                  </Button>
                </form>
              </Form>
            </FormProvider>
          </>
        ) : (
          <div className="flex flex-col items-center py-4 space-y-6 animate-in fade-in duration-500">
            <Image
              src="/images/logo.png"
              alt="AIM Foundation"
              width={100}
              height={40}
              className="object-contain mb-2"
            />
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold font-headline uppercase">Be Part of the Change</h3>
              <p className="text-sm text-muted-foreground px-4">Please complete your donation using the Razorpay button below.</p>
            </div>

            {cause === "Ignite Change Initiative" && (
              <div className="bg-muted/50 p-4 rounded-lg w-full flex flex-col items-center space-y-4">
                <RadioGroup
                  value={frequency}
                  onValueChange={(v) => setFrequency(v as "monthly" | "onetime")}
                  className="flex items-center justify-center space-x-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly" className="font-semibold cursor-pointer">Monthly Donation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="onetime" id="onetime" />
                    <Label htmlFor="onetime" className="font-semibold cursor-pointer">Onetime Donations</Label>
                  </div>
                </RadioGroup>
              </div>
            )}
            
            <form 
              key={`${frequency}-${cause}`} // Re-mount the form to ensure a clean script injection
              ref={rzpButtonRef} 
              className="w-full flex justify-center py-4 bg-muted/30 rounded-xl min-h-[120px] relative z-[60]"
              style={{ pointerEvents: 'auto' }}
            >
              {/* Razorpay Button Injected Here */}
            </form>

            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsDataSaved(false)}
              className="text-muted-foreground hover:text-primary flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Go Back
            </Button>
            
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
              Secure Transaction by Razorpay
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
