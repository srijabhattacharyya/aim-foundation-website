
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import TrusteeEmail from "@/components/layout/TrusteeEmail";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CSR with AIM Foundation | Corporate Social Responsibility India',
  description: 'Partner with AIM Foundation for impactful CSR initiatives in India. Build brand trust, support communities, and align with SDGs through sustainable projects.',
  keywords: [
    'CSR AIM Foundation', 'corporate social responsibility AIM Foundation', 'AIM Foundation CSR partner',
    'NGO CSR projects India', 'AIM Foundation corporate partnership', 'CSR collaboration Kolkata',
    'CSR NGO India', 'CSR in education AIM Foundation', 'CSR in healthcare NGO', 
    'women empowerment CSR AIM Foundation', 'environment CSR projects India', 'CSR compliance AIM Foundation',
    'SDG partnership AIM Foundation'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/corporate-social-responsibility',
    title: 'CSR with AIM Foundation | Corporate Social Responsibility India',
    description: 'Partner with AIM Foundation for impactful CSR initiatives in India. Build brand trust, support communities, and align with SDGs through sustainable projects.',
    images: [
      { url: 'https://aimindia.org.in/home.avif', width: 1200, height: 630, alt: 'CSR at AIM Foundation' }
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'CSR with AIM Foundation | Corporate Social Responsibility India',
    description: 'Partner with AIM Foundation for impactful CSR initiatives in India. Build brand trust, support communities, and align with SDGs through sustainable projects.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/corporate-social-responsibility',
  },
};

export default function CorporateSocialResponsibilityPage() {
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
    "description": "Partner with AIM Foundation for impactful CSR initiatives in India. Build brand trust, support communities, and align with SDGs through sustainable projects."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-csr"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {/* Banner Section */}
          <section className="relative w-full">
            <div className="relative w-full">
              <Image
                src="/images/banner/csr.avif"
                alt="Corporate Social Responsibility"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="corporate meeting handshake"
              />
            </div>
            <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
              <div className="relative z-10 text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Corporate Social Responsibility
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Building Sustainable Impact, Together.
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-12 md:py-20 lg:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground text-justify">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">CSR with AIM Foundation</h2>
                <p>In today’s evolving business landscape, a strong commitment to social responsibility is a hallmark of respected and resilient brands. Companies across the globe are now aligning their operations with sustainable development goals, recognizing that true success includes social, environmental, and ethical impact.</p>
                <p>At AIM Foundation, we partner with visionary businesses to co-create CSR programs that deliver real change at the grassroots level—while enhancing brand trust and stakeholder value.</p>

                <h3 className="text-2xl font-bold font-headline pt-6">Why CSR Matters More Than Ever</h3>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Strengthen brand reputation</li>
                  <li>Deepen <Link href="/employee-engagement" className="text-primary hover:underline">employee engagement</Link></li>
                  <li>Build lasting community relationships</li>
                  <li>Contribute meaningfully to India’s development</li>
                </ul>

                <h3 className="text-2xl font-bold font-headline pt-6">Partnering for Purpose</h3>
                <p>We work with businesses of all sizes to design, implement, and monitor CSR projects that align with your brand values and compliance requirements.</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><Link href="/educational-initiatives" className="text-primary hover:underline">Education & Child Development</Link></li>
                  <li><Link href="/healthcare-initiatives" className="text-primary hover:underline">Healthcare & Hygiene</Link></li>
                  <li><Link href="/gender-equality-initiative" className="text-primary hover:underline">Women Empowerment & Livelihoods</Link></li>
                  <li><Link href="/sustainability-initiatives" className="text-primary hover:underline">Environmental Sustainability</Link></li>
                  <li><Link href="/disaster-management" className="text-primary hover:underline">Disaster Relief & Resilience</Link></li>
                </ul>

                <h3 className="text-2xl font-bold font-headline pt-6">What You Can Expect</h3>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Grassroots Expertise with Proven Impact</li>
                  <li>Full CSR Compliance & Custom Reporting</li>
                  <li>Measurable Outcomes & Community Feedback</li>
                  <li>Joint Branding & Visibility</li>
                  <li>Alignment with SDGs and ESG Priorities</li>
                </ul>

                <div className="bg-card p-6 rounded-lg shadow-md mt-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Let’s Create Change—Together</h2>
                  <p className="mt-4">Start your CSR journey with AIM Foundation.</p>
                  <p className="mt-4">Get in touch at: <TrusteeEmail /></p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
