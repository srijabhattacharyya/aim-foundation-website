
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "750", label: "₹750", description: "SPONSOR 5 SAPLINGS & THEIR CARE" },
    { value: "1500", label: "₹1500", description: "SPONSOR 10 SAPLINGS & THEIR CARE" },
    { value: "3750", label: "₹3750", description: "SPONSOR 25 SAPLINGS & THEIR CARE" },
    { value: "7500", label: "₹7500", description: "SUPPORT A COMMUNITY PLANTATION DRIVE" },
];

const donationAmountsNonIndian = [
    { value: "9", label: "$9", description: "SPONSOR 5 SAPLINGS & THEIR CARE" },
    { value: "18", label: "$18", description: "SPONSOR 10 SAPLINGS & THEIR CARE" },
    { value: "45", label: "$45", description: "SPONSOR 25 SAPLINGS & THEIR CARE" },
    { value: "90", label: "$90", description: "SUPPORT A COMMUNITY PLANTATION DRIVE" },
];

export default function GreenRootsDonationForm() {
    return (
        <DonationForm
            cause="GreenRoots"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="750"
            defaultNonIndianAmount="9"
            formTitle="SUPPORT GREENROOTS"
            formSubtitle="PLANT A TREE, GROW A FUTURE"
        />
    );
}
