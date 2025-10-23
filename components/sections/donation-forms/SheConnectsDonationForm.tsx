
'use client';
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "2500", label: "₹2500", description: "DIGITAL & FINANCIAL LITERACY FOR 1 GIRL" },
    { value: "5000", label: "₹5000", description: "DIGITAL & FINANCIAL LITERACY FOR 2 GIRLS" },
    { value: "10000", label: "₹10000", description: "SUPPORT A SMALL WORKSHOP" },
    { value: "20000", label: "₹20000", description: "SPONSOR A COMPLETE WORKSHOP" },
];

const donationAmountsNonIndian = [
    { value: "30", label: "$30", description: "DIGITAL & FINANCIAL LITERACY FOR 1 GIRL" },
    { value: "60", label: "$60", description: "DIGITAL & FINANCIAL LITERACY FOR 2 GIRLS" },
    { value: "120", label: "$120", description: "SUPPORT A SMALL WORKSHOP" },
    { value: "240", label: "$240", description: "SPONSOR A COMPLETE WORKSHOP" },
];

export default function SheConnectsDonationForm() {
    return (
        <DonationForm
            cause="SheConnects"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="2500"
            defaultNonIndianAmount="30"
            formTitle="SUPPORT SHECONNECTS"
            formSubtitle="EMPOWER A GIRL'S FUTURE"
        />
    );
}
