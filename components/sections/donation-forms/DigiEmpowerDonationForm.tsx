
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "3000", label: "₹3000", description: "DIGITAL LITERACY FOR 1 CHILD FOR 6 MONTHS" },
    { value: "6000", label: "₹6000", description: "DIGITAL LITERACY FOR 1 CHILD FOR A YEAR" },
    { value: "12000", label: "₹12000", description: "DIGITAL LITERACY FOR 2 CHILDREN FOR A YEAR" },
    { value: "24000", label: "₹24000", description: "SPONSOR A DIGITAL LITERACY CENTER" },
];

const donationAmountsNonIndian = [
    { value: "35", label: "$35", description: "DIGITAL LITERACY FOR 1 CHILD FOR 6 MONTHS" },
    { value: "70", label: "$70", description: "DIGITAL LITERACY FOR 1 CHILD FOR A YEAR" },
    { value: "140", label: "$140", description: "DIGITAL LITERACY FOR 2 CHILDREN FOR A YEAR" },
    { value: "280", label: "$280", description: "SPONSOR A DIGITAL LITERACY CENTER" },
];

export default function DigiEmpowerDonationForm() {
    return (
        <DonationForm
            cause="DigiEmpower"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="3000"
            defaultNonIndianAmount="35"
            formTitle="SUPPORT DIGIEMPOWER"
            formSubtitle="MAKE A DIFFERENCE"
        />
    );
}
