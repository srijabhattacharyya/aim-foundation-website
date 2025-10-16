"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DonationFormFields } from "./DonationFormFields";
import { Form } from "@/components/ui/form";
import { DonationAmount } from "@/types/donation";
import { Loader2 } from "lucide-react";
import { SubmitButton } from "./SubmitButton";

// ✅ Zod Schema for validation
export const donationSchema = z.object({
  nationality: z.enum(["Indian", "Non-Indian"]),
  amount: z.string(),
  otherAmount: z.string().optional(),
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email"),
  mobile: z.string(),
  dob: z.string().optional(),
  pan: z.string().optional(),
  aadhar: z.string().optional(),
  passport: z.string().optional(),
  country: z.string(),
  state: z.string().optional(),
  city: z.string().optional(),
  address: z.string(),
  pincode: z.string(),
  agree: z.boolean(),
  cause: z.string(),
  initiative: z.string(),
});

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

  // ✅ Update form based on nationality
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

  // ✅ Submission Handler
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
        {/* ✅ AIM Logo */}
        <div className="absolute top-4 left-4 h-16 w-32 bg-white flex items-center justify-center p-2 rounded-md">
          <Image
            src="/images/logo.png"
            alt="AIM Foundation Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </div>

        {/* ✅ Title */}
        <div className="text-center mb-8 pt-20">
          <h2 className="text-3xl font-bold font-headline">{formTitle}</h2>
          <p className="text-muted-foreground">{formSubtitle}</p>
        </div>

        {/* ✅ Form Section */}
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <DonationFormFields
              donationAmountsIndian={donationAmountsIndian.map((item) => ({
                ...item,
                description: item.description ?? "", // ✅ ensures no undefined
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