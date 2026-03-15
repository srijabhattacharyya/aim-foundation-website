
'use client';
import DonationForm from "./DonationForm";

export default function SuiDhagaDonationForm() {
    return (
        <DonationForm
            cause="SuiDhaga"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT SUIDHAGA"
            formSubtitle="EMPOWER THROUGH SKILL"
            hideAmount={true}
            razorpayButtonId="pl_SRLNYE7u0o3BfK"
        />
    );
}
