
'use client';
import DonationForm from "./DonationForm";

export default function ChildFirstDonationForm() {
    return (
        <DonationForm
            cause="ChildFirst"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT CHILDFIRST"
            formSubtitle="MAKE A DIFFERENCE"
            hideAmount={true}
            razorpayButtonId="pl_SRDO5F4VdttRIY"
        />
    );
}
