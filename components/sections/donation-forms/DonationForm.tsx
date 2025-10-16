
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

  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      nationality: "Indian",
      amount: defaultIndianAmount,
      otherAmount: "",
      fullName: "",
      email: "",
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

  useEffect(() => {
    if (nationality === "Indian") {
      form.setValue("country", "India");
      form.setValue("passport", "");
      form.setValue("amount", defaultIndianAmount);
    } else {
      form.setValue("country", "");
      form.setValue("pan", "");
      form.setValue("aadhar", "");
      form.setValue("state", "");
      form.setValue("amount", defaultNonIndianAmount);
    }
  }, [nationality, form, defaultIndianAmount, defaultNonIndianAmount]);

  const onSubmit = (data: z.infer<typeof donationSchema>) => {
    let paymentUrl = "";
    if (data.nationality === "Indian") {
      paymentUrl = "https://razorpay.com/";
    } else {
      paymentUrl = "https://stripe.com/in";
    }
    window.open(paymentUrl, '_blank');
  };

  return (
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
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <DonationFormFields
              donationAmountsIndian={donationAmountsIndian.map((item) => ({
                ...item,
                description: item.description ?? "",
              }))}
              donationAmountsNonIndian={donationAmountsNonIndian.map((item) => ({
                ...item,
                description: item.description ?? "",
              }))}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
