
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "1500", label: "₹1500", description: "PROVIDE MEDICINES FOR 5 PEOPLE" },
    { value: "3000", label: "₹3000", description: "SUPPORT A HEALTH CHECK-UP CAMP" },
    { value: "5000", label: "₹5000", description: "SPONSOR A MINOR SURGERY" },
    { value: "20000", label: "₹20000", description: "SUPPORT A FULL HEALTH CAMP" },
];

const donationAmountsNonIndian = [
    { value: "18", label: "$18", description: "PROVIDE MEDICINES FOR 5 PEOPLE" },
    { value: "36", label: "$36", description: "SUPPORT A HEALTH CHECK-UP CAMP" },
    { value: "60", label: "$60", description: "SPONSOR A MINOR SURGERY" },
    { value: "240", label: "$240", description: "SUPPORT A FULL HEALTH CAMP" },
];

export default function HealthcareDonationForm() {
    return (
        <DonationForm
            cause="Healthcare"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="1500"
            defaultNonIndianAmount="18"
            formTitle="SUPPORT HEALTHCARE INITIATIVES"
            formSubtitle="PROVIDE VITAL MEDICAL CARE"
        />
    );
}
