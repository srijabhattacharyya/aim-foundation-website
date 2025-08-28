
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
    { value: "1000", label: "₹1000", description: "PROVIDE AN ESSENTIALS KIT" },
    { value: "2500", label: "₹2500", description: "PROVIDE FOOD FOR A FAMILY FOR A WEEK" },
    { value: "5000", label: "₹5000", description: "SUPPORT A SMALL RELIEF CAMP" },
    { value: "10000", label: "₹10000", description: "SUPPORT A COMPREHENSIVE RELIEF CAMP" },
];

const donationAmountsNonIndian = [
    { value: "12", label: "$12", description: "PROVIDE AN ESSENTIALS KIT" },
    { value: "30", label: "$30", description: "PROVIDE FOOD FOR A FAMILY FOR A WEEK" },
    { value: "60", label: "$60", description: "SUPPORT A SMALL RELIEF CAMP" },
    { value: "120", label: "$120", description: "SUPPORT A COMPREHENSIVE RELIEF CAMP" },
];

const initialState = {
    message: '',
    errors: {},
    success: false,
};

export default function ReliefDonationForm() {
    const { toast } = useToast();
    const [state, formAction] = useFormState(addDonation, initialState);
    const formRef = useRef<HTMLFormElement>(null);
    const form = useForm<z.infer<typeof donationSchema>>({
        resolver: zodResolver(donationSchema),
        defaultValues: {
            nationality: "Indian",
            amount: "1000",
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
            cause: "Relief to the Underprivileged",
            initiative: "Relief to the Underprivileged",
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
          form.setValue("amount", "1000");
        } else {
          form.setValue("country", "");
          form.setValue("pan", "");
          form.setValue("aadhar", "");
          form.setValue("state", "");
          form.setValue("amount", "12");
        }
    }, [nationality, form]);


    useEffect(() => {
        if (state.success) {
            toast({
                title: "Thank you for supporting our Relief Efforts!",
                description: "Your support provides urgent aid to those in need.",
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
                    <h2 className="text-3xl font-bold font-headline">SUPPORT RELIEF EFFORTS</h2>
                    <p className="text-muted-foreground">PROVIDE IMMEDIATE AID</p>
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

