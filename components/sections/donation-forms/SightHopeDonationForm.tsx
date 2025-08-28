
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "1500", label: "₹1500", description: "GIFT SPECTACLES TO 5 PEOPLE" },
    { value: "3000", label: "₹3000", description: "SPONSOR A CATARACT SURGERY" },
    { value: "6000", label: "₹6000", description: "SPONSOR 2 CATARACT SURGERIES" },
    { value: "30000", label: "₹30000", description: "SPONSOR AN ENTIRE EYE CAMP (WITHOUT SPECTACLES)" },
];

const donationAmountsNonIndian = [
    { value: "18", label: "$18", description: "GIFT SPECTACLES TO 5 PEOPLE" },
    { value: "36", label: "$36", description: "SPONSOR A CATARACT SURGERY" },
    { value: "72", label: "$72", description: "SPONSOR 2 CATARACT SURGERIES" },
    { value: "360", label: "$360", description: "SPONSOR AN ENTIRE EYE CAMP (WITHOUT SPECTACLES)" },
];

export default function SightHopeDonationForm() {
    return (
        <DonationForm
            cause="SightHope"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="1500"
            defaultNonIndianAmount="18"
            formTitle="SUPPORT SIGHTHOPE"
            formSubtitle="GIFT OF SIGHT"
        />
    );
}
