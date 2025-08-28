
"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { addDonation } from "@/app/actions/donationActions";
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "1500", label: "₹1500", description: "MEDICINES FOR 5 PEOPLE" },
    { value: "3000", label: "₹3000", description: "MEDICINES FOR 10 PEOPLE" },
    { value: "6000", label: "₹6000", description: "MEDICINES FOR 20 PEOPLE" },
    { value: "20000", label: "₹20000", description: "SUPPORT A FULL HEALTH CAMP (EXCLUDING MEDICINE)" },
];

const donationAmountsNonIndian = [
    { value: "18", label: "$18", description: "MEDICINES FOR 5 PEOPLE" },
    { value: "36", label: "$36", description: "MEDICINES FOR 10 PEOPLE" },
    { value: "72", label: "$72", description: "MEDICINES FOR 20 PEOPLE" },
    { value: "240", label: "$240", description: "SUPPORT A FULL HEALTH CAMP (EXCLUDING MEDICINE)" },
];

const initialState = {
    message: '',
    errors: {},
    success: false,
};

export default function CureLineDonationForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(addDonation, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    if (state.success) {
      toast({
        title: "Thank you for supporting CureLine!",
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
  }, [state, toast]);

  return (
    <Card className="w-full border-0 shadow-none rounded-none">
        <CardContent className="p-6 md:p-8">
             <div className="absolute top-4 left-4 h-16 w-32 bg-white flex items-center justify-center p-2 rounded-md">
                <Image src="/images/logo.png" alt="AIM Foundation Logo" width={120} height={48} className="object-contain"/>
            </div>
            <div className="text-center mb-8 pt-20">
                <h2 className="text-3xl font-bold font-headline">SUPPORT CURELINE</h2>
                <p className="text-muted-foreground">MAKE A DIFFERENCE</p>
            </div>
            <form ref={formRef} action={formAction}>
              <DonationForm
                state={state}
                cause="CureLine"
                donationAmountsIndian={donationAmountsIndian}
                donationAmountsNonIndian={donationAmountsNonIndian}
                defaultIndianAmount="1500"
                defaultNonIndianAmount="18"
              />
            </form>
        </CardContent>
    </Card>
  );
}
