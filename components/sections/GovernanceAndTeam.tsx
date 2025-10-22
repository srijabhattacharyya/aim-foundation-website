'use client';

import { Button } from "@/components/ui/button";
import Link from 'next/link';

const GovernanceAndTeam = () => {
  const trustees = [
    "Prof. Amitabha Mookherjee",
    "Mr. Chandan Roy",
    "Mr. Saibal Ganguly",
    "CA Banasri Bhattacharyya",
  ];

  return (
    <section id="governance-and-team" className="py-12 md:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">Governance and Team</h2>
          <div className="mt-6 text-lg text-muted-foreground space-y-4 text-justify">
            <p>
              AIM Foundation is governed by an independent and voluntary Board of Trustees who provide strategic direction and ensure responsible management of funds and programs.
            </p>
          </div>

          <div className="mt-8 bg-card p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold font-headline mb-4">Board of Trustees</h3>
            <ul className="list-disc list-inside space-y-2 pl-4 text-muted-foreground">
              {trustees.map((trustee, index) => (
                <li key={index}>{trustee}</li>
              ))}
            </ul>
            <p className="text-sm italic text-muted-foreground mt-4">
              “Our trustees serve voluntarily and receive no financial remuneration for their services.”
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold font-headline mb-4">Management Committee</h3>
            <div className="text-lg text-muted-foreground space-y-4 text-justify">
                <p>
                    The Management Committee is responsible for the day-to-day functioning, implementation of projects, monitoring, and reporting. This team translates the Board’s vision into actionable community programs across AIM Foundation’s focus areas — Education, Health, and Livelihood.
                </p>
                <Button asChild variant="link" className="p-0 text-lg">
                    <Link href="/team">View our Management Committee &rarr;</Link>
                </Button>
            </div>
          </div>
            
          <div className="mt-12">
            <h3 className="text-2xl font-bold font-headline mb-4">Our Leadership Philosophy</h3>
            <div className="text-lg text-muted-foreground space-y-4 text-justify">
                <p>
                    We believe in participatory governance — where the Board of Trustees ensures accountability, and the Management Committee ensures effective execution of every program.
                </p>
                <p>
                    Together, they uphold AIM Foundation’s values of <strong>Integrity</strong>, <strong>Empathy</strong>, and <strong>Impact</strong>.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GovernanceAndTeam;
