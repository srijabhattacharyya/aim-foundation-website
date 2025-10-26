
"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DonationFormFields } from "./DonationFormFields";
import { Form } from "@/components/ui/form";
import { DonationAmount } from "@/types/donation";
import { donationSchema } from './schemas';
import type { z } from "zod";
import { countries } from "@/app/lib/countries";
import Script from "next/script";
import { useToast } from "@/hooks/use-toast";
import { SubmitButton } from "./SubmitButton";

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
  
  async function onSubmit(values: z.infer<typeof donationSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'An unexpected error occurred.');
      }
      
      toast({
        title: "Donation Recorded!",
        description: "Thank you for your support. Please complete the payment.",
      });

      if (values.nationality === 'Indian') {
        const paymentUrl = "https://razorpay.me/@associatedinitiativeformankin";
        window.open(paymentUrl, "_blank");
      } else {
        const paymentUrl = "https://stripe.com/in"; // Fallback for non-Indian
        window.open(paymentUrl, "_blank");
      }
      form.reset();

    } catch (error: any) {
       toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: error.message || 'Could not record your donation. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <DonationFormFields
                donationAmountsIndian={donationAmountsIndian}
                donationAmountsNonIndian={donationAmountsNonIndian}
              />
              <SubmitButton isSubmitting={isSubmitting} />
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </>
  );
}
