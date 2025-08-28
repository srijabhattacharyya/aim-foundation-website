
'use client';
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "2500", label: "₹2500", description: "SUPPORT A WORKSHOP FOR 5 CHILDREN" },
    { value: "5000", label: "₹5000", description: "SUPPORT A WORKSHOP FOR 10 CHILDREN" },
    { value: "10000", label: "₹10000", description: "SPONSOR LEARNING MATERIALS" },
    { value: "20000", label: "₹20000", description: "SPONSOR A FULL MILIEU SESSION" },
];

const donationAmountsNonIndian = [
    { value: "30", label: "$30", description: "SUPPORT A WORKSHOP FOR 5 CHILDREN" },
    { value: "60", label: "$60", description: "SUPPORT A WORKSHOP FOR 10 CHILDREN" },
    { value: "120", label: "$120", description: "SPONSOR LEARNING MATERIALS" },
    { value: "240", label: "$240", description: "SPONSOR A FULL MILIEU SESSION" },
];

export default function MilieuDonationForm() {
    return (
        <DonationForm
            cause="Milieu"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="2500"
            defaultNonIndianAmount="30"
            formTitle="SUPPORT MILIEU"
            formSubtitle="BUILDING BRIDGES, NURTURING EMPATHY"
        />
    );
}
