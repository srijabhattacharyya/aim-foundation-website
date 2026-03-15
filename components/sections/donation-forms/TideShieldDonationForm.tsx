
'use client';
import DonationForm from "./DonationForm";

export default function TideShieldDonationForm() {
    return (
        <DonationForm
            cause="TideShield"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT TIDESHIELD"
            formSubtitle="PROTECT OUR COASTS"
            hideAmount={true}
            razorpayButtonId="pl_SRMjvMWazh07SM"
        />
    );
}
