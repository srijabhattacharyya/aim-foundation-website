
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Heart, Award, FolderHeart, Cog, LineChart, Handshake, Users2 } from 'lucide-react';

const corporateBenefits = [
    {
        title: "Employee Engagement and Satisfaction",
        description: "Payroll giving boosts employee engagement and satisfaction and cultivates a sense of purpose and pride within the workplace."
    },
    {
        title: "Empathetic Work Culture",
        description: "A regular practice of giving promotes the spirit of empathy, positivity and collaboration as people come together for a larger cause."
    },
    {
        title: "Attraction and Retention of Talent",
        description: "Brands that are committed to social change and community welfare have an added advantage and are preferred by employees."
    },
    {
        title: "Tax Benefits",
        description: "Participating in payroll giving often offers tax incentives for both employers and employees while supporting charitable causes."
    }
];

const employeeBenefits = [
    {
        icon: <FolderHeart className="w-12 h-12" />,
        title: "Choose a Cause of your choice",
        description: "Employees choose to contribute to the cause that is closest to their heart from multiple causes.",
        color: "bg-orange-100 text-orange-600"
    },
    {
        icon: <Cog className="w-12 h-12" />,
        title: "Simple Donation process",
        description: "A streamlined process where the chosen amount is automatically deducted from the employee's monthly salary.",
        color: "bg-teal-100 text-teal-600"
    },
    {
        icon: <Award className="w-12 h-12" />,
        title: "Tax Benefits",
        description: "Individual employees benefit from tax deductions under Section 80G of the Income Tax Act for their contributions.",
        color: "bg-green-100 text-green-600"
    },
    {
        icon: <Heart className="w-12 h-12" />,
        title: "Volunteering",
        description: "Employees get volunteering opportunities where they can contribute their skills and experience the joy of giving firsthand.",
        color: "bg-yellow-100 text-yellow-600"
    }
];

const nonprofitBenefits = [
    { title: "Steady Funds" },
    { title: "Long-Term Sustainability" },
    { title: "Focused on Impact" },
    { title: "Partnership Opportunities" },
    { title: "Community Support" }
];


export default function PayrollGivingBenefits() {
    return (
        <>
            {/* Benefits for Corporates */}
            <section className="py-12 md:py-20 lg:py-24 bg-card">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold font-headline text-center mb-12">BENEFITS FOR CORPORATES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {corporateBenefits.map((benefit, index) => (
                            <div key={index}>
                                <div className="bg-primary text-primary-foreground font-semibold p-3 rounded-t-lg">{benefit.title}</div>
                                <div className="bg-muted p-6 rounded-b-lg text-muted-foreground h-full">
                                    <p>{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits for Employees */}
            <section className="py-12 md:py-20 lg:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold font-headline text-center mb-12">BENEFITS FOR EMPLOYEES</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {employeeBenefits.map((benefit, index) => (
                            <Card key={index} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${benefit.color.split(' ')[0]}`}>
                                <CardContent className="p-6 text-center flex flex-col items-center">
                                    <div className={`mb-4 p-4 rounded-full bg-white ${benefit.color.split(' ')[1]}`}>
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold font-headline mb-2">{benefit.title}</h3>
                                    <p className="text-sm">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits for Non-profits */}
            <section className="py-12 md:py-20 lg:py-24 bg-card">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold font-headline text-center mb-12">BENEFITS FOR NON-PROFITS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-1 space-y-4">
                            {nonprofitBenefits.map((benefit, index) => (
                                <div key={index} className="bg-primary text-primary-foreground font-semibold p-3 rounded-lg text-center">
                                    {benefit.title}
                                </div>
                            ))}
                        </div>
                        <div className="md:col-span-2 bg-green-100 text-green-800 p-8 rounded-lg">
                            <p className="text-lg">Payroll giving provides us with predictable funding that allows us plan and execute our programmes more effectively, ensuring continuous support to our beneficiaries.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
