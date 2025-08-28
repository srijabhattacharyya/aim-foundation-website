
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "2500", label: "₹2500", description: "SUPPORT A WOMAN'S ENTREPRENEURIAL JOURNEY" },
    { value: "5000", label: "₹5000", description: "PROVIDE RAW MATERIALS FOR A SMALL BATCH" },
    { value: "10000", label: "₹10000", description: "HELP WITH MARKETING & PACKAGING" },
    { value: "20000", label: "₹20000", description: "SPONSOR A NEW PRODUCTION SETUP" },
];

const donationAmountsNonIndian = [
    { value: "30", label: "$30", description: "SUPPORT A WOMAN'S ENTREPRENEURIAL JOURNEY" },
    { value: "60", label: "$60", description: "PROVIDE RAW MATERIALS FOR A SMALL BATCH" },
    { value: "120", label: "$120", description: "HELP WITH MARKETING & PACKAGING" },
    { value: "240", label: "$240", description: "SPONSOR A NEW PRODUCTION SETUP" },
];

export default function KrishtiDonationForm() {
    return (
        <DonationForm
            cause="Krishti"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="2500"
            defaultNonIndianAmount="30"
            formTitle="SUPPORT KRISHTI"
            formSubtitle="FROM SKILL TO SELF-RELIANCE"
        />
    );
}
