
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "500", label: "₹500", description: "SANITARY NAPKINS FOR A GIRL FOR A YEAR" },
    { value: "1000", label: "₹1000", description: "SANITARY NAPKINS FOR 2 GIRLS FOR A YEAR" },
    { value: "2500", label: "₹2500", description: "SANITARY NAPKINS FOR 5 GIRLS FOR A YEAR" },
    { value: "10000", label: "₹10000", description: "SUPPORT A MENSTRUAL HYGIENE WORKSHOP" },
];

const donationAmountsNonIndian = [
    { value: "6", label: "$6", description: "SANITARY NAPKINS FOR A GIRL FOR A YEAR" },
    { value: "12", label: "$12", description: "SANITARY NAPKINS FOR 2 GIRLS FOR A YEAR" },
    { value: "30", label: "$30", description: "SANITARY NAPKINS FOR 5 GIRLS FOR A YEAR" },
    { value: "120", label: "$120", description: "SUPPORT A MENSTRUAL HYGIENE WORKSHOP" },
];

export default function CycleSafeDonationForm() {
    return (
        <DonationForm
            cause="CycleSafe"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="500"
            defaultNonIndianAmount="6"
            formTitle="SUPPORT CYCLESAFE"
            formSubtitle="GIFT DIGNITY & HEALTH"
        />
    );
}
