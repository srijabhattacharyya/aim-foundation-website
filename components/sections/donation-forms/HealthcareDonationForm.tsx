
'use client';
import DonationForm from "./DonationForm";

export default function HealthcareDonationForm() {
    return (
        <DonationForm
            cause="Healthcare"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT HEALTHCARE INITIATIVES"
            formSubtitle="PROVIDE VITAL MEDICAL CARE"
            hideAmount={true}
            razorpayButtonId="pl_SRD6isYNKqxDzH"
        />
    );
}
