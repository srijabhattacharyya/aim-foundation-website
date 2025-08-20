
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
  keywords: ['AIM Foundation', 'Ignite Change initiative', 'grassroots empowerment India', 'community projects NGO', 'social change programs', 'volunteer-driven initiatives India', 'seed funding NGO projects', 'social responsibility AIM Foundation', 'changemakers India', 'local heroes empowerment NGO', 'community outreach programs India'],
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
    url: 'https://aimindia.org.in/internship',
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
    "description": "Join AIM Foundation internships in India. Gain hands-on experience in health, education, empowerment & community projects. Build skills while driving change."
  };
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
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
                  Are you ready to turn your passion into purpose? At AIM Foundation, we offer impactful internship opportunities in India for students, gap-year travellers, and aspiring professionals seeking hands-on experience in the social sector.
                </p>
                <p>
                  Our internships are thoughtfully designed fixed-term programs that align with academic schedules and career goals. Whether you’re exploring a future in development or looking to apply your knowledge meaningfully, we provide a space to learn by doing.
                </p>

                <h2 className="text-3xl md:text-4xl font-bold font-headline pt-8">Internship Areas You Can Explore:</h2>
                <p>Dive into real-world projects in diverse sectors:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Health & Hygiene</strong> – Support health camps, awareness drives, and wellness outreach.</li>
                  <li><strong>Education & Child Development</strong> – Assist in teaching, mentorship, and learning materials.</li>
                  <li><strong>Women’s Empowerment</strong> – Contribute to skill-building workshops, advocacy, and training.</li>
                  <li><strong>Community Development</strong> – Work on grassroots initiatives that uplift underserved communities.</li>
                  <li><strong>Environmental Conservation</strong> – Join green projects like tree planting, waste reduction, and eco-awareness.</li>
                </ul>

                <h2 className="text-3xl md:text-4xl font-bold font-headline pt-8">Why Choose an Internship with AIM Foundation?</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Gain real-world experience in impactful social work</li>
                  <li>Collaborate with dedicated professionals and community changemakers</li>
                  <li>Receive an official Internship Certificate upon successful completion</li>
                  <li>Build essential skills in communication, leadership, and project management</li>
                  <li>Contribute directly to positive change in communities across India</li>
                </ul>
                
                <h3 className="text-2xl font-bold font-headline pt-6">More Ways to Get Involved</h3>
                <p>
                    In addition to internships, we offer volunteer opportunities and gap-year programs—perfect for anyone eager to contribute to meaningful change while learning and growing.
                </p>

                <div className="bg-card p-6 rounded-lg shadow-md mt-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Begin?</h2>
                    <p className="mt-4">
                        Before applying, please explore our <Link href="https://drive.google.com/file/d/13tx4GtpiCiCoKBEFKp2_ARW2nJbtdK2k/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Internship Orientation Handbook</Link> and review our <Link href="https://drive.google.com/file/d/1ESKWWS7Sg3e6x89PwC5uLha8lo2qgcdT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Code of Conduct for Working with Children & Young People</Link>.
                    </p>
                    <p className="mt-4 font-semibold">
                        Start your journey of purpose today!
                    </p>
                    <p className="mt-4">
                        Apply now to intern with AIM Foundation and become part of something truly transformative.
                    </p>
                     <p className="mt-4">
                        Write to: <ContactEmail />
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
