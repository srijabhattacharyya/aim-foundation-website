
'use client';
import DonationForm from "./DonationForm";

export default function InnocentSmilesDonationForm() {
    return (
        <DonationForm
            cause="Innocent Smiles"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT INNOCENT SMILES"
            formSubtitle="MAKE A DIFFERENCE"
            hideAmount={true}
            razorpayButtonId="pl_SR0iHqMV2d2z4i"
        />
    );
}
