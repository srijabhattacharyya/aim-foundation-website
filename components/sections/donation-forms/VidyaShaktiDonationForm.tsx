
'use client';
import DonationForm from "./DonationForm";

export default function VidyaShaktiDonationForm() {
    return (
        <DonationForm
            cause="VidyaShakti"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT VIDYASHAKTI"
            formSubtitle="MAKE A DIFFERENCE"
            hideAmount={true}
            razorpayButtonId="pl_SR1Yr47xn26vaZ"
        />
    );
}
