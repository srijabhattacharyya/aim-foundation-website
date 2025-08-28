
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "6000", label: "₹6000", description: "SPONSOR A CHILD'S EDUCATION FOR 6 MONTHS" },
    { value: "12000", label: "₹12000", description: "SPONSOR A CHILD'S EDUCATION FOR A YEAR" },
    { value: "18000", label: "₹18000", description: "SPONSOR A CHILD'S EDUCATION & HEALTHCARE FOR A YEAR" },
    { value: "24000", label: "₹24000", description: "SPONSOR A CHILD'S HOLISTIC DEVELOPMENT FOR A YEAR" },
];

const donationAmountsNonIndian = [
    { value: "72", label: "$72", description: "SPONSOR A CHILD'S EDUCATION FOR 6 MONTHS" },
    { value: "144", label: "$144", description: "SPONSOR A CHILD'S EDUCATION FOR A YEAR" },
    { value: "216", label: "$216", description: "SPONSOR A CHILD'S EDUCATION & HEALTHCARE FOR A YEAR" },
    { value: "288", label: "$288", description: "SPONSOR A CHILD'S HOLISTIC DEVELOPMENT FOR A YEAR" },
];

export default function SponsorChildDonationForm() {
    return (
        <DonationForm
            cause="Sponsor a Child"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="12000"
            defaultNonIndianAmount="144"
            formTitle="SPONSOR A CHILD"
            formSubtitle="GIVE A CHILD THE GIFT OF A FUTURE"
        />
    );
}
