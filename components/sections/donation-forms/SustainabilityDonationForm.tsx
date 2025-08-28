
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "2000", label: "₹2000", description: "PLANT 20 TREES" },
    { value: "5000", label: "₹5000", description: "SUPPORT A CLEANUP DRIVE" },
    { value: "10000", label: "₹10000", description: "FUND AN ENVIRONMENTAL WORKSHOP" },
    { value: "25000", label: "₹25000", description: "SPONSOR A RESTORATION PROJECT" },
];

const donationAmountsNonIndian = [
    { value: "25", label: "$25", description: "PLANT 20 TREES" },
    { value: "60", label: "$60", description: "SUPPORT A CLEANUP DRIVE" },
    { value: "120", label: "$120", description: "FUND AN ENVIRONMENTAL WORKSHOP" },
    { value: "300", label: "$300", description: "SPONSOR A RESTORATION PROJECT" },
];

export default function SustainabilityDonationForm() {
    return (
        <DonationForm
            cause="Sustainability"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="2000"
            defaultNonIndianAmount="25"
            formTitle="SUPPORT SUSTAINABILITY INITIATIVES"
            formSubtitle="NURTURE OUR PLANET"
        />
    );
}
