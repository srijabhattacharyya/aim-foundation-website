
'use client';
import DonationForm from "./DonationForm";

export default function EducationalDonationForm() {
    return (
        <DonationForm
            cause="Educational Initiatives"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT OUR EDUCATIONAL INITIATIVES"
            formSubtitle="YOUR CONTRIBUTION MATTERS"
            hideAmount={true}
            razorpayButtonId="pl_SQzwgo48pje7Ru"
        />
    );
}
