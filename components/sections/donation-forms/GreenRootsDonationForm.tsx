
'use client';
import DonationForm from "./DonationForm";

export default function GreenRootsDonationForm() {
    return (
        <DonationForm
            cause="GreenRoots"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT GREENROOTS"
            formSubtitle="PLANT A TREE, GROW A FUTURE"
            hideAmount={true}
            razorpayButtonId="pl_SRMVaSecri7i4Z"
        />
    );
}
