
'use client';
import DonationForm from "./DonationForm";

export default function SustainabilityDonationForm() {
    return (
        <DonationForm
            cause="Sustainability"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT SUSTAINABILITY INITIATIVES"
            formSubtitle="MAKE A DIFFERENCE"
            hideAmount={true}
            razorpayButtonId="pl_SRMPzkM6TncNHB"
        />
    );
}
