
import { FileText, Users, BarChart, FileBarChart, Presentation, FileCheck2, Recycle, Building } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';

export const reportTypes = [
    {
        title: "Impact Dashboards & Reports",
        description: "Data-rich dashboards showcasing trends, performance, and effectiveness in impact measurement. Ideal for tracking outcomes and highlighting success stories.",
        icon: <BarChart className="w-8 h-8" />,
        color: "bg-blue-100 text-blue-800",
        iconBg: "bg-blue-200"
    },
    {
        title: "Community Impact Reports",
        description: "Reports that reflect progress, measure outcomes, and highlight positive social change within communities.",
        icon: <Users className="w-8 h-8" />,
        color: "bg-green-100 text-green-800",
        iconBg: "bg-green-200"
    },
    {
        title: "Project Reports",
        description: "Structured reports presenting achievements, milestones, learnings, and outcomes to support internal review or external communication.",
        icon: <FileText className="w-8 h-8" />,
        color: "bg-yellow-100 text-yellow-800",
        iconBg: "bg-yellow-200"
    },
    {
        title: "Project Proposals",
        description: "Clear, persuasive proposals outlining objectives, methodology, timelines, and expected impact—designed to secure CSR or donor support.",
        icon: <FileBarChart className="w-8 h-8" />,
        color: "bg-purple-100 text-purple-800",
        iconBg: "bg-purple-200"
    },
    {
        title: "Impact Decks",
        description: "Visually engaging presentations that communicate key results, insights, and strategic learnings to boards, donors, and partners.",
        icon: <Presentation className="w-8 h-8" />,
        color: "bg-red-100 text-red-800",
        iconBg: "bg-red-200"
    },
    {
        title: "Annual CSR Reports",
        description: "Comprehensive year-end CSR reports covering policy, expenditure, outcomes, and governance, in line with statutory requirements.",
        icon: <FileCheck2 className="w-8 h-8" />,
        color: "bg-indigo-100 text-indigo-800",
        iconBg: "bg-indigo-200"
    },
    {
        title: "CSR Impact Assessment Reports",
        description: "In-depth evaluations measuring social and environmental outcomes of specific CSR or development interventions.",
        icon: <Recycle className="w-8 h-8" />,
        color: "bg-pink-100 text-pink-800",
        iconBg: "bg-pink-200",
        link: "/impact-assessment-services"
    },
    {
        title: "Bespoke CSR & Impact Reporting",
        description: "Custom-designed reports combining multiple formats to address unique organisational goals and stakeholder expectations.",
        icon: <Building className="w-8 h-8" />,
        color: "bg-gray-100 text-gray-800",
        iconBg: "bg-gray-200"
    },
];
