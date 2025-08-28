
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "1500", label: "₹1500", description: "SPONSOR SCREENING FOR 1 WOMAN" },
    { value: "3000", label: "₹3000", description: "SPONSOR SCREENING FOR 2 WOMEN" },
    { value: "7500", label: "₹7500", description: "SPONSOR SCREENING FOR 5 WOMEN" },
    { value: "30000", label: "₹30000", description: "SPONSOR AN AWARENESS CAMP" },
];

const donationAmountsNonIndian = [
    { value: "18", label: "$18", description: "SPONSOR SCREENING FOR 1 WOMAN" },
    { value: "36", label: "$36", description: "SPONSOR SCREENING FOR 2 WOMEN" },
    { value: "90", label: "$90", description: "SPONSOR SCREENING FOR 5 WOMEN" },
    { value: "360", label: "$360", description: "SPONSOR AN AWARENESS CAMP" },
];

export default function DetectDonationForm() {
    return (
        <DonationForm
            cause="Detect"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="1500"
            defaultNonIndianAmount="18"
            formTitle="SUPPORT DETECT"
            formSubtitle="MAKE A DIFFERENCE"
        />
    );
}
