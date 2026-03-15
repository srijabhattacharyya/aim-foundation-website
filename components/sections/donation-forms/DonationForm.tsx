
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
import { Loader2, ArrowLeft } from "lucide-react";

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
  const rzpButtonRef = useRef<HTMLDivElement>(null);

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
      // Small delay to ensure the container is fully rendered and accessible
      const timer = setTimeout(() => {
        if (!rzpButtonRef.current) return;
        
        rzpButtonRef.current.innerHTML = "";
        const formElement = document.createElement("form");
        formElement.style.width = "100%";
        formElement.style.display = "flex";
        formElement.style.justifyContent = "center";
        
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
        
        formElement.appendChild(script);
        rzpButtonRef.current.appendChild(formElement);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isDataSaved, nationality, razorpayButtonId, isSubscription]);

  async function onSubmit(values: z.infer<typeof donationSchema>) {
    setIsSubmitting(true);
    try {
      if (!hideAmount) {
        const displayAmount = values.amount === 'other' ? values.otherAmount : values.amount;
        const finalAmount = parseFloat(displayAmount || "0");
        
        if (isNaN(finalAmount) || finalAmount <= 0) {
          throw new Error("Please enter a valid donation amount.");
        }
      }

      if (values.nationality === "Non-Indian") {
        window.open("https://stripe.com/in", "_blank");
        return;
      }

      setIsDataSaved(true);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'An error occurred.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleBack = () => {
    setIsDataSaved(false);
  };

  return (
    <Card className="w-full border-0 shadow-none rounded-none bg-background overflow-visible">
      <CardContent className="p-6 md:p-10 relative overflow-visible">
        <div className="absolute top-4 left-4 h-16 w-32 bg-white flex items-center justify-center p-2 rounded-md border shadow-sm z-20">
          <Image
            src="/images/logo.png"
            alt="AIM Foundation Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </div>

        <div className="text-center mb-6 pt-12">
          <h2 className="text-3xl font-bold font-headline uppercase tracking-tight">{formTitle}</h2>
          <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm mt-2">
            {formSubtitle}
          </p>
        </div>

        {!isDataSaved ? (
          <FormProvider {...form}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    <><Loader2 className="mr-2 h-5 v-5 animate-spin" /> Processing...</>
                  ) : (
                    'Confirm & Proceed'
                  )}
                </Button>
              </form>
            </Form>
          </FormProvider>
        ) : (
          <div className="flex flex-col items-center space-y-6 py-6 animate-in fade-in zoom-in duration-300 relative z-30">
            <div className="w-full flex justify-start">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleBack}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary p-0 h-auto"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Go Back</span>
              </Button>
            </div>
            <p className="text-foreground font-semibold text-center text-lg px-4">
              Please complete your donation using the Razorpay button below.
            </p>
            
            <div 
              className="w-full bg-muted/30 rounded-xl border border-dashed p-8 min-h-[120px] flex items-center justify-center relative pointer-events-auto"
              style={{ pointerEvents: 'auto' }}
            >
              <div 
                ref={rzpButtonRef} 
                className="flex justify-center w-full pointer-events-auto z-40"
                style={{ pointerEvents: 'auto' }}
              >
                {/* Razorpay Button Injected Here */}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
