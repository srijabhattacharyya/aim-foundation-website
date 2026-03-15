
'use client';
import DonationForm from "./DonationForm";

export default function ChildcareDonationForm() {
    return (
        <DonationForm
            cause="Childcare"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT CHILDCARE INITIATIVES"
            formSubtitle="MAKE A DIFFERENCE"
            hideAmount={true}
            razorpayButtonId="pl_SRMGNyEsMdlh0H"
        />
    );
}
