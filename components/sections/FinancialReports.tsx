
"use client";
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

const reports = [
    { name: "Annual Report 2024–25", href: "#" },
    { name: "Audited Financial Statements 2024–25", href: "#" },
    { name: "Previous Annual Reports", href: "/annual-report" },
];

const FinancialReports = () => {
  return (
    <section id="financial-reports" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">Financial Reports</h2>
            <div className="mt-6 text-lg text-muted-foreground space-y-4 text-justify">
                <p>
                    We ensure full accountability for every donation we receive. Our accounts are audited annually by a certified Chartered Accountant, and the reports are shared publicly.
                </p>
            </div>
            <div className="mt-8 bg-card p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold font-headline text-center mb-6">Financial Disclosures</h3>
                <div className="space-y-4">
                    {reports.map((report, index) => (
                        <div key={index} className="flex justify-between items-center p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                            <p className="font-medium">{report.name}</p>
                            <Button asChild variant="outline">
                                <Link href={report.href}>
                                    <Download className="mr-2 h-4 w-4" />
                                    PDF
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialReports;
