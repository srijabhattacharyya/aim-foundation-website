
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Ethos from "@/components/sections/Ethos";
import LegalRecognitions from "@/components/sections/LegalRecognitions";
import FinancialReports from "@/components/sections/FinancialReports";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import TrusteeEmail from '@/components/layout/TrusteeEmail';
import GovernanceAndTeam from '@/components/sections/GovernanceAndTeam';
import ImpactAndReach from '@/components/sections/ImpactAndReach';

export const metadata: Metadata = {
    title: 'Our Profile & Transparency | AIM Foundation',
    description: 'Explore AIM Foundation’s profile, including our mission, legal recognitions, and commitment to transparency and accountability in all our initiatives.',
    keywords: ['AIM Foundation profile', 'NGO transparency', 'AIM Foundation legal status', 'NGO mission and vision', 'charity accountability'],
    authors: [{ name: 'AIM Foundation' }],
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        url: 'https://aimindia.org.in/profile',
        title: 'Our Profile & Transparency | AIM Foundation',
        description: 'Explore AIM Foundation’s profile, including our mission, legal recognitions, and commitment to transparency.',
        images: [
            {
                url: 'https://aimindia.org.in/home.avif',
                width: 1200,
                height: 630,
                alt: 'AIM Foundation Profile',
            },
        ],
        siteName: 'AIM Foundation',
        locale: 'en_IN',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@aimindiango',
        title: 'Our Profile & Transparency | AIM Foundation',
        description: 'Explore AIM Foundation’s profile, including our mission, legal recognitions, and commitment to transparency.',
        images: ['https://aimindia.org.in/home.avif'],
    },
    alternates: {
        canonical: '/profile',
    },
};

export default function ProfilePage() {
    const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://www.aimindia.org.in/",
    "logo": "https://www.aimindia.org.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    "description": "Explore AIM Foundation’s profile, including our mission, legal recognitions, and commitment to transparency and accountability in all our initiatives."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-profile"
      />
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <section className="py-12 md:py-20 lg:py-24 bg-muted">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Profile & Transparency</h1>
                            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                                We are committed to upholding the highest standards of accountability and openness in all our work.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-20 lg:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Commitment to Transparency</h2>
                        <div className="mt-6 text-lg text-muted-foreground space-y-4 text-justify">
                            <p>
                                AIM Foundation believes that true impact begins with honesty and openness. We are committed to maintaining 100% transparency in our governance, finances, and operations so that every donor, partner, and volunteer can trust that their contribution directly supports our mission to build a better tomorrow.
                            </p>
                        </div>
                    </div>
                </section>
                <Ethos />
                <LegalRecognitions />
                <FinancialReports />
                <ImpactAndReach />
                <GovernanceAndTeam />

                <section className="py-12 md:py-20 lg:py-24 bg-card">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                         <h2 className="text-3xl md:text-4xl font-bold font-headline">Policies and Guidelines</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                           Our governance is guided by a comprehensive set of policies that ensure ethical conduct, accountability, and the safeguarding of all stakeholders.
                        </p>
                        <Button asChild size="lg" className="mt-8">
                            <Link href="/policies">View Policies</Link>
                        </Button>
                        <p className="mt-4 text-sm text-muted-foreground">
                            For internal policies all stakeholders are requested to contact <TrusteeEmail />.
                        </p>
                    </div>
                </section>
                
                <section className="py-12 md:py-20 lg:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">CSR and Partner Disclosures</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                           AIM Foundation collaborates with corporates, institutions, and individuals under CSR and partnership programs.
                        </p>
                        <Button asChild size="lg" className="mt-8">
                            <Link href="/#patrons">View Our Partners</Link>
                        </Button>
                    </div>
                </section>

                 <section className="py-12 md:py-20 lg:py-24 bg-card">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Verified &amp; Trusted By</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            AIM Foundation’s work is verified by leading third-party organizations, ensuring transparency, credibility, and accountability in all our programs.
                        </p>
                        <ul className="mt-6 text-lg text-muted-foreground list-disc list-inside inline-block text-left">
                            <li>Goodstack</li>
                            <li>Give.do</li>
                            <li>GuideStar</li>
                        </ul>
                        <p className="mt-4 text-muted-foreground">AIM Foundation is a <strong>Google for Non-Profit</strong> affiliated organisation.</p>
                    </div>
                </section>

                <section className="py-12 md:py-20 lg:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                         <h2 className="text-3xl md:text-4xl font-bold font-headline">Contact for Queries</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                           For any questions regarding financial or legal transparency, please contact:
                        </p>
                        <p className="mt-4"><TrusteeEmail /></p>
                    </div>
                </section>

                <section className="py-12 md:py-20 lg:py-24 bg-muted">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Declaration</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto italic">
                           AIM Foundation certifies that all information presented on this page is true and verified by our independent auditors. The organization abides by all statutory requirements under Indian NGO law and CSR guidelines.
                        </p>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    </>
  );
}
