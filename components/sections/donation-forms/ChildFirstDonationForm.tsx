
'use client';
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "2500", label: "₹2500", description: "HEALTH & NUTRITION FOR ONE CHILD" },
    { value: "5000", label: "₹5000", description: "HEALTH & NUTRITION FOR TWO CHILDREN" },
    { value: "10000", label: "₹10000", description: "HEALTH & NUTRITION FOR FOUR CHILDREN" },
    { value: "20000", label: "₹20000", description: "SPONSOR A HEALTH CAMP FOR CHILDREN (EXCLUDING MEDICINE)" },
];

const donationAmountsNonIndian = [
    { value: "30", label: "$30", description: "HEALTH & NUTRITION FOR ONE CHILD" },
    { value: "60", label: "$60", description: "HEALTH & NUTRITION FOR TWO CHILDREN" },
    { value: "120", label: "$120", description: "HEALTH & NUTRITION FOR FOUR CHILDREN" },
    { value: "240", label: "$240", description: "SPONSOR A HEALTH CAMP FOR CHILDREN (EXCLUDING MEDICINE)" },
];

export default function ChildFirstDonationForm() {
    return (
        <DonationForm
            cause="ChildFirst"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="2500"
            defaultNonIndianAmount="30"
            formTitle="SUPPORT CHILDFIRST"
            formSubtitle="MAKE A DIFFERENCE"
        />
    );
}
