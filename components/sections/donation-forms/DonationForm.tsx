
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DonationFormFields } from "./DonationFormFields";
import { Form } from "@/components/ui/form";
import { DonationAmount } from "@/types/donation";
import { donationSchema } from './schemas';
import type { z } from "zod";
import { countries } from "@/app/lib/countries";
import Script from "next/script";
import { createRazorpayOrder } from "@/app/actions/paymentActions";
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

    if (values.nationality !== 'Indian') {
      console.log("Non-Indian donation submitted, redirecting...", values);
      let paymentUrl = "https://stripe.com/in";
      window.open(paymentUrl, "_blank");
      setIsSubmitting(false);
      return;
    }

    const finalAmountString = values.otherAmount || values.amount;
    const finalAmount = parseFloat(finalAmountString);

    if (isNaN(finalAmount) || finalAmount <= 0) {
        toast({ variant: 'destructive', title: 'Invalid Amount', description: 'Please enter a valid donation amount.' });
        setIsSubmitting(false);
        return;
    }

    const orderResponse = await createRazorpayOrder(finalAmount);
    if (!orderResponse.success || !orderResponse.order) {
        toast({ variant: 'destructive', title: 'Payment Error', description: orderResponse.message });
        setIsSubmitting(false);
        return;
    }

    const razorpayOrder = orderResponse.order;

    const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        name: 'AIM Foundation',
        description: `Donation for ${values.cause}`,
        image: 'https://aimindia.org.in/logo.png',
        order_id: razorpayOrder.id,
        handler: async function (response: any) {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
                if (value !== undefined) {
                    formData.append(key, String(value));
                }
            });

            try {
                const donationResult = await addDonation({}, formData);
                if (donationResult.success) {
                    toast({ title: 'Donation Successful', description: 'Thank you for your generous contribution!' });
                    form.reset();
                } else {
                    toast({ variant: 'destructive', title: 'Donation Failed', description: donationResult.message });
                }
            } catch (error) {
                toast({ variant: 'destructive', title: 'Error', description: 'Could not record your donation. Please contact us.' });
            } finally {
                setIsSubmitting(false);
            }
        },
        prefill: {
            name: values.fullName,
            email: values.email,
            contact: `${values.countryCode}${values.mobile}`,
        },
        notes: {
            address: `${values.address}, ${values.city}, ${values.state}, ${values.pincode}`,
            cause: values.cause,
        },
        theme: {
            color: '#2ecc71',
        },
        modal: {
            ondismiss: function() {
                setIsSubmitting(false);
            }
        }
    };
    
    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response: any) {
        toast({
            variant: 'destructive',
            title: 'Payment Failed',
            description: response.error.description || 'An unknown error occurred.',
        });
        setIsSubmitting(false);
    });

    rzp.open();
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
