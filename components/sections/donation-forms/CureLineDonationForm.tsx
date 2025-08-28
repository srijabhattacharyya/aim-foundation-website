
'use client';
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "1500", label: "₹1500", description: "MEDICINES FOR 5 PEOPLE" },
    { value: "3000", label: "₹3000", description: "MEDICINES FOR 10 PEOPLE" },
    { value: "6000", label: "₹6000", description: "MEDICINES FOR 20 PEOPLE" },
    { value: "20000", label: "₹20000", description: "SUPPORT A FULL HEALTH CAMP (EXCLUDING MEDICINE)" },
];

const donationAmountsNonIndian = [
    { value: "18", label: "$18", description: "MEDICINES FOR 5 PEOPLE" },
    { value: "36", label: "$36", description: "MEDICINES FOR 10 PEOPLE" },
    { value: "72", label: "$72", description: "MEDICINES FOR 20 PEOPLE" },
    { value: "240", label: "$240", description: "SUPPORT A FULL HEALTH CAMP (EXCLUDING MEDICINE)" },
];

export default function CureLineDonationForm() {
    return (
        <DonationForm
            cause="CureLine"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="1500"
            defaultNonIndianAmount="18"
            formTitle="SUPPORT CURELINE"
            formSubtitle="MAKE A DIFFERENCE"
        />
    );
}
