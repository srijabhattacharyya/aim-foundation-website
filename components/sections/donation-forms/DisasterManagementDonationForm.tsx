
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
    { value: "2500", label: "₹2500", description: "PROVIDE AN EMERGENCY RELIEF KIT" },
    { value: "5000", label: "₹5000", description: "PROVIDE FOOD FOR A FAMILY FOR A WEEK" },
    { value: "10000", label: "₹10000", description: "SUPPORT A SMALL RELIEF CAMP" },
    { value: "25000", label: "₹25000", description: "SUPPORT A COMPREHENSIVE RELIEF CAMP" },
];

const donationAmountsNonIndian = [
    { value: "30", label: "$30", description: "PROVIDE AN EMERGENCY RELIEF KIT" },
    { value: "60", label: "$60", description: "PROVIDE FOOD FOR A FAMILY FOR A WEEK" },
    { value: "120", label: "$120", description: "SUPPORT A SMALL RELIEF CAMP" },
    { value: "300", label: "$300", description: "SUPPORT A COMPREHENSIVE RELIEF CAMP" },
];

const initialState = {
    message: '',
    errors: {},
    success: false,
};

export default function DisasterManagementDonationForm() {
    const { toast } = useToast();
    const [state, formAction] = useFormState(addDonation, initialState);
    const formRef = useRef<HTMLFormElement>(null);
    const form = useForm<z.infer<typeof donationSchema>>({
        resolver: zodResolver(donationSchema),
        defaultValues: {
            nationality: "Indian",
            amount: "2500",
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
            cause: "Disaster Management",
            initiative: "Disaster Management",
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
          form.setValue("amount", "2500");
        } else {
          form.setValue("country", "");
          form.setValue("pan", "");
          form.setValue("aadhar", "");
          form.setValue("state", "");
          form.setValue("amount", "30");
        }
    }, [nationality, form]);


    useEffect(() => {
        if (state.success) {
            toast({
                title: "Thank you for supporting our Disaster Relief efforts!",
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
                    <h2 className="text-3xl font-bold font-headline">SUPPORT DISASTER RELIEF</h2>
                    <p className="text-muted-foreground">PROVIDE URGENT AID</p>
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

