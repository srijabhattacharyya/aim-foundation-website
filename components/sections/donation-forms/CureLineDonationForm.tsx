
'use client';
import DonationForm from "./DonationForm";

export default function CureLineDonationForm() {
    return (
        <DonationForm
            cause="CureLine"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT CURELINE"
            formSubtitle="MAKE A DIFFERENCE"
            hideAmount={true}
            razorpayButtonId="pl_SRDDJlmPlibZzN"
        />
    );
}
