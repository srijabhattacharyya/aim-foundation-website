'use client';
import DonationForm from "./DonationForm";

export default function CycleSafeDonationForm() {
    return (
        <DonationForm
            cause="CycleSafe"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT CYCLESAFE"
            formSubtitle="GIFT DIGNITY & HEALTH"
            hideAmount={true}
            razorpayButtonId="pl_SRL6sfT97Ws4CU"
        />
    );
}
