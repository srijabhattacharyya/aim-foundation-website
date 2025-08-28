
"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { addDonation } from "@/app/actions/donationActions";
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "1000", label: "₹1000", description: "Support our ongoing projects." },
    { value: "2500", label: "₹2500", description: "Help us reach more communities." },
    { value: "5000", label: "₹5000", description: "Contribute to a major initiative." },
    { value: "10000", label: "₹10000", description: "Sponsor a full program activity." },
];

const donationAmountsNonIndian = [
    { value: "12", label: "$12", description: "Support our ongoing projects." },
    { value: "30", label: "$30", description: "Help us reach more communities." },
    { value: "60", label: "$60", description: "Contribute to a major initiative." },
    { value: "120", label: "$120", description: "Sponsor a full program activity." },
];

const initialState = {
    message: '',
    errors: {},
    success: false,
};

export default function IndividualDonationForm() {
    const { toast } = useToast();
    const [state, formAction] = useFormState(addDonation, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success) {
            toast({
                title: "Thank you for your donation!",
                description: "Your support makes a huge impact.",
            });
            formRef.current?.reset();
        } else if (state.message && !state.errors) {
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: state.message,
            });
        }
    }, [state, toast]);

    return (
        <Card className="w-full border-0 shadow-none rounded-none">
            <CardContent className="p-6 md:p-8">
                <div className="absolute top-4 left-4 h-16 w-32 bg-white flex items-center justify-center p-2 rounded-md">
                    <Image src="/images/logo.png" alt="AIM Foundation Logo" width={120} height={48} className="object-contain"/>
                </div>
                <div className="text-center mb-8 pt-20">
                    <h2 className="text-3xl font-bold font-headline">SUPPORT OUR MISSION</h2>
                    <p className="text-muted-foreground">YOUR CONTRIBUTION MATTERS</p>
                </div>
                <form ref={formRef} action={formAction}>
                     <DonationForm
                        state={state}
                        cause="Individual Donation"
                        donationAmountsIndian={donationAmountsIndian}
                        donationAmountsNonIndian={donationAmountsNonIndian}
                        defaultIndianAmount="2500"
                        defaultNonIndianAmount="30"
                    />
                </form>
            </CardContent>
        </Card>
    );
}
