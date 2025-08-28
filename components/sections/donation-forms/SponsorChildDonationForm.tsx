
"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { addDonation } from "@/app/actions/donationActions";
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "6000", label: "₹6000", description: "SPONSOR A CHILD'S EDUCATION FOR 6 MONTHS" },
    { value: "12000", label: "₹12000", description: "SPONSOR A CHILD'S EDUCATION FOR A YEAR" },
    { value: "18000", label: "₹18000", description: "SPONSOR A CHILD'S EDUCATION & HEALTHCARE FOR A YEAR" },
    { value: "24000", label: "₹24000", description: "SPONSOR A CHILD'S HOLISTIC DEVELOPMENT FOR A YEAR" },
];

const donationAmountsNonIndian = [
    { value: "72", label: "$72", description: "SPONSOR A CHILD'S EDUCATION FOR 6 MONTHS" },
    { value: "144", label: "$144", description: "SPONSOR A CHILD'S EDUCATION FOR A YEAR" },
    { value: "216", label: "$216", description: "SPONSOR A CHILD'S EDUCATION & HEALTHCARE FOR A YEAR" },
    { value: "288", label: "$288", description: "SPONSOR A CHILD'S HOLISTIC DEVELOPMENT FOR A YEAR" },
];

const initialState = {
    message: '',
    errors: {},
    success: false,
};

export default function SponsorChildDonationForm() {
    const { toast } = useToast();
    const [state, formAction] = useFormState(addDonation, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success) {
            toast({
                title: "Thank you for sponsoring a child!",
                description: "Your generous donation will change a life.",
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
                    <h2 className="text-3xl font-bold font-headline">SPONSOR A CHILD</h2>
                    <p className="text-muted-foreground">GIVE A CHILD THE GIFT OF A FUTURE</p>
                </div>
                <form ref={formRef} action={formAction}>
                    <DonationForm
                        state={state}
                        cause="Sponsor a Child"
                        donationAmountsIndian={donationAmountsIndian}
                        donationAmountsNonIndian={donationAmountsNonIndian}
                        defaultIndianAmount="12000"
                        defaultNonIndianAmount="144"
                    />
                </form>
            </CardContent>
        </Card>
    );
}
