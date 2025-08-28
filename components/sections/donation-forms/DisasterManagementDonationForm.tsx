
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "2500", label: "₹2500", description: "PROVIDE AN EMERGENCY RELIEF KIT" },
    { value: "5000", label: "₹5000", description: "PROVIDE FOOD FOR A FAMILY FOR A WEEK" },
    { value: "10000", label: "₹10000", description: "SUPPORT A SMALL RELIEF CAMP" },
    { value: "25000", label: "₹25000", description: "SUPPORT A COMPREHENSIVE RELIEF CAMP" },
];

const donationAmountsNonIndian = [
    { value: "30", label: "$30", description: "PROVIDE AN EMERGENCY RELIEF KIT" },
    { value: "60", label: "$60", description: "PROVIDE FOOD FOR A FAMILY FOR A WEEK" },
    { value: "120", label: "$120", description: "SUPPORT A SMALL RELIEF CAMP" },
    { value: "300", label: "$300", description: "SUPPORT A COMPREHENSIVE RELIEF CAMP" },
];

export default function DisasterManagementDonationForm() {
    return (
        <DonationForm
            cause="Disaster Management"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="2500"
            defaultNonIndianAmount="30"
            formTitle="SUPPORT DISASTER RELIEF"
            formSubtitle="PROVIDE URGENT AID"
        />
    );
}
