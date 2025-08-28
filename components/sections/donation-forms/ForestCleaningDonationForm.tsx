
'use client';
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "1000", label: "₹1000", description: "SUPPORT CLEANING EQUIPMENT FOR 5 VOLUNTEERS" },
    { value: "2500", label: "₹2500", description: "SUPPORT A SMALL CLEANUP DRIVE" },
    { value: "5000", label: "₹5000", description: "SPONSOR A COMMUNITY AWARENESS SESSION" },
    { value: "10000", label: "₹10000", description: "SUPPORT A LARGE-SCALE FOREST CLEANING EVENT" },
];

const donationAmountsNonIndian = [
    { value: "12", label: "$12", description: "SUPPORT CLEANING EQUIPMENT FOR 5 VOLUNTEERS" },
    { value: "30", label: "$30", description: "SUPPORT A SMALL CLEANUP DRIVE" },
    { value: "60", label: "$60", description: "SPONSOR A COMMUNITY AWARENESS SESSION" },
    { value: "120", label: "$120", description: "SUPPORT A LARGE-SCALE FOREST CLEANING EVENT" },
];

export default function ForestCleaningDonationForm() {
    return (
        <DonationForm
            cause="Forest Cleaning"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="1000"
            defaultNonIndianAmount="12"
            formTitle="SUPPORT FOREST CLEANING"
            formSubtitle="RESTORE OUR FORESTS"
        />
    );
}
