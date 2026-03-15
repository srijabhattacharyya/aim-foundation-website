
'use client';
import DonationForm from "./DonationForm";

export default function DisasterManagementDonationForm() {
    return (
        <DonationForm
            cause="Disaster Management"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT DISASTER RELIEF"
            formSubtitle="PROVIDE URGENT AID"
            hideAmount={true}
            razorpayButtonId="pl_SRN614kzzmwD8t"
        />
    );
}
