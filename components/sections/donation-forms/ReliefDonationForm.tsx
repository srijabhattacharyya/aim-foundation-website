
'use client';
import DonationForm from "./DonationForm";

export default function ReliefDonationForm() {
    return (
        <DonationForm
            cause="Relief to the Underprivileged"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT RELIEF EFFORTS"
            formSubtitle="PROVIDE IMMEDIATE AID"
            hideAmount={true}
            razorpayButtonId="pl_SRN279VxAFLbge"
        />
    );
}
