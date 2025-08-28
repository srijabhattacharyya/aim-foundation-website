
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "500", label: "₹500", description: "MAINTAIN APP FOR 1 MONTH" },
    { value: "1000", label: "₹1000", description: "SUPPORT AI MODEL TRAINING" },
    { value: "2500", label: "₹2500", description: "SUPPORT MULTILINGUAL CAPABILITIES" },
    { value: "5000", label: "₹5000", description: "SUPPORT APP DEVELOPMENT" },
];

const donationAmountsNonIndian = [
    { value: "6", label: "$6", description: "MAINTAIN APP FOR 1 MONTH" },
    { value: "12", label: "$12", description: "SUPPORT AI MODEL TRAINING" },
    { value: "30", label: "$30", description: "SUPPORT MULTILINGUAL CAPABILITIES" },
    { value: "60", label: "$60", description: "SUPPORT APP DEVELOPMENT" },
];

export default function SoulCircleDonationForm() {
    return (
        <DonationForm
            cause="SoulCircle"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="500"
            defaultNonIndianAmount="6"
            formTitle="SUPPORT SOULCIRCLE"
            formSubtitle="PROVIDE A SAFE SPACE"
        />
    );
}
