import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import TrusteeEmail from "@/components/layout/TrusteeEmail";
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const QuickFacts = dynamic(() => import('@/components/sections/QuickFacts'), {
  loading: () => <Skeleton className="h-[200px] w-full" />,
});
const WaysToPartner = dynamic(() => import('@/components/sections/WaysToPartner'), {
  loading: () => <Skeleton className="h-[250px] w-full" />,
});

export const metadata: Metadata = {
  title: 'Cause-Related Marketing with AIM Foundation | CRM India',
  description: 'Partner with AIM Foundation for impactful cause-related marketing campaigns. Build customer trust, drive social good, and enhance your brand reputation.',
  keywords: [
    'cause-related marketing AIM Foundation', 'CRM AIM Foundation', 'NGO brand partnership India',
    'AIM Foundation marketing collaboration', 'social impact marketing AIM Foundation',
    'brand CSR campaign India', 'AIM Foundation co-branded campaigns',
    'NGO corporate partnerships', 'AIM Foundation social cause marketing',
    'ESG CRM partnership AIM Foundation', 'sustainable marketing NGO India'
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/cause-marketing-events',
    title: 'Cause-Related Marketing with AIM Foundation | CRM India',
    description: 'Partner with AIM Foundation for impactful cause-related marketing campaigns. Build customer trust, drive social good, and enhance your brand reputation.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Cause-Related Marketing with AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Cause-Related Marketing with AIM Foundation | CRM India',
    description: 'Partner with AIM Foundation for impactful cause-related marketing campaigns. Build customer trust, drive social good, and enhance your brand reputation.',
    images: ['https://aimindia.org.in/home.avif'], // Removed url property
  },
  alternates: {
    canonical: '/cause-marketing-events',
  },
};

export default function CauseMarketingEventsPage() {
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
    "description": "Partner with AIM Foundation for impactful cause-related marketing campaigns. Build customer trust, drive social good, and enhance your brand reputation."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-crm"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section className="relative w-full">
            <div className="relative w-full">
              <Image
                src="/images/banner/crm.avif"
                alt="Cause Marketing & Events"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="brand partnership event"
              />
            </div>
            <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
              <div className="relative z-10 text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Cause-Related Marketing (CRM)
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Align Your Brand with Purpose. Drive Impact Together.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20 lg:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6 text-lg text-muted-foreground text-justify">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">Cause-Related Marketing (CRM) with AIM Foundation</h2>
                  <p>
                    Cause-related marketing is more than a campaign—it’s a strategic collaboration between brands and nonprofits that drives both social good and business value. At AIM Foundation, we partner with purpose-driven companies to create powerful, socially responsible campaigns that resonate with customers and create tangible impact on the ground.
                  </p>

                  <h3 className="text-2xl font-bold font-headline pt-6">What is Cause-Related Marketing?</h3>
                  <p>
                    Cause marketing aligns a company’s products, services, or promotions with a social cause—allowing consumers to support meaningful initiatives simply by making a purchase or engaging with a brand.
                  </p>
                  <p>Unlike traditional charity efforts, cause marketing:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Integrates social impact into core business strategy</li>
                    <li>Builds customer loyalty through shared values</li>
                    <li>Drives measurable change in underserved communities</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <WaysToPartner />
          <QuickFacts />

          <section className="py-12 md:py-20 lg:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6 text-lg text-muted-foreground text-justify">
                  <h3 className="text-2xl font-bold font-headline pt-6">Why Partner with AIM Foundation?</h3>
                  <p>
                    At AIM Foundation, we bring deep grassroots experience and a strong track record of working with vulnerable communities across India. When you collaborate with us on a CRM initiative, your brand directly contributes to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Improved access to education for underprivileged children</li>
                    <li>Better healthcare and hygiene in underserved areas</li>
                    <li>Skill development and entrepreneurship opportunities for women and youth</li>
                    <li>Environmental protection and sustainability</li>
                    <li>Livelihood enhancement through community-led initiatives</li>
                  </ul>

                  <h3 className="text-2xl font-bold font-headline pt-6">How Your Brand Benefits</h3>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Stronger brand reputation and emotional connection with consumers</li>
                    <li>Increased customer loyalty and engagement</li>
                    <li>Positive media coverage and public goodwill</li>
                    <li>Contribution to your CSR, ESG, and SDG goals</li>
                  </ul>

                  <div className="bg-card p-6 rounded-lg shadow-md mt-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Let’s Make Purpose Your Brand’s Superpower</h2>
                    <p className="mt-4">
                      Join hands with AIM Foundation to co-create meaningful campaigns that move hearts, inspire action, and transform lives.
                    </p>
                    <p className="mt-4">
                      Connect with our Partnerships Team today: <TrusteeEmail />
                    </p>
                    <p className="mt-2">
                      Because when your brand stands for something bigger, your customers stand with you.
                    </p>
                  </div>
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
