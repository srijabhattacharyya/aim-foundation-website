
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "3000", label: "₹3000", description: "DIGITAL TOOLS FOR 1 CLASSROOM FOR 3 MONTHS" },
    { value: "6000", label: "₹6000", description: "DIGITAL TOOLS FOR 1 CLASSROOM FOR 6 MONTHS" },
    { value: "12000", label: "₹12000", description: "DIGITAL TOOLS FOR 1 CLASSROOM FOR A YEAR" },
    { value: "100000", label: "₹100000", description: "SPONSOR A FULL EDULAB SETUP" },
];

const donationAmountsNonIndian = [
    { value: "35", label: "$35", description: "DIGITAL TOOLS FOR 1 CLASSROOM FOR 3 MONTHS" },
    { value: "70", label: "$70", description: "DIGITAL TOOLS FOR 1 CLASSROOM FOR 6 MONTHS" },
    { value: "140", label: "$140", description: "DIGITAL TOOLS FOR 1 CLASSROOM FOR A YEAR" },
    { value: "1200", label: "$1200", description: "SPONSOR A FULL EDULAB SETUP" },
];

export default function InspireEduLabDonationForm() {
    return (
        <DonationForm
            cause="Inspire EduLab"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="3000"
            defaultNonIndianAmount="35"
            formTitle="SUPPORT INSPIRE EDULAB"
            formSubtitle="MAKE A DIFFERENCE"
        />
    );
}
