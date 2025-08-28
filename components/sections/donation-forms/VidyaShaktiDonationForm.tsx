
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "3000", label: "₹3000", description: "APP ACCESS FOR 10 CHILDREN FOR A YEAR" },
    { value: "6000", label: "₹6000", description: "APP ACCESS FOR 20 CHILDREN FOR A YEAR" },
    { value: "12000", label: "₹12000", description: "APP ACCESS FOR 40 CHILDREN FOR A YEAR" },
    { value: "24000", label: "₹24000", description: "SUPPORT APP DEVELOPMENT & MAINTENANCE" },
];

const donationAmountsNonIndian = [
    { value: "35", label: "$35", description: "APP ACCESS FOR 10 CHILDREN FOR A YEAR" },
    { value: "70", label: "$70", description: "APP ACCESS FOR 20 CHILDREN FOR A YEAR" },
    { value: "140", label: "$140", description: "APP ACCESS FOR 40 CHILDREN FOR A YEAR" },
    { value: "280", label: "$280", description: "SUPPORT APP DEVELOPMENT & MAINTENANCE" },
];

export default function VidyaShaktiDonationForm() {
    return (
        <DonationForm
            cause="VidyaShakti"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="3000"
            defaultNonIndianAmount="35"
            formTitle="SUPPORT VIDYASHAKTI"
            formSubtitle="MAKE A DIFFERENCE"
        />
    );
}
