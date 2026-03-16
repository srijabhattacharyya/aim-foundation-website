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
import { Loader2, ArrowLeft, Heart } from "lucide-react";
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
  const [frequency, setFrequency] = useState<"monthly" | "onetime">("monthly");
  const formRef = useRef<HTMLFormElement>(null);

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

  // Update amount based on nationality
  useEffect(() => {
    if (!hideAmount) {
      form.setValue("amount", nationality === "Indian" ? defaultIndianAmount : defaultNonIndianAmount);
    }
    form.setValue("otherAmount", "");
  }, [nationality, form, defaultIndianAmount, defaultNonIndianAmount, hideAmount]);

  // Inject Razorpay button script with cache busting
  useEffect(() => {
    if (!isDataSaved || !formRef.current || nationality !== "Indian") return;

    const container = formRef.current;
    container.innerHTML = ""; // clear old button

    let currentButtonId = razorpayButtonId;
    let currentIsSub = isSubscription;

    // Handle dual-frequency initiative IDs
    if (cause === "Ignite Change Initiative") {
      currentButtonId = frequency === "monthly" ? "pl_SRZFNDgbZeFnpp" : "pl_SRN9Lp4szo4GJs";
      currentIsSub = frequency === "monthly";
    } else if (cause === "Relief to the Underprivileged") {
      currentButtonId = frequency === "monthly" ? "pl_SRkNjBeFddKPwd" : "pl_SRN614kzzmwD8t";
      currentIsSub = frequency === "monthly";
    }

    const script = document.createElement("script");
    const cacheBuster = `?t=${Date.now()}`; // forces a fresh load of the widget

    if (currentIsSub) {
      script.src = "https://cdn.razorpay.com/static/widget/subscription-button.js" + cacheBuster;
      script.setAttribute("data-subscription_button_id", currentButtonId!);
      script.setAttribute("data-button_theme", "brand-color");
    } else {
      script.src = "https://checkout.razorpay.com/v1/payment-button.js" + cacheBuster;
      script.setAttribute("data-payment_button_id", currentButtonId!);
    }
    script.async = true;

    container.appendChild(script);
  }, [isDataSaved, frequency, nationality, cause, razorpayButtonId, isSubscription]);

  useEffect(() => {
    if (isDataSaved) {
      document.body.style.pointerEvents = 'auto';
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

  const showFrequencyToggle = cause === "Ignite Change Initiative" || cause === "Relief to the Underprivileged";

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
              width={110}
              height={40}
              className="object-contain"
            />
            
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold font-headline uppercase text-primary">Be Part of the Change</h2>
              <p className="text-sm text-muted-foreground px-4">
                Please complete your donation using the Razorpay button below.
              </p>
            </div>

            {showFrequencyToggle && (
              <div className="bg-muted p-4 rounded-lg w-full">
                <RadioGroup
                  value={frequency}
                  onValueChange={(v) => setFrequency(v as "monthly" | "onetime")}
                  className="flex flex-col space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly" className="font-semibold cursor-pointer flex items-center gap-2">
                      Monthly Impact Partner <Heart className="h-3 w-3 fill-primary text-primary" /> <span className="text-[10px] text-primary uppercase font-bold">(Recommended)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="onetime" id="onetime" />
                    <Label htmlFor="onetime" className="font-semibold cursor-pointer">One-time Supporter</Label>
                  </div>
                </RadioGroup>
              </div>
            )}
            
            <form 
              key={`razorpay-form-${frequency}-${isDataSaved}`} // force remount on frequency change
              ref={formRef}
              className="w-full flex justify-center py-6 min-h-[100px]"
              style={{ pointerEvents: 'auto' }}
            >
              {/* Razorpay button injected here */}
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
