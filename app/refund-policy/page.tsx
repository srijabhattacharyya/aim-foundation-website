
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DonationEmail from "@/components/layout/DonationEmail";

export const metadata: Metadata = {
  title: 'Refund Policy | AIM Foundation',
  description: 'AIM Foundation’s refund policy explains our non-refundable donation process, ensuring your contributions are immediately directed to our charitable programs.',
  keywords: [
    'AIM Foundation refund policy',
    'donation refund NGO',
    'non-refundable donation',
    'charitable contribution policy'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/refund-policy',
    title: 'Refund Policy | AIM Foundation',
    description: 'AIM Foundation’s refund policy explains our non-refundable donation process.',
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
    title: 'Refund Policy | AIM Foundation',
    description: 'AIM Foundation’s refund policy explains our non-refundable donation process.',
    images: ['https://aimindia.org.in/logo.png'],
  },
  alternates: {
    canonical: '/refund-policy',
  },
};

export default function RefundPolicyPage() {
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
    "description": "Learn about AIM Foundation’s non-refundable donation policy and our commitment to using contributions for immediate impact."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-refund-policy"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
                Refund Policy
              </h1>
              <div className="space-y-6 text-muted-foreground text-justify">
                <p>
                  At Associated Initiative for Mankind Foundation (hereinafter referred to as "AIM Foundation"), we deeply value the generosity and trust of all our donors. Your contributions go directly toward supporting our mission to uplift underprivileged communities through education, health, and empowerment initiatives.
                </p>
                
                <p>
                  As a not-for-profit organization, all donations made to AIM Foundation are used immediately to fund ongoing programs and outreach activities. Therefore, we regret to inform you that we are unable to offer refunds on any donations once they have been processed.
                </p>
                
                <p>
                  We sincerely request all donors to carefully review the donation details before confirming the transaction.
                </p>

                <h2 className="text-2xl font-bold font-headline pt-4">Contact Us</h2>
                 <div className="text-muted-foreground space-y-2">
                  <p>For queries related to donations, receipts, or compliance, please contact:</p>
                  <div className="flex items-center gap-2">
                      <span>📧</span> <DonationEmail />
                  </div>
                  <p>📞 Phone: +91 6290022813</p>
                  <p>🏢 Address: 41, Ballygaunge Terrace, Kolkata - 700029</p>
                </div>

                <div className="pt-6 text-center">
                  <p>We thank you wholeheartedly for your support and understanding. Your kindness helps us continue creating meaningful change.</p>
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
