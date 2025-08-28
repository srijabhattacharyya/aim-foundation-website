
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { addDonation } from "@/app/actions/donationActions";
import { DonationFormFields } from "./DonationFormFields";
import { Form } from "@/components/ui/form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { donationSchema } from "./schemas";

type DonationAmount = {
    value: string;
    label: string;
    description: string;
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
    message: '',
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
    formSubtitle
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

    useEffect(() => {
        async function handleServerResponse() {
            if (state.success && state.data) {
                try {
                    const finalData = {
                        ...state.data,
                        createdAt: serverTimestamp()
                    };

                    await addDoc(collection(db, "donations"), finalData);

                    toast({
                        title: `Thank you for supporting ${cause}!`,
                        description: "Your generous donation will change a life.",
                    });
                    form.reset();
                    formRef.current?.reset();
                } catch (dbError) {
                    console.error("Firestore write failed:", dbError);
                    toast({
                        variant: "destructive",
                        title: "Database Error",
                        description: "Could not save your donation. Please contact support.",
                    });
                }
            } else if (state.message && !state.success) {
                toast({
                    variant: "destructive",
                    title: "Validation Failed",
                    description: state.message,
                });
            }
        }
        handleServerResponse();
    }, [state, toast, form, cause]);


    return (
        <Card className="w-full border-0 shadow-none rounded-none">
            <CardContent className="p-6 md:p-8">
                <div className="absolute top-4 left-4 h-16 w-32 bg-white flex items-center justify-center p-2 rounded-md">
                    <Image src="/images/logo.png" alt="AIM Foundation Logo" width={120} height={48} className="object-contain"/>
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
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
