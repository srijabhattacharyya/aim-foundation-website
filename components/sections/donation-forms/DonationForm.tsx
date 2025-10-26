
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DonationFormFields } from "./DonationFormFields";
import { Form } from "@/components/ui/form";
import { DonationAmount } from "@/types/donation";
import { donationSchema } from './schemas';
import type { z } from "zod";
import { countries } from "@/app/lib/countries";
import Script from "next/script";
import { addDonation } from "@/app/actions/donationActions";
import { useToast } from "@/hooks/use-toast";

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
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

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
    form.control.register('submit'); // Manually register to track isSubmitting
    const setIsSubmitting = (isSubmitting: boolean) => {
        const { control }: any = form;
        control._formState.isSubmitting = isSubmitting;
        control._subjects.state.next({ ...control._formState, isSubmitting });
    };

    setIsSubmitting(true);

    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, String(value));
      }
    });

    const donationResult = await addDonation({}, formData);

    if (!donationResult.success) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: donationResult.message || 'An unexpected error occurred. Please try again.',
      });
      setIsSubmitting(false);
      return;
    }

    // Handle payment redirection
    if (values.nationality === 'Indian') {
      const paymentUrl = "https://razorpay.me/@associatedinitiativeformankin";
      window.open(paymentUrl, "_blank");
      toast({ title: 'Redirecting to Payment', description: 'Please complete your donation on the Razorpay page.' });
      form.reset();
    } else {
      const paymentUrl = "https://stripe.com/in"; // Fallback for non-Indian
      window.open(paymentUrl, "_blank");
      toast({ title: 'Redirecting to Payment', description: 'Please complete your donation.' });
      form.reset();
    }

    setIsSubmitting(false);
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

          <Form {...form}>
            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <DonationFormFields
                donationAmountsIndian={donationAmountsIndian.map(item => ({ ...item, description: item.description ?? "" }))}
                donationAmountsNonIndian={donationAmountsNonIndian.map(item => ({ ...item, description: item.description ?? "" }))}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
