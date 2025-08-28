
'use client';
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "3000", label: "₹3000", description: "ONLINE CLASSES FOR 1 CHILD FOR 6 MONTHS" },
    { value: "6000", label: "₹6000", description: "ONLINE CLASSES FOR 1 CHILD FOR A YEAR" },
    { value: "12000", label: "₹12000", description: "ONLINE CLASSES FOR 2 CHILDREN FOR A YEAR" },
    { value: "24000", label: "₹24000", description: "ONLINE CLASSES FOR 4 CHILDREN FOR A YEAR" },
];

const donationAmountsNonIndian = [
    { value: "35", label: "$35", description: "ONLINE CLASSES FOR 1 CHILD FOR 6 MONTHS" },
    { value: "70", label: "$70", description: "ONLINE CLASSES FOR 1 CHILD FOR A YEAR" },
    { value: "140", label: "$140", description: "ONLINE CLASSES FOR 2 CHILDREN FOR A YEAR" },
    { value: "280", label: "$280", description: "ONLINE CLASSES FOR 4 CHILDREN FOR A YEAR" },
];

export default function EduAccessDonationForm() {
    return (
        <DonationForm
            cause="EduAccess"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="3000"
            defaultNonIndianAmount="35"
            formTitle="SUPPORT EDUACCESS"
            formSubtitle="MAKE A DIFFERENCE"
        />
    );
}
