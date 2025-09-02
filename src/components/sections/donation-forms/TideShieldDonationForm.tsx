
"use client";
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "1000", label: "₹1000", description: "PLANT 10 MANGROVE SAPLINGS" },
    { value: "2500", label: "₹2500", description: "PLANT 25 MANGROVE SAPLINGS" },
    { value: "5000", label: "₹5000", description: "PLANT 50 MANGROVE SAPLINGS" },
    { value: "10000", label: "₹10000", description: "RESTORE A SMALL MANGROVE PATCH" },
];

const donationAmountsNonIndian = [
    { value: "12", label: "$12", description: "PLANT 10 MANGROVE SAPLINGS" },
    { value: "30", label: "$30", description: "PLANT 25 MANGROVE SAPLINGS" },
    { value: "60", label: "$60", description: "PLANT 50 MANGROVE SAPLINGS" },
    { value: "120", label: "$120", description: "RESTORE A SMALL MANGROVE PATCH" },
];

export default function TideShieldDonationForm() {
    return (
        <DonationForm
            cause="TideShield"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="1000"
            defaultNonIndianAmount="12"
            formTitle="SUPPORT TIDESHIELD"
            formSubtitle="PROTECT OUR COASTS"
        />
    );
}
