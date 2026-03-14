
'use client';
import DonationForm from "./DonationForm";

export default function EmpowerEnglishDonationForm() {
    return (
        <DonationForm
            cause="Empower English"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT EMPOWER ENGLISH"
            formSubtitle="MAKE A DIFFERENCE"
            hideAmount={true}
            razorpayButtonId="pl_SR1EcRsMeo0Z3R"
        />
    );
}
