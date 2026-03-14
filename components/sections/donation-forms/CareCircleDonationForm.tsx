
'use client';
import DonationForm from "./DonationForm";

export default function CareCircleDonationForm() {
    return (
        <DonationForm
            cause="CareCircle"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT CARECIRCLE"
            formSubtitle="MAKE A DIFFERENCE"
            hideAmount={true}
            razorpayButtonId="pl_SRDIAaLyDm3o7T"
        />
    );
}
