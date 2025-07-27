
import { HeartHandshake, Building2, UserCheck, Target } from "lucide-react";

const stats = [
    {
        icon: <Target className="w-10 h-10 text-primary" />,
        text: "Companies with engaged employees outperform those without by up to 20%",
        source: "Gallup Employee Engagement Survey",
    },
    {
        icon: <UserCheck className="w-10 h-10 text-primary" />,
        text: "88% of employers believe that effective employee engagement programs help attract and retain employees",
        source: "America's Charities Snapshot Employer Research",
    },
    {
        icon: <HeartHandshake className="w-10 h-10 text-primary" />,
        text: "58% of employees consider a company's social and environmental commitments while deciding where to work",
        source: "The Cone Communications Employee Engagement Study",
    },
    {
        icon: <Building2 className="w-10 h-10 text-primary" />,
        text: "55% employees would choose to work for a socially responsible company even if the salary isn't as per their expectation",
        source: "Source not specified",
    },
];

export default function EngagementStats() {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                {stat.icon}
                            </div>
                            <p className="text-muted-foreground text-base mb-2">{stat.text}</p>
                            <p className="text-xs text-muted-foreground/80 italic">(Source: {stat.source})</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
