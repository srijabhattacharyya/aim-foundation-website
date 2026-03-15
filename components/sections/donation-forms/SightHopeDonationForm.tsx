
'use client';
import DonationForm from "./DonationForm";

export default function SightHopeDonationForm() {
    return (
        <DonationForm
            cause="SightHope"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT SIGHTHOPE"
            formSubtitle="GIFT OF SIGHT"
            hideAmount={true}
            razorpayButtonId="pl_SRKz9206bzQ0iI"
        />
    );
}
