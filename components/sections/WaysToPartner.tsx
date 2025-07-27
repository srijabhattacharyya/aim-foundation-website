
"use client"

import { Target, Smartphone, Receipt, Star, Award } from 'lucide-react';
import React from 'react';

const PartProceedsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-percent">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.78L8.62 3.85a4 4 0 0 1 4.78 4.78l0 0a4 4 0 0 1-4.78 4.78L8.62 13.4a4 4 0 0 1-4.78-4.78Z"/>
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
        <path d="m15 9-6 6"/>
    </svg>
);


const partnerWays = [
    { icon: <PartProceedsIcon />, label: "Part Proceeds" },
    { icon: <Target className="w-12 h-12" />, label: "Purpose Marketing" },
    { icon: <Smartphone className="w-12 h-12" />, label: "In-App Donations" },
    { icon: <Receipt className="w-12 h-12" />, label: "Point-of-Sale Campaigns" },
    { icon: <Star className="w-12 h-12" />, label: "Redeem Points" },
    { icon: <Award className="w-12 h-12" />, label: "Event Sponsorship" },
];

export default function WaysToPartner() {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">WAYS TO PARTNER</h2>
                </div>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-2 bg-primary/70 transform -translate-y-1/2"></div>
                    <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                        {partnerWays.map((way, index) => (
                            <div key={index} className="flex flex-col items-center text-center space-y-2">
                                <div className="bg-card border-4 border-primary/70 rounded-full p-6 w-32 h-32 flex items-center justify-center text-primary shadow-lg">
                                    {way.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">{way.label}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
