import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import ContactEmail from "@/components/layout/ContactEmail";
import { Button } from "@/components/ui/button";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIM Foundation Internships in India: Purposeful Impact',
  description: 'Join AIM Foundation internships in India. Gain hands-on experience in health, education, empowerment & community projects. Build skills while driving change.',
  keywords: [
    'AIM Foundation', 'Ignite Change initiative', 'grassroots empowerment India', 
    'community projects NGO', 'social change programs', 'volunteer-driven initiatives India', 
    'seed funding NGO projects', 'social responsibility AIM Foundation', 
    'changemakers India', 'local heroes empowerment NGO', 'community outreach programs India'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/internship',
    title: 'AIM Foundation Internships in India: Purposeful Impact',
    description: 'Join AIM Foundation internships in India. Gain hands-on experience in health, education, empowerment & community projects. Build skills while driving change.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Internships',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'AIM Foundation Internships in India: Purposeful Impact',
    description: 'Join AIM Foundation internships in India. Gain hands-on experience in health, education, empowerment & community projects. Build skills while driving change.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/internship',
  },
};

export default function InternshipPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AIM Foundation",
    url: "https://www.aimindia.org.in/",
    logo: "https://www.aimindia.org.in/logo.png",
    sameAs: [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    description: "Join AIM Foundation internships in India. Gain hands-on experience in health, education, empowerment & community projects. Build skills while driving change."
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-internship"
      />
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/intern.avif"
              alt="Internship banner"
              width={1920}
              height={334}
              className="w-full h-auto object-cover"
              data-ai-hint="interns working"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Internship at AIM Foundation
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Learn. Contribute. Grow. Make a Difference.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6 text-lg text-muted-foreground text-justify">
                        <p>
                            Are you a student or recent graduate eager to apply your skills to real-world challenges? Join AIM Foundation’s internship program and gain hands-on experience in the social sector. Our internships offer a unique opportunity to contribute to meaningful projects while developing professional skills and a deep understanding of grassroots development.
                        </p>
                        
                        <h2 className="text-3xl md:text-4xl font-bold font-headline pt-8">Internship Areas</h2>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li><Link href="/healthcare-initiatives" className="text-primary hover:underline">Healthcare</Link>: Assist in organizing health camps and awareness drives.</li>
                            <li><Link href="/educational-initiatives" className="text-primary hover:underline">Education</Link>: Support our learning centers and educational programs.</li>
                            <li><Link href="/sustainability-initiatives" className="text-primary hover:underline">Environment</Link>: Participate in conservation and sustainability projects.</li>
                            <li><Link href="/gender-equality-initiative" className="text-primary hover:underline">Women Empowerment</Link>: Contribute to skill-building and livelihood initiatives.</li>
                            <li><strong>Community Engagement</strong>: Help with outreach, surveys, and mobilization.</li>
                        </ul>

                        <h2 className="text-3xl md:text-4xl font-bold font-headline pt-8">Benefits of Interning with Us</h2>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>Gain practical experience in a professional NGO environment.</li>
                            <li>Develop skills in project management, communication, and teamwork.</li>
                            <li>Receive mentorship from experienced professionals.</li>
                            <li>Contribute to meaningful social change.</li>
                            <li>Receive a certificate upon successful completion.</li>
                        </ul>

                        <div className="bg-card p-6 rounded-lg shadow-md mt-10 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Join?</h2>
                            <p className="mt-4">
                                Before applying, please explore our <Link href="/internship-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Internship Policy</Link> and review our <Link href="/code-of-conduct" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Code of Conduct</Link>.
                            </p>
                            <p className="mt-4 font-semibold">
                                To apply, send your resume and a cover letter to: <ContactEmail />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
