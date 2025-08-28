
"use client";

import DonationForm from "./DonationForm";

const donationAmountsIndian = [
    { value: "2500", label: "₹2500", description: "SUPPORT A CHILD'S NUTRITION FOR A MONTH" },
    { value: "5000", label: "₹5000", description: "PROVIDE EDUCATIONAL MATERIALS FOR 5 CHILDREN" },
    { value: "10000", label: "₹10000", description: "SUPPORT A DAYCARE CENTER FOR A WEEK" },
    { value: "25000", label: "₹25000", description: "SPONSOR A CHILD'S COMPLETE CARE FOR 3 MONTHS" },
];

const donationAmountsNonIndian = [
    { value: "30", label: "$30", description: "SUPPORT A CHILD'S NUTRITION FOR A MONTH" },
    { value: "60", label: "$60", description: "PROVIDE EDUCATIONAL MATERIALS FOR 5 CHILDREN" },
    { value: "120", label: "$120", description: "SUPPORT A DAYCARE CENTER FOR A WEEK" },
    { value: "300", label: "$300", description: "SPONSOR A CHILD'S COMPLETE CARE FOR 3 MONTHS" },
];

export default function ChildcareDonationForm() {
    return (
        <DonationForm
            cause="Childcare"
            donationAmountsIndian={donationAmountsIndian}
            donationAmountsNonIndian={donationAmountsNonIndian}
            defaultIndianAmount="2500"
            defaultNonIndianAmount="30"
            formTitle="SUPPORT CHILDCARE INITIATIVES"
            formSubtitle="MAKE A DIFFERENCE"
        />
    );
}
