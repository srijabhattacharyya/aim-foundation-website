
import { HandHeart, Megaphone, Laptop } from "lucide-react";
import Link from "next/link";

const engagementWays = [
    {
        icon: <Laptop className="w-12 h-12 text-primary" />,
        label: "Physical and Virtual Activities",
        link: null
    },
    {
        icon: <Megaphone className="w-12 h-12 text-primary" />,
        label: "Digital Donation Drives",
        link: null
    },
    {
        icon: <HandHeart className="w-12 h-12 text-primary" />,
        label: "Payroll Giving",
        link: "/payroll-giving"
    },
];

export default function WaysOfEngagement() {
    return (
        <section className="bg-primary/90">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <h2 className="text-3xl font-bold text-center text-primary-foreground mb-10 tracking-wider">
                    WAYS OF ENGAGEMENT
                </h2>
                <div className="relative flex justify-center items-center">
                    <div className="absolute w-full h-1 bg-white/50 top-1/2 -translate-y-1/2"></div>
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
                        {engagementWays.map((way, index) => {
                            const content = (
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="bg-card rounded-full p-8 w-40 h-40 flex items-center justify-center shadow-lg border-4 border-primary/90">
                                        {way.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-primary-foreground mt-4">{way.label}</h3>
                                </div>
                            );

                            if (way.link) {
                                return (
                                    <Link key={index} href={way.link} className="block">
                                        {content}
                                    </Link>
                                );
                            }

                            return <div key={index}>{content}</div>;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
