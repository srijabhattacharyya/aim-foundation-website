
'use client';
import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "2500", label: "₹2500", description: "SUPPORT A VOCATIONAL TRAINING WORKSHOP" },
    { value: "5000", label: "₹5000", description: "PROVIDE DIGITAL LITERACY FOR 2 WOMEN" },
    { value: "10000", label: "₹10000", description: "SUPPORT A WOMEN'S HEALTH CAMP" },
    { value: "25000", label: "₹25000", description: "SPONSOR A SELF-HELP GROUP" },
];

const donationAmountsNonIndian = [
    { value: "30", label: "$30", description: "SUPPORT A VOCATIONAL TRAINING WORKSHOP" },
    { value: "60", label: "$60", description: "PROVIDE DIGITAL LITERACY FOR 2 WOMEN" },
    { value: "120", label: "$120", description: "SUPPORT A WOMEN'S HEALTH CAMP" },
    { value: "300", label: "$300", description: "SPONSOR A SELF-HELP GROUP" },
];

export default function GenderEqualityDonationForm() {
    return (
        <DonationForm
            cause="Gender Equality"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="2500"
            defaultNonIndianAmount="30"
            formTitle="SUPPORT GENDER EQUALITY"
            formSubtitle="MAKE A DIFFERENCE"
        />
    );
}
