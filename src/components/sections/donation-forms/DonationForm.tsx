
"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DonationFormFields } from "@/components/sections/donation-forms/DonationFormFields";
import { Form } from "@/components/ui/form";
import { DonationAmount } from "@/types/donation";
import { donationSchema } from "@/components/sections/donation-forms/schemas";
import type { z } from "zod";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

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

// Robust component to inject Razorpay button script inside a mandatory form tag
function RazorpayFormButton({ buttonId, isSub }: { buttonId: string; isSub: boolean }) {
  const containerRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Razorpay scripts require a clean parent form to inject the button/iframe
    const container = containerRef.current;
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const script = document.createElement("script");
    const cacheBuster = `?t=${Date.now()}`;

    if (isSub) {
      script.src = "https://cdn.razorpay.com/static/widget/subscription-button.js" + cacheBuster;
      script.setAttribute("data-subscription_button_id", buttonId);
      script.setAttribute("data-button_theme", "brand-color");
    } else {
      script.src = "https://checkout.razorpay.com/v1/payment-button.js" + cacheBuster;
      script.setAttribute("data-payment_button_id", buttonId);
    }
    script.async = true;

    // Use a slight delay to ensure the DOM is ready after React unmounts/mounts the keyed form
    const timeoutId = setTimeout(() => {
      container.appendChild(script);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [buttonId, isSub]);

  return (
    <form
      ref={containerRef}
      className="w-full flex justify-center py-6 min-h-[100px]"
    />
  );
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
  const [frequency, setFrequency] = useState<"monthly" | "onetime">("monthly");

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

  // Update amount when nationality changes
  useEffect(() => {
    if (!hideAmount) {
      form.setValue(
        "amount",
        nationality === "Indian" ? defaultIndianAmount : defaultNonIndianAmount
      );
    }
    form.setValue("otherAmount", "");
  }, [nationality, form, defaultIndianAmount, defaultNonIndianAmount, hideAmount]);

  // FIX: Force pointer events to allow interaction with Razorpay modal over our Dialog
  useEffect(() => {
    if (isDataSaved) {
      document.body.style.pointerEvents = "auto";
    }
  }, [isDataSaved]);

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

  const showFrequencyToggle =
    cause === "Ignite Change Initiative" || cause === "Relief to the Underprivileged";

  // Determine Razorpay button ID based on cause and frequency
  let razorpayButtonToUse = razorpayButtonId;
  let isSubButton = isSubscription;

  if (cause === "Ignite Change Initiative") {
    razorpayButtonToUse = frequency === "monthly" ? "pl_SRZFNDgbZeFnpp" : "pl_SRN9Lp4szo4GJs";
    isSubButton = frequency === "monthly";
  } else if (cause === "Relief to the Underprivileged") {
    razorpayButtonToUse = frequency === "monthly" ? "pl_SRkNjBeFddKPwd" : "pl_SRN614kzzmwD8t";
    isSubButton = frequency === "monthly";
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
              <h2 className="text-2xl font-bold font-headline uppercase text-center">
                {formTitle}
              </h2>
              <p className="text-muted-foreground text-xs uppercase tracking-widest text-center mt-1">
                {formSubtitle}
              </p>
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
                    {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : "Confirm & Proceed"}
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
              width={110}
              height={40}
              className="object-contain"
            />

            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold font-headline uppercase text-primary">
                Be Part of the Change
              </h2>
              <p className="text-sm text-muted-foreground px-4">
                Please complete your donation using the Razorpay button below.
              </p>
            </div>

            {showFrequencyToggle && (
              <div className="flex flex-col items-center gap-3 w-full py-4 border-y border-muted">
                {/* Monthly Toggle */}
                <div
                  className={cn(
                    "flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-[1.02]",
                    frequency === "monthly" ? "scale-105" : "opacity-60"
                  )}
                  onClick={() => setFrequency("monthly")}
                >
                  <span className="text-lg font-bold text-foreground">Be monthly impact supporter</span>
                  <Heart className="h-5 w-5 fill-red-600 text-red-600" />
                  <span className="text-[10px] text-green-600 font-bold uppercase tracking-tight">
                    (RECOMMENDED)
                  </span>
                </div>

                {/* Separator */}
                <span className="text-muted-foreground font-medium text-sm">or</span>

                {/* One-time Toggle */}
                <div
                  className={cn(
                    "cursor-pointer transition-all duration-200 hover:scale-[1.02]",
                    frequency === "onetime" ? "scale-105" : "opacity-60"
                  )}
                  onClick={() => setFrequency("onetime")}
                >
                  <span className="text-lg font-bold text-foreground">One time supporter</span>
                </div>
              </div>
            )}

            {/* 🔑 Razorpay component keyed to frequency/buttonId to force unmount/remount */}
            <div key={`razorpay-${frequency}-${razorpayButtonToUse}`} className="w-full">
              <RazorpayFormButton buttonId={razorpayButtonToUse} isSub={isSubButton} />
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDataSaved(false)}
                className="text-muted-foreground hover:text-primary flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" /> Go Back
              </Button>
              
              <p className="text-[10px] text-muted-foreground italic text-center px-6">
                Note: If the payment window is blocked, please close this popup to proceed.
              </p>
            </div>

            <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center mt-4">
              Secure Transaction by Razorpay
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
