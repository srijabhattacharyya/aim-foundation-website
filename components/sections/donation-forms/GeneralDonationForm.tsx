
'use client';
import DonationForm from "./DonationForm";

export default function GeneralDonationForm() {
    return (
        <DonationForm
            cause="General Fund"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT OUR MISSION"
            formSubtitle="YOUR CONTRIBUTION MATTERS"
            hideAmount={true}
            razorpayButtonId="pl_SQz7U31370FK7C"
        />
    );
}
