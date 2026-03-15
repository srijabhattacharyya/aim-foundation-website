
'use client';
import DonationForm from "./DonationForm";

export default function RootsOfChangeDonationForm() {
    return (
        <DonationForm
            cause="Roots of Change"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT ROOTS OF CHANGE"
            formSubtitle="EMPOWER THROUGH EDUCATION"
            hideAmount={true}
            razorpayButtonId="pl_SRMtxbIuxDs3Yv"
        />
    );
}
