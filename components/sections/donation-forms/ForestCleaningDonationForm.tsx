
'use client';
import DonationForm from "./DonationForm";

export default function ForestCleaningDonationForm() {
    return (
        <DonationForm
            cause="Forest Cleaning"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT FOREST CLEANING"
            formSubtitle="RESTORE OUR FORESTS"
            hideAmount={true}
            razorpayButtonId="pl_SRMyY6m2vkxfze"
        />
    );
}
