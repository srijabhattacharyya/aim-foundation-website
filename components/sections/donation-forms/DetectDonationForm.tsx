
'use client';
import DonationForm from "./DonationForm";

export default function DetectDonationForm() {
    return (
        <DonationForm
            cause="Detect"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT DETECT"
            formSubtitle="MAKE A DIFFERENCE"
            hideAmount={true}
            razorpayButtonId="pl_SRKn2GcPutDzOA"
        />
    );
}
