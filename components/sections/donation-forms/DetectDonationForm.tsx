
"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { addDonation } from "@/app/actions/donationActions";
import DonationFormFields from "./DonationForm";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { donationSchema } from "./schemas";
import { z } from "zod";

const donationAmountsIndian = [
    { value: "1500", label: "₹1500", description: "SPONSOR SCREENING FOR 1 WOMAN" },
    { value: "3000", label: "₹3000", description: "SPONSOR SCREENING FOR 2 WOMEN" },
    { value: "7500", label: "₹7500", description: "SPONSOR SCREENING FOR 5 WOMEN" },
    { value: "30000", label: "₹30000", description: "SPONSOR AN AWARENESS CAMP" },
];

const donationAmountsNonIndian = [
    { value: "18", label: "$18", description: "SPONSOR SCREENING FOR 1 WOMAN" },
    { value: "36", label: "$36", description: "SPONSOR SCREENING FOR 2 WOMEN" },
    { value: "90", label: "$90", description: "SPONSOR SCREENING FOR 5 WOMEN" },
    { value: "360", label: "$360", description: "SPONSOR AN AWARENESS CAMP" },
];

const initialState = {
    message: '',
    errors: {},
    success: false,
};

export default function DetectDonationForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(addDonation, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof donationSchema>>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      nationality: "Indian",
      amount: "1500",
      otherAmount: "",
      fullName: "",
      email: "",
      mobile: "",
      dob: undefined,
      pan: "",
      aadhar: "",
      passport: "",
      country: "India",
      state: "",
      city: "",
      address: "",
      pincode: "",
      agree: false,
      cause: "Detect",
      initiative: "Detect",
    },
  });

  const nationality = form.watch("nationality");
  const donationAmounts = nationality === 'Indian' ? donationAmountsIndian : donationAmountsNonIndian;
  const selectedAmountValue = form.watch("amount");
  const selectedAmount = donationAmounts.find(a => a.value === selectedAmountValue);
  const description = selectedAmount ? selectedAmount.description : "";

  useEffect(() => {
    if (nationality === "Indian") {
      form.setValue("country", "India");
      form.setValue("passport", "");
      form.setValue("amount", "1500");
    } else {
      form.setValue("country", "");
      form.setValue("pan", "");
      form.setValue("aadhar", "");
      form.setValue("state", "");
      form.setValue("amount", "18");
    }
  }, [nationality, form]);


  useEffect(() => {
    if (state.success) {
      toast({
        title: "Thank you for supporting Detect!",
        description: "Your support makes a difference.",
      });
      formRef.current?.reset();
    } else if (state.message && !state.errors) {
       toast({
        variant: "destructive",
        title: "Submission Failed",
        description: state.message,
      });
    }
     if (state.errors) {
         Object.entries(state.errors).forEach(([key, value]) => {
            form.setError(key as keyof z.infer<typeof donationSchema>, {
                type: "manual",
                message: (value as string[])[0],
            });
        });
    }
  }, [state, toast, form]);

  return (
    <Card className="w-full border-0 shadow-none rounded-none">
        <CardContent className="p-6 md:p-8">
            <div className="absolute top-4 left-4 h-16 w-32 bg-white flex items-center justify-center p-2 rounded-md">
                <Image src="/images/logo.png" alt="AIM Foundation Logo" width={120} height={48} className="object-contain"/>
            </div>
            <div className="text-center mb-8 pt-20">
                <h2 className="text-3xl font-bold font-headline">SUPPORT DETECT</h2>
                <p className="text-muted-foreground">MAKE A DIFFERENCE</p>
            </div>

            <Form {...form}>
                <form ref={formRef} action={formAction} className="space-y-6">
                    <DonationFormFields
                        donationAmounts={donationAmounts}
                        description={description}
                    />
                </form>
            </Form>
        </CardContent>
    </Card>
  );
}
