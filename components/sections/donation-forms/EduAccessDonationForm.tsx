
'use client';
import DonationForm from "./DonationForm";

export default function EduAccessDonationForm() {
    return (
        <DonationForm
            cause="EduAccess"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT EDUACCESS"
            formSubtitle="MAKE A DIFFERENCE"
            hideAmount={true}
            razorpayButtonId="pl_SR13XkTMxcm3AS"
        />
    );
}
