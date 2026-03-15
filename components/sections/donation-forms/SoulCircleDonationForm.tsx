'use client';
import DonationForm from "./DonationForm";

export default function SoulCircleDonationForm() {
    return (
        <DonationForm
            cause="SoulCircle"
            donationAmountsIndian={[]}
            donationAmountsNonIndian={[]}
            defaultIndianAmount=""
            defaultNonIndianAmount=""
            formTitle="SUPPORT SOULCIRCLE"
            formSubtitle="PROVIDE A SAFE SPACE"
            hideAmount={true}
            razorpayButtonId="pl_SRLCra1orz60TY"
        />
    );
}
