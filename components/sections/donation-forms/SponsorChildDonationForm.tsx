
'use client';
import DonationForm from "./DonationForm";

export default function SponsorChildDonationForm() {
    return (
        <DonationForm
            cause="Sponsor a Child"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SPONSOR A CHILD"
            formSubtitle="GIVE A CHILD THE GIFT OF A FUTURE"
            hideAmount={true}
            razorpayButtonId="pl_SQxZiuYPAbjQdo"
        />
    );
}
