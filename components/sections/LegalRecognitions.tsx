
"use client";
import { Table, TableBody, TableCell, TableRow, TableHead, TableHeader } from '@/components/ui/table';
import TrusteeEmail from '../layout/TrusteeEmail';

const recognitions = [
    { particular: "Legal Name", detail: "Associated Initiative for Mankind Foundation" },
    { particular: "Short Name", detail: "AIM Foundation" },
    { particular: "Registered Under", detail: "The Indian Trusts Act, 1882" },
    { particular: "PAN", detail: "AAFTA1983P" },
    { particular: "Registered with the Income Tax Department u/s 12A", detail: "AAFTA1983PE20211" },
    { particular: "Registered with the Income Tax Department u/s 80G", detail: "AAFTA1983PF20221" },
    { particular: "Registered with the NITI Aayog", detail: "W-00135/2016" },
    { particular: "Registered with Ministry of Corporate Affairs (CSR 1)", detail: "CSR00008879" },
    { particular: "Registered in Foreign Contribution Regulation Act (FCRA)", detail: "147121133" },
    { particular: "Registered Address", detail: "41, Ballygaunge Terrace, Kolkata 700029, India" },
    { particular: "Head Office", detail: "Sarala Punyashram, 91/34, Bosepukur Road, Kolkata 700042" },
    { particular: "Email", detail: "info@aimindia.org.in" },
];

const LegalRecognitions = () => {
  return (
    <section id="legal-recognitions" className="py-12 md:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">Legal & Regulatory Information</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-center">
                Associated Initiative for Mankind Foundation is a Public Charitable Trust.
            </p>
            <div className="mt-8 bg-card p-8 rounded-lg shadow-md overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold w-1/3">Particulars</TableHead>
                            <TableHead className="font-bold">Details</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recognitions.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.particular}</TableCell>
                                <TableCell>{item.detail}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                 <p className="text-sm italic text-muted-foreground mt-4 text-center">
                    Stakeholders can obtain copies of the original documents by writing to <TrusteeEmail />.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LegalRecognitions;
