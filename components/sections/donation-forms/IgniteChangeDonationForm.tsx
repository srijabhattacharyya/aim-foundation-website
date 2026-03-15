'use client';
import DonationForm from "./DonationForm";

export default function IgniteChangeDonationForm() {
    return (
        <DonationForm
            cause="Ignite Change Initiative"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT IGNITE CHANGE"
            formSubtitle="BE THE SPARK"
            hideAmount={true}
            razorpayButtonId="pl_SRN9Lp4szo4GJs"
            isSubscription={false}
        />
    );
}
