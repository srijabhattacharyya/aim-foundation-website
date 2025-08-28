
"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { addDonation } from "@/app/actions/donationActions";
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "2500", label: "₹2500", description: "SUPPORT A WORKSHOP FOR 5 CHILDREN" },
    { value: "5000", label: "₹5000", description: "SUPPORT A WORKSHOP FOR 10 CHILDREN" },
    { value: "10000", label: "₹10000", description: "SPONSOR LEARNING MATERIALS" },
    { value: "20000", label: "₹20000", description: "SPONSOR A FULL MILIEU SESSION" },
];

const donationAmountsNonIndian = [
    { value: "30", label: "$30", description: "SUPPORT A WORKSHOP FOR 5 CHILDREN" },
    { value: "60", label: "$60", description: "SUPPORT A WORKSHOP FOR 10 CHILDREN" },
    { value: "120", label: "$120", description: "SPONSOR LEARNING MATERIALS" },
    { value: "240", label: "$240", description: "SPONSOR A FULL MILIEU SESSION" },
];

const initialState = {
    message: '',
    errors: {},
    success: false,
};

export default function MilieuDonationForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(addDonation, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    if (state.success) {
      toast({
        title: "Thank you for supporting Milieu!",
        description: "Your donation helps build bridges of understanding.",
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
          <Image
            src="/images/logo.png"
            alt="AIM Foundation Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </div>
        <div className="text-center mb-8 pt-20">
          <h2 className="text-3xl font-bold font-headline">SUPPORT MILIEU</h2>
          <p className="text-muted-foreground">BUILDING BRIDGES, NURTURING EMPATHY</p>
        </div>
        <DonationForm
            formAction={formAction}
            state={state}
            cause="Milieu"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="2500"
            defaultNonIndianAmount="30"
            formRef={formRef}
        />
      </CardContent>
    </Card>
  );
}
