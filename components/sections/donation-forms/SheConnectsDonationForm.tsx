
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "3000", label: "₹3000", description: "DIGITAL LITERACY FOR 1 WOMAN FOR 3 MONTHS" },
    { value: "6000", label: "₹6000", description: "DIGITAL LITERACY FOR 1 WOMAN FOR 6 MONTHS" },
    { value: "12000", label: "₹12000", description: "DIGITAL LITERACY FOR 1 WOMAN FOR A YEAR" },
    { value: "24000", label: "₹24000", description: "SPONSOR A DIGITAL LITERACY WORKSHOP" },
];

const donationAmountsNonIndian = [
    { value: "35", label: "$35", description: "DIGITAL LITERACY FOR 1 WOMAN FOR 3 MONTHS" },
    { value: "70", label: "$70", description: "DIGITAL LITERACY FOR 1 WOMAN FOR 6 MONTHS" },
    { value: "140", label: "$140", description: "DIGITAL LITERACY FOR 1 WOMAN FOR A YEAR" },
    { value: "280", label: "$280", description: "SPONSOR A DIGITAL LITERACY WORKSHOP" },
];

export default function SheConnectsDonationForm() {
    return (
        <DonationForm
            cause="SheConnects"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="3000"
            defaultNonIndianAmount="35"
            formTitle="SUPPORT SHECONNECTS"
            formSubtitle="MAKE A DIFFERENCE"
        />
    );
}
