
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrusteeEmail from "@/components/layout/TrusteeEmail";

export const metadata: Metadata = {
  title: 'Transparency Policy | AIM Foundation',
  description: 'Our Transparency Policy details our commitment to financial accountability, programmatic openness, ethical governance, and donor communication to build trust and ensure impact.',
  keywords: [
    'AIM Foundation transparency',
    'NGO accountability',
    'financial transparency NGO',
    'ethical governance non-profit',
    'donor communication policy'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/transparency-policy',
    title: 'Transparency Policy | AIM Foundation',
    description: 'Our commitment to financial accountability, programmatic openness, and ethical governance.',
    images: [
      {
        url: 'https://aimindia.org.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Logo',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Transparency Policy | AIM Foundation',
    description: 'Our commitment to financial accountability, programmatic openness, and ethical governance.',
    images: ['https://aimindia.org.in/logo.png'],
  },
  alternates: {
    canonical: '/transparency-policy',
  },
};


export default function TransparencyPolicyPage() {
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
    "description": "Our Transparency Policy outlines our commitment to accountability, ethical practices, and open communication."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-transparency"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
                Transparency Policy
              </h1>
              <div className="space-y-6 text-muted-foreground text-justify">
                <p>
                  At Associated Initiative for Mankind Foundation (hereinafter referred to as "AIM Foundation"), we believe that transparency is fundamental to building trust with our stakeholders — including donors, partners, beneficiaries, volunteers, and the general public. We are committed to conducting all our operations with honesty, openness, and accountability.
                </p>
                <p>
                  This Transparency Policy outlines the principles and practices we follow to ensure our work is open, ethical, and verifiable.
                </p>

                <h2 className="text-2xl font-bold font-headline pt-4">Financial Transparency</h2>
                <p>
                  We maintain clear and accurate financial records and ensure proper use of funds in accordance with Indian laws and our stated mission.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Our audited financial statements, annual reports, and utilization certificates are made publicly available on our website.</li>
                  <li>All donations received — whether domestic or foreign — are recorded, acknowledged, and utilized responsibly for programmatic purposes.</li>
                  <li>We comply with all applicable regulations under:
                    <ul className="list-disc list-inside ml-6 space-y-1 mt-1">
                      <li>The Income Tax Act, including provisions related to Section 12A and 80G.</li>
                      <li>The Foreign Contribution (Regulation) Act (FCRA), where applicable.</li>
                      <li>Corporate Social Responsibility (CSR) requirements under the Companies Act for CSR partnerships.</li>
                    </ul>
                  </li>
                </ul>
                
                <h2 className="text-2xl font-bold font-headline pt-4">Programmatic Transparency</h2>
                <p>We share timely updates on our programs and their impact, including:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Number of beneficiaries reached</li>
                  <li>Project outcomes and key achievements</li>
                  <li>Challenges and learning experiences</li>
                  <li>Case studies and real-life stories (with consent)</li>
                </ul>
                <p>All reports are based on verified data and are available to our stakeholders via newsletters, reports, and our website.</p>
                
                <h2 className="text-2xl font-bold font-headline pt-4">Governance and Ethical Practices</h2>
                <p>AIM Foundation is governed by a Board of Trustees/Directors who oversee the organization's strategic direction and ensure compliance with statutory obligations.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>We follow a documented Code of Conduct, and all staff, volunteers, and partners are expected to adhere to it.</li>
                  <li>No part of the organization’s income or assets is used for the personal benefit of trustees or staff beyond fair and disclosed compensation.</li>
                  <li>We avoid conflicts of interest and maintain clear segregation of duties in program, finance, and governance roles.</li>
                </ul>

                <h2 className="text-2xl font-bold font-headline pt-4">Donor Transparency</h2>
                <p>We maintain open communication with our donors regarding:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>How funds are used</li>
                  <li>Progress and impact reports</li>
                  <li>Timely issuance of donation receipts and 80G certificates</li>
                </ul>
                <p>We do not publish personal donor information without consent and comply with all privacy and data protection norms.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">Feedback and Grievance Redressal</h2>
                <p>We encourage feedback and take all concerns seriously. If any stakeholder has questions regarding our operations, finances, or governance, they may contact us directly.</p>
                <div className="text-muted-foreground space-y-2">
                   <div className="flex items-center gap-2">
                      <span>📧</span> <TrusteeEmail />
                  </div>
                  <p>🏢 Address: 41, Ballygaunge Terrace, Kolkata - 700029</p>
                </div>

                <h2 className="text-2xl font-bold font-headline pt-4">Policy Review</h2>
                <p>This Transparency Policy is reviewed annually to ensure it reflects current best practices, legal requirements, and the evolving needs of our stakeholders.</p>

                <div className="pt-6 text-center">
                  <p>We thank you for your trust and continued support. Transparency is not just a principle — it is the foundation of our credibility and impact.</p>
                  <p className="mt-2">— Team AIM Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
