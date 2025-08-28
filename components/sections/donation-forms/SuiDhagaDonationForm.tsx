
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "3500", label: "₹3500", description: "BASIC TAILORING TRAINING TO 1 WOMAN" },
    { value: "7000", label: "₹7000", description: "ADVANCE TAILORING TRAINING FOR 1 WOMAN" },
    { value: "14000", label: "₹14000", description: "SPONSOR A SEWING MACHINE & BASIC TAILORING TRAINING" },
    { value: "21000", label: "₹21000", description: "SPONSOR A SEWING MACHINE & COMPLETE TRAINING" },
];

const donationAmountsNonIndian = [
    { value: "42", label: "$42", description: "BASIC TAILORING TRAINING TO 1 WOMAN" },
    { value: "84", label: "$84", description: "ADVANCE TAILORING TRAINING FOR 1 WOMAN" },
    { value: "168", label: "$168", description: "SPONSOR A SEWING MACHINE & BASIC TAILORING TRAINING" },
    { value: "252", label: "$252", description: "SPONSOR A SEWING MACHINE & COMPLETE TRAINING" },
];

export default function SuiDhagaDonationForm() {
    return (
        <DonationForm
            cause="SuiDhaga"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="3500"
            defaultNonIndianAmount="42"
            formTitle="SUPPORT SUIDHAGA"
            formSubtitle="EMPOWER THROUGH SKILL"
        />
    );
}
