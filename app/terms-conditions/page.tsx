
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrusteeEmail from "@/components/layout/TrusteeEmail";
import ContactEmail from "@/components/layout/ContactEmail";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions | AIM Foundation',
  description: 'Read the Terms and Conditions for using the AIM Foundation website and services. Your use of the site implies agreement with these terms.',
  keywords: [
    'AIM Foundation terms and conditions',
    'NGO terms of use',
    'donation terms',
    'website usage policy',
    'non-profit legal terms'
  ],
  authors: [{ name: 'AIM Foundation' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/terms-conditions',
    title: 'Terms and Conditions | AIM Foundation',
    description: 'Read the Terms and Conditions for using the AIM Foundation website and services.',
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
    title: 'Terms and Conditions | AIM Foundation',
    description: 'Read the Terms and Conditions for using the AIM Foundation website and services.',
    images: ['https://aimindia.org.in/logo.png'],
  },
  alternates: {
    canonical: '/terms-conditions',
  },
};

export default function TermsAndConditionsPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://www.aimindia.org.in/",
    "logo": "https://aimindia.org.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    "description": "Read the Terms and Conditions for using the AIM Foundation website and services."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-terms"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
                Terms and Conditions
              </h1>
              <div className="space-y-6 text-muted-foreground text-justify">
                <p>Welcome to AIM Foundation (“we,” “our,” “us”).</p>
                <p>These Terms and Conditions govern your use of our website, services, donation platform, and any associated content. By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree, please do not use this website.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">1. About AIM Foundation</h2>
                <p>AIM Foundation (Associated Initiative for Mankind Foundation) is a registered non-profit organization in India dedicated to promoting education, health awareness, and community development.</p>
                <p>All contributions received are used solely to support our social welfare programs and outreach activities.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">2. Use of This Website</h2>
                <p>By using our website, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Use it only for lawful and charitable purposes.</li>
                  <li>Not misuse, modify, copy, or distribute any content without prior permission.</li>
                  <li>Not attempt to gain unauthorized access to the website, its servers, or databases.</li>
                </ul>
                <p>AIM Foundation reserves the right to restrict or terminate access to any user found violating these terms.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">3. Donations and Payments</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>All donations made through this website are voluntary and non-refundable, except in cases of verified technical error or duplicate transaction.</li>
                  <li>Donations can be made via authorized online payment gateways integrated on our site.</li>
                  <li>Donors must provide accurate personal information while making contributions.</li>
                  <li>AIM Foundation issues digital receipts for every successful donation, sent via email to the donor’s registered address.</li>
                  <li>Eligible donations may qualify for tax benefits under relevant provisions of the Income Tax Act, 1961 (e.g., Section 80G), subject to applicable regulations.</li>
                </ul>
                <p>For donation-related concerns, please write to: <TrusteeEmail />.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">4. Tax Exemption and Receipts</h2>
                <p>AIM Foundation provides tax exemption certificates (if applicable) for eligible donations made within India.</p>
                <p>The foundation reserves the right to verify donor details before issuing such certificates.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">5. No Shipping or Delivery of Goods</h2>
                <p>AIM Foundation does not sell physical goods or services.</p>
                <p>All transactions represent charitable contributions. Hence, no shipping, logistics, or delivery of any product is involved.</p>
                <p>Digital receipts or participation confirmations for events are sent electronically via email only.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">6. Privacy and Data Protection</h2>
                <p>Your privacy is important to us. All personal and payment information shared during donations or form submissions is handled in accordance with our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
                <p>We do not sell, trade, or rent donor information to any third parties.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">7. Intellectual Property</h2>
                <p>All website content, including text, graphics, logos, images, and media, is the exclusive property of AIM Foundation or its partners.</p>
                <p>You may not reproduce, distribute, or modify any part of this site without written permission from AIM Foundation.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">8. External Links</h2>
                <p>Our website may contain links to external sites for reference or collaboration purposes. AIM Foundation is not responsible for the content, accuracy, or policies of these third-party websites.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">9. Limitation of Liability</h2>
                <p>AIM Foundation shall not be liable for any:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Direct, indirect, or incidental damages resulting from website use, or</li>
                  <li>Technical issues, errors, or downtime affecting accessibility.</li>
                </ul>
                <p>We make every effort to ensure that information on our website is accurate and up to date; however, we do not guarantee completeness or accuracy.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">10. Policy Updates and Modifications</h2>
                <p>AIM Foundation reserves the right to modify or update these Terms and Conditions at any time without prior notice.</p>
                <p>Changes become effective immediately upon posting on this page. We encourage you to review these terms periodically.</p>
                
                <h2 className="text-2xl font-bold font-headline pt-4">11. Governing Law and Jurisdiction</h2>
                <p>These Terms and Conditions are governed by the laws of India.</p>
                <p>Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Kolkata, West Bengal.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">12. Contact Information</h2>
                <p>For any queries related to these Terms and Conditions, donations, or website use, please contact:</p>
                <div className="pl-4">
                    <p><strong>AIM Foundation</strong></p>
                    <p>Email: <ContactEmail /></p>
                    <p>Website: <Link href="https://www.aimindia.org.in" className="text-primary hover:underline">www.aimindia.org.in</Link></p>
                </div>

                <div className="pt-6 text-center">
                  <p>Thank you for your support and for adhering to these terms.</p>
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
