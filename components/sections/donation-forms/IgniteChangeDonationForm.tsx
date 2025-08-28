
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "2000", label: "₹2000", description: "SPARK A LOCAL CAMPAIGN" },
    { value: "5000", label: "₹5000", description: "SUPPORT A COMMUNITY WORKSHOP" },
    { value: "10000", label: "₹10000", description: "FUND A GRASSROOTS PROJECT" },
    { value: "20000", label: "₹20000", description: "EMPOWER A TEAM OF CHANGEMAKERS" },
];

const donationAmountsNonIndian = [
    { value: "25", label: "$25", description: "SPARK A LOCAL CAMPAIGN" },
    { value: "60", label: "$60", description: "SUPPORT A COMMUNITY WORKSHOP" },
    { value: "120", label: "$120", description: "FUND A GRASSROOTS PROJECT" },
    { value: "240", label: "$240", description: "EMPOWER A TEAM OF CHANGEMAKERS" },
];

export default function IgniteChangeDonationForm() {
    return (
        <DonationForm
            cause="Ignite Change Initiative"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="2000"
            defaultNonIndianAmount="25"
            formTitle="SUPPORT IGNITE CHANGE"
            formSubtitle="BE THE SPARK"
        />
    );
}
