
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
    { value: "3500", label: "₹3500", description: "BASIC TAILORING TRAINING TO 1 WOMAN" },
    { value: "7000", label: "₹7000", description: "ADVANCE TAILORING TRAINING FOR 1 WOMAN" },
    { value: "14000", label: "₹14000", description: "SPONSOR A SEWING MACHINE & BASIC TAILORING TRAINING" },
    { value: "21000", label: "₹21000", description: "SPONSOR A SEWING MACHINE & COMPLETE TRAINING" },
];

const donationAmountsNonIndian = [
    { value: "42", label: "$42", description: "BASIC TAILORING TRAINING TO 1 WOMAN" },
    { value: "84", label: "$84", description: "ADVANCE TAILORING TRAINING FOR 1 WOMAN" },
    { value: "168", label: "$168", description: "SPONSOR A SEWING MACHINE & BASIC TAILORING TRAINING" },
    { value: "252", label: "$252", description: "SPONSOR A SEWING MACHINE & COMPLETE TRAINING" },
];

const initialState = {
    message: '',
    errors: {},
    success: false,
};

export default function SuiDhagaDonationForm() {
    const { toast } = useToast();
    const [state, formAction] = useFormState(addDonation, initialState);
    const formRef = useRef<HTMLFormElement>(null);
     const form = useForm<z.infer<typeof donationSchema>>({
        resolver: zodResolver(donationSchema),
        defaultValues: {
            nationality: "Indian",
            amount: "3500",
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
            cause: "SuiDhaga",
            initiative: "SuiDhaga",
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
          form.setValue("amount", "3500");
        } else {
          form.setValue("country", "");
          form.setValue("pan", "");
          form.setValue("aadhar", "");
          form.setValue("state", "");
          form.setValue("amount", "42");
        }
    }, [nationality, form]);


    useEffect(() => {
        if (state.success) {
            toast({
                title: "Thank you for supporting SuiDhaga!",
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
                    <h2 className="text-3xl font-bold font-headline">SUPPORT SUIDHAGA</h2>
                    <p className="text-muted-foreground">EMPOWER THROUGH SKILL</p>
                </div>
                <Form {...form}>
                    <form ref={formRef} action={formAction} className="space-y-6">
                        <DonationFormFields
                            nationality={nationality}
                            donationAmounts={donationAmounts}
                            description={description}
                        />
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
