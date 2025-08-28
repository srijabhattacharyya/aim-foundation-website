
'use client';
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "1000", label: "₹1000", description: "Support our ongoing projects." },
    { value: "2500", label: "₹2500", description: "Help us reach more communities." },
    { value: "5000", label: "₹5000", description: "Contribute to a major initiative." },
    { value: "10000", label: "₹10000", description: "Sponsor a full program activity." },
];

const donationAmountsNonIndian = [
    { value: "12", label: "$12", description: "Support our ongoing projects." },
    { value: "30", label: "$30", description: "Help us reach more communities." },
    { value: "60", label: "$60", description: "Contribute to a major initiative." },
    { value: "120", label: "$120", description: "Sponsor a full program activity." },
];

export default function IndividualDonationForm() {
    return (
        <DonationForm
            cause="Individual Donation"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="2500"
            defaultNonIndianAmount="30"
            formTitle="SUPPORT OUR MISSION"
            formSubtitle="YOUR CONTRIBUTION MATTERS"
        />
    );
}
