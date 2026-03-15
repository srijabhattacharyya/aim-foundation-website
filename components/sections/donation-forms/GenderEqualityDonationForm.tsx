
'use client';
import DonationForm from "./DonationForm";

export default function GenderEqualityDonationForm() {
    return (
        <DonationForm
            cause="Gender Equality"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT GENDER EQUALITY"
            formSubtitle="MAKE A DIFFERENCE"
            hideAmount={true}
            razorpayButtonId="pl_SRLITHUjakzVWU"
        />
    );
}
