
'use client';
import DonationForm from "./DonationForm";

export default function KrishtiDonationForm() {
    return (
        <DonationForm
            cause="Krishti"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT KRISHTI"
            formSubtitle="FROM SKILL TO SELF-RELIANCE"
            hideAmount={true}
            razorpayButtonId="pl_SRMAIxinR59A5l"
        />
    );
}
