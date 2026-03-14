
'use client';
import DonationForm from "./DonationForm";

export default function MilieuDonationForm() {
    return (
        <DonationForm
            cause="Milieu"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT MILIEU"
            formSubtitle="BUILDING BRIDGES, NURTURING EMPATHY"
            hideAmount={true}
            razorpayButtonId="pl_SR1TjSIzKZaGPy"
        />
    );
}
