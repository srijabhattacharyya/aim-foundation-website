
'use client';
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "3000", label: "₹3000", description: "SUPPORT A CHILD'S EDUCATION FOR 6 MONTHS" },
    { value: "6000", label: "₹6000", description: "SUPPORT A CHILD'S EDUCATION FOR A YEAR" },
    { value: "12000", label: "₹12000", description: "SUPPORT 2 CHILDREN'S EDUCATION FOR A YEAR" },
    { value: "24000", label: "₹24000", description: "SPONSOR A LEARNING CENTER FOR A MONTH" },
];

const donationAmountsNonIndian = [
    { value: "35", label: "$35", description: "SUPPORT A CHILD'S EDUCATION FOR 6 MONTHS" },
    { value: "70", label: "$70", description: "SUPPORT A CHILD'S EDUCATION FOR A YEAR" },
    { value: "140", label: "$140", description: "SUPPORT 2 CHILDREN'S EDUCATION FOR A YEAR" },
    { value: "280", label: "$280", description: "SPONSOR A LEARNING CENTER FOR A MONTH" },
];

export default function EducationalDonationForm() {
    return (
        <DonationForm
            cause="Educational"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="3000"
            defaultNonIndianAmount="35"
            formTitle="SUPPORT EDUCATIONAL INITIATIVES"
            formSubtitle="MAKE A DIFFERENCE"
        />
    );
}
