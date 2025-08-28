
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "1000", label: "₹1000", description: "FUND AWARENESS WORKSHOPS" },
    { value: "2500", label: "₹2500", description: "FUND AWARENESS WORKSHOPS" },
    { value: "5000", label: "₹5000", description: "FUND AWARENESS WORKSHOPS" },
    { value: "10000", label: "₹10000", description: "FUND AWARENESS WORKSHOPS" },
];

const donationAmountsNonIndian = [
    { value: "12", label: "$12", description: "FUND AWARENESS WORKSHOPS" },
    { value: "30", label: "$30", description: "FUND AWARENESS WORKSHOPS" },
    { value: "60", label: "$60", description: "FUND AWARENESS WORKSHOPS" },
    { value: "120", label: "$120", description: "FUND AWARENESS WORKSHOPS" },
];

export default function RootsOfChangeDonationForm() {
    return (
        <DonationForm
            cause="Roots of Change"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="1000"
            defaultNonIndianAmount="12"
            formTitle="SUPPORT ROOTS OF CHANGE"
            formSubtitle="EMPOWER THROUGH EDUCATION"
        />
    );
}
