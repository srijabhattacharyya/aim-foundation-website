
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Annual Reports - AIM Foundation',
  description: 'Explore AIM Foundation’s annual reports to see our financial transparency, program impact, and journey of change in education, healthcare, and community development.',
  keywords: [
    'AIM Foundation annual reports', 'NGO financial reports India', 'AIM Foundation impact report',
    'charity transparency reports', 'nonprofit annual reports Kolkata', 'AIM Foundation program outcomes',
    'NGO accountability reports India'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/annual-report',
    title: 'Annual Reports - AIM Foundation',
    description: 'Explore AIM Foundation’s annual reports to see our financial transparency, program impact, and journey of change in education, healthcare, and community development.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Annual Reports',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Annual Reports - AIM Foundation',
    description: 'Explore AIM Foundation’s annual reports to see our financial transparency, program impact, and journey of change in education, healthcare, and community development.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/annual-report',
  },
};

const reports = [
  {
    year: '2025',
    image: '/images/annual-report/annual-report-2025.avif',
    hint: 'annual report, 2025',
    link: '#', 
  },
  {
    year: '2024',
    image: '/images/annual-report/annual-report-2024.avif',
    hint: 'annual report, 2024',
    link: '#',
  },
  {
    year: '2023',
    image: '/images/annual-report/annual-report-2023.avif',
    hint: 'annual report, 2023',
    link: '#',
  },
];

export default function AnnualReportPage() {
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
    "description": "Explore AIM Foundation’s annual reports to see our financial transparency, program impact, and journey of change in education, healthcare, and community development."
  };
  
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-annual-report"
      />
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Annual Reports</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our journey of impact, transparency, and accountability through our annual reports.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {reports.map((report) => (
                <Card key={report.year} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <CardHeader className="p-0">
                    <Image
                      src={report.image}
                      alt={`Annual Report ${report.year}`}
                      width={400}
                      height={600}
                      data-ai-hint={report.hint}
                      className="w-full h-auto object-cover aspect-[2/3]"
                    />
                  </CardHeader>
                  <CardContent className="p-6 text-center flex-grow">
                    <CardTitle className="font-headline text-2xl">Annual Report {report.year}</CardTitle>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full transition-transform transform hover:scale-105">
                      <Link href={report.link} target="_blank" rel="noopener noreferrer">View Report</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}
