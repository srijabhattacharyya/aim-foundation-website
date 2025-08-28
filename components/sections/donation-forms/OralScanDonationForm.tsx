
'use client';
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "1000", label: "₹1000", description: "SPONSOR AN ORAL CANCER SCREENING KIT" },
    { value: "2500", label: "₹2500", description: "SUPPORT AN AWARENESS SESSION" },
    { value: "5000", label: "₹5000", description: "SUPPORT A SMALL SCREENING CAMP" },
    { value: "10000", label: "₹10000", description: "SPONSOR A COMPREHENSIVE SCREENING CAMP" },
];

const donationAmountsNonIndian = [
    { value: "12", label: "$12", description: "SPONSOR AN ORAL CANCER SCREENING KIT" },
    { value: "30", label: "$30", description: "SUPPORT AN AWARENESS SESSION" },
    { value: "60", label: "$60", description: "SUPPORT A SMALL SCREENING CAMP" },
    { value: "120", label: "$120", description: "SPONSOR A COMPREHENSIVE SCREENING CAMP" },
];

export default function OralScanDonationForm() {
    return (
        <DonationForm
            cause="OralScan"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="1000"
            defaultNonIndianAmount="12"
            formTitle="SUPPORT ORALSCAN"
            formSubtitle="EARLY DETECTION SAVES LIVES"
        />
    );
}
