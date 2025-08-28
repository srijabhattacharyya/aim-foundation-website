
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "1000", label: "₹1000", description: "PROVIDE AN ESSENTIALS KIT" },
    { value: "2500", label: "₹2500", description: "PROVIDE FOOD FOR A FAMILY FOR A WEEK" },
    { value: "5000", label: "₹5000", description: "SUPPORT A SMALL RELIEF CAMP" },
    { value: "10000", label: "₹10000", description: "SUPPORT A COMPREHENSIVE RELIEF CAMP" },
];

const donationAmountsNonIndian = [
    { value: "12", label: "$12", description: "PROVIDE AN ESSENTIALS KIT" },
    { value: "30", label: "$30", description: "PROVIDE FOOD FOR A FAMILY FOR A WEEK" },
    { value: "60", label: "$60", description: "SUPPORT A SMALL RELIEF CAMP" },
    { value: "120", label: "$120", description: "SUPPORT A COMPREHENSIVE RELIEF CAMP" },
];

export default function ReliefDonationForm() {
    return (
        <DonationForm
            cause="Relief to the Underprivileged"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="1000"
            defaultNonIndianAmount="12"
            formTitle="SUPPORT RELIEF EFFORTS"
            formSubtitle="PROVIDE IMMEDIATE AID"
        />
    );
}
