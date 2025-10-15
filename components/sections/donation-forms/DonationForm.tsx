"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { addDonation } from "@/app/actions/donationActions";
import { DonationFormFields } from "./DonationFormFields";
import { Form } from "@/components/ui/form";

// Zod schema for validation
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

// Shared type for donation amounts
export type DonationAmount = {
  value: string;
  label: string;
  description?: string;
};

interface DonationFormProps {
  cause: string;
  donationAmountsIndian: DonationAmount[];
  donationAmountsNonIndian: DonationAmount[];
  defaultIndianAmount: string;
  defaultNonIndianAmount: string;
  formTitle: string;
  formSubtitle: string;
}

const initialState = {
  message: "",
  errors: {},
  success: false,
  data: null,
};

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
  const [state, formAction] = useFormState(addDonation, initialState);
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
      cause: cause,
      initiative: cause,
    },
  });

  const nationality = form.watch("nationality");

  // Update fields based on nationality
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

  // Show toast on success or error
  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: `Thank you for supporting ${cause}!`,
          description: "Your generous donation will change a life.",
        });
        form.reset();
        formRef.current?.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: state.message,
        });
      }
    }
  }, [state, toast, form, cause]);

  return (
    <Card className="w-full border-0 shadow-none rounded-none">
      <CardContent className="p-6 md:p-8">
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
          <form ref={formRef} action={formAction} className="space-y-6">
            <DonationFormFields
              donationAmountsIndian={donationAmountsIndian}
              donationAmountsNonIndian={donationAmountsNonIndian}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md mt-4 hover:bg-blue-700"
            >
              Donate
            </button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
