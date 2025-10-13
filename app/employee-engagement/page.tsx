import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import TrusteeEmail from "@/components/layout/TrusteeEmail";
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const EngagementStats = dynamic(() => import('@/components/sections/EngagementStats'), {
  loading: () => <Skeleton className="h-[250px] w-full" />,
});
const WaysOfEngagement = dynamic(() => import('@/components/sections/WaysOfEngagement'), {
  loading: () => <Skeleton className="h-[350px] w-full" />,
});

export const metadata: Metadata = {
  title: 'Employee Engagement Programs with AIM Foundation India',
  description: 'Boost morale, teamwork, and purpose with AIM Foundation’s employee engagement programs. Create meaningful impact while strengthening workplace culture.',
  keywords: ['employee engagement AIM Foundation', 'corporate volunteering AIM Foundation', 'AIM Foundation workplace engagement', 'employee CSR programs India', 'team building NGO partnerships', 'social responsibility employee programs', 'AIM Foundation staff volunteering', 'corporate employee engagement India', 'CSR engagement AIM Foundation', 'workplace culture social impact'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/employee-engagement',
    title: 'Employee Engagement Programs with AIM Foundation India',
    description: 'Boost morale, teamwork, and purpose with AIM Foundation’s employee engagement programs. Create meaningful impact while strengthening workplace culture.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Employee Engagement Programs at AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Employee Engagement Programs with AIM Foundation India',
    description: 'Boost morale, teamwork, and purpose with AIM Foundation’s employee engagement programs. Create meaningful impact while strengthening workplace culture.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/employee-engagement',
  },
};

export default function EmployeeEngagementPage() {
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
    "description": "Boost morale, teamwork, and purpose with AIM Foundation’s employee engagement programs. Create meaningful impact while strengthening workplace culture."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-employee-engagement"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section className="relative w-full">
            <div className="relative w-full">
              <Image
                src="/images/banner/ev.avif"
                alt="Employee Engagement Banner"
                width={1920}
                height={334}
                className="w-full h-auto object-cover"
                data-ai-hint="team volunteering corporate"
              />
            </div>
            <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
              <div className="relative z-10 text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Employee Engagement
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Inspire Purpose - Strengthen Teams - Create Impact
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20 lg:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6 text-lg text-muted-foreground text-justify">
                  <p>
                    Engaged employees are the backbone of a thriving organization. When individuals feel connected to a larger purpose, their productivity rises, their commitment deepens, and their work becomes more meaningful.
                  </p>
                  <p>
                    At AIM Foundation, we believe that employee engagement isn’t just about workplace culture—it’s about giving your team the opportunity to contribute to real change. By involving your workforce in social initiatives, you align their values with your organization's mission, creating a strong sense of belonging and shared purpose.
                  </p>

                  <h3 className="text-2xl font-bold font-headline pt-6">Why Employee Engagement Matters</h3>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Boosts morale and motivation</li>
                    <li>Encourages teamwork and leadership</li>
                    <li>Enhances employee satisfaction and retention</li>
                    <li>Builds a culture of social responsibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <EngagementStats />
          <WaysOfEngagement />

          <section className="py-12 md:py-20 lg:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                  <div className="space-y-6 text-lg text-muted-foreground text-justify">
                      <h3 className="text-2xl font-bold font-headline pt-6">Engagement That Makes a Difference</h3>
                      <p>
                          Through our customized employee engagement programs, we help corporate teams connect with communities in meaningful ways. Whether it’s celebrating a special occasion, organizing a skill-sharing workshop, or volunteering time with children, women, or local communities—AIM Foundation handles everything, end-to-end.
                      </p>
                      <p>We design experiences that are:</p>
                      <ul className="list-disc list-inside space-y-2 pl-4">
                          <li>Purpose-driven</li>
                          <li>Well-coordinated</li>
                          <li>Logistically smooth</li>
                          <li>Impact-focused</li>
                      </ul>
                      <p>
                          Your employees get to see the impact of their contribution firsthand, whether it’s in education, healthcare, skill-building, or environmental efforts.
                      </p>

                      <h3 className="text-2xl font-bold font-headline pt-6">Celebrate With Purpose</h3>
                      <p>
                          Want to celebrate a festival, company milestone, or employee birthday in a meaningful way?
                          Let us help you turn that celebration into a day of joy for underprivileged children or communities in need.
                          From planning and coordination to logistics and storytelling—we manage every detail to ensure a rewarding experience for both your employees and the beneficiaries.
                      </p>
                      
                      <div className="bg-card p-6 rounded-lg shadow-md mt-10 text-center">
                          <h2 className="text-3xl md:text-4xl font-bold font-headline">Let's Engage with Impact</h2>
                          <p className="mt-4">
                              Empower your team with the joy of giving back.
                              Partner with AIM Foundation to design employee engagement activities that uplift communities and leave lasting memories.
                          </p>
                          <p className="mt-4 font-semibold">
                              Connect with our Corporate Partnerships Team
                          </p>
                          <p className="mt-2">
                             Email us at: <TrusteeEmail />
                          </p>
                          <p className="mt-4">
                              Because when your people do good, your organisation grows stronger.
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
