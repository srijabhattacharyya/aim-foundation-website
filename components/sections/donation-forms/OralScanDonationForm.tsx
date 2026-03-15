
'use client';
import DonationForm from "./DonationForm";

export default function OralScanDonationForm() {
    return (
        <DonationForm
            cause="OralScan"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT ORALSCAN"
            formSubtitle="EARLY DETECTION SAVES LIVES"
            hideAmount={true}
            razorpayButtonId="pl_SRKz9206bzQ0iI"
        />
    );
}
