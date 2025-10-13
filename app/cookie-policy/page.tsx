import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactEmail from "@/components/layout/ContactEmail";

export const metadata: Metadata = {
  title: 'Cookie Policy - AIM Foundation',
  description: 'Learn how AIM Foundation uses cookies and similar technologies on our website.',
  keywords: ['AIM Foundation cookie policy', 'website cookies AIM Foundation', 'privacy AIM Foundation', 'NGO cookies India', 'data protection NGO'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/cookie-policy',
    title: 'Cookie Policy - AIM Foundation',
    description: 'Learn how AIM Foundation uses cookies and similar technologies on our website.',
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
    title: 'Cookie Policy - AIM Foundation',
    description: 'Learn how AIM Foundation uses cookies and similar technologies on our website.',
    images: ['https://aimindia.org.in/logo.png'],
  },
  alternates: {
    canonical: '/cookie-policy',
  },
};

export default function CookiePolicyPage() {
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
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "mailto:info@aimindia.org.in",
        "contactType": "Customer Support"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-cookie"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
                Cookie Policy
              </h1>
              <div className="space-y-6 text-muted-foreground text-justify">
                <p>
                  This Cookie Policy explains how Associated Initiative for Mankind Foundation ("AIM Foundation") uses cookies and similar technologies to recognise users when they visit our website: www.aimindia.org.in. It outlines what these technologies are, why we use them, and your rights to control their use.
                </p>
                <p>
                  By continuing to use our website, you consent to our use of cookies in accordance with this policy.
                </p>
                
                <h2 className="text-2xl font-bold font-headline pt-4">1. What Are Cookies?</h2>
                <p>Cookies are small text files stored on your browser when you visit a website. They help remember your preferences, improve experience, and may collect anonymous analytics.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">2. Types of Cookies We Use</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Essential Cookies:</strong> Required for website functionality.</li>
                  <li><strong>Analytics Cookies:</strong> Help understand visitor interactions anonymously.</li>
                  <li><strong>Functional Cookies:</strong> Remember user choices for enhanced features.</li>
                  <li><strong>Third-Party Cookies:</strong> Set by external platforms (YouTube, Google Maps, social media).</li>
                </ul>
                
                <h2 className="text-2xl font-bold font-headline pt-4">3. How We Use Cookies</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Maintain website functionality</li>
                  <li>Improve browsing experience</li>
                  <li>Analyse traffic patterns and engagement</li>
                  <li>Display embedded content or social sharing options</li>
                </ul>

                <h2 className="text-2xl font-bold font-headline pt-4">4. Managing and Controlling Cookies</h2>
                <p>You can manage or disable cookies via your browser settings. Disabling essential cookies may affect website features.</p>

                <h2 className="text-2xl font-bold font-headline pt-4">5. Updates to This Policy</h2>
                <p>We may update this Cookie Policy periodically. Updates will be posted on this page with a revised effective date.</p>
                
                <h2 className="text-2xl font-bold font-headline pt-4">6. Contact Us</h2>
                <div className="pl-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span>📧</span> <ContactEmail />
                  </div>
                  <p>🏢 Address: 41, Ballygaunge Terrace, Kolkata 700029</p>
                </div>

                <div className="pt-6 text-center">
                  <p>We thank you wholeheartedly for your support and understanding.</p>
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
