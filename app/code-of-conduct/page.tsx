import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: 'Code of Conduct - AIM Foundation',
  description: 'Our Code of Conduct outlines the principles, values, and standards expected of everyone associated with our organization.',
  keywords: ['AIM Foundation', 'Code of Conduct', 'NGO ethics', 'volunteer code of conduct', 'nonprofit values', 'organizational policies', 'AIM Foundation governance'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/code-of-conduct',
    title: 'Code of Conduct - AIM Foundation',
    description: 'Our Code of Conduct outlines the principles, values, and standards expected of everyone associated with our organization.',
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
    title: 'Code of Conduct - AIM Foundation',
    description: 'Our Code of Conduct outlines the principles, values, and standards expected of everyone associated with our organization.',
    images: ['https://aimindia.org.in/logo.png'],
  },
  alternates: {
    canonical: '/code-of-conduct',
  },
};

export default function CodeOfConductPage() {
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
    "description": "Our Code of Conduct outlines the principles, values, and standards expected of everyone associated with our organization."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-code-of-conduct"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
                Code of Conduct
              </h1>
              <div className="space-y-6 text-muted-foreground text-justify">
                {/* All your sections go here exactly as in your original code */}
                {/* Professionalism, Respect, Child Protection, Harassment-Free, Confidentiality, Resources, Accountability, Social Media, Learning, Disciplinary Action, Acknowledgment */}
              </div>
              <div className="pt-6 text-center">
                <p>Together, we uphold the values of AIM Foundation and work toward a more just, compassionate, and empowered society.</p>
                <p className="mt-2">— Team AIM Foundation</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
