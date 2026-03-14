
'use client';
import DonationForm from "./DonationForm";

export default function DigiEmpowerDonationForm() {
    return (
        <DonationForm
            cause="DigiEmpower"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT DIGIEMPOWER"
            formSubtitle="MAKE A DIFFERENCE"
            hideAmount={true}
            razorpayButtonId="pl_SR1EcRsMeo0Z3R"
        />
    );
}
