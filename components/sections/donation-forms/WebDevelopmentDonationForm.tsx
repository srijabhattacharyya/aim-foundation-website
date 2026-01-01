
'use client';
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "3000", label: "₹3000", description: "SUPPORT A STUDENT FOR 1 MONTH" },
    { value: "9000", label: "₹9000", description: "SUPPORT A STUDENT FOR 3 MONTHS" },
    { value: "18000", label: "₹18000", description: "SPONSOR A STUDENT FOR THE FULL COURSE" },
    { value: "36000", label: "₹36000", description: "SPONSOR 2 STUDENTS FOR THE FULL COURSE" },
];

const donationAmountsNonIndian = [
    { value: "36", label: "$36", description: "SUPPORT A STUDENT FOR 1 MONTH" },
    { value: "108", label: "$108", description: "SUPPORT A STUDENT FOR 3 MONTHS" },
    { value: "216", label: "$216", description: "SPONSOR A STUDENT FOR THE FULL COURSE" },
    { value: "432", label: "$432", description: "SPONSOR 2 STUDENTS FOR THE FULL COURSE" },
];

export default function WebDevelopmentDonationForm() {
    return (
        <DonationForm
            cause="Web Development"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="3000"
            defaultNonIndianAmount="36"
            formTitle="SUPPORT WEB DEVELOPMENT TRAINING"
            formSubtitle="EMPOWER A FUTURE BUILDER"
        />
    );
}
