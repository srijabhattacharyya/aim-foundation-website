"use client";
import { Table, TableBody, TableCell, TableRow, TableHead, TableHeader } from '@/components/ui/table';

const impactData = [
    { metric: "Children Educated", value: "2,703" },
    { metric: "Women Screened for Health Issues", value: "800+" },
    { metric: "Volunteers Engaged", value: "150+" },
    { metric: "Districts Covered", value: "5" },
];

const ImpactAndReach = () => {
  return (
    <section id="impact-and-reach" className="py-12 md:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">Impact & Reach</h2>
            <div className="mt-8 bg-card p-8 rounded-lg shadow-md overflow-x-auto">
                <h3 className="text-2xl font-bold font-headline text-center mb-6">Our Verified Impact (2024–25)</h3>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold">Metric</TableHead>
                            <TableHead className="font-bold text-right">Reach</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {impactData.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.metric}</TableCell>
                                <TableCell className="text-right">{item.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAndReach;
