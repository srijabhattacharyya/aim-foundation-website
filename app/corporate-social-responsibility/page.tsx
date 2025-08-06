
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import TrusteeEmail from "@/components/layout/TrusteeEmail";

export const metadata: Metadata = {
  title: 'Corporate Social Responsibility - AIM Foundation',
  description: 'Partner with AIM Foundation for your CSR initiatives and build sustainable impact together.',
  alternates: {
    canonical: '/corporate-social-responsibility',
  },
};

export default function CorporateSocialResponsibilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="https://placehold.co/1920x334.png"
              alt="Corporate Social Responsibility"
              width={1920}
              height={334}
              className="w-full h-auto object-cover brightness-50"
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

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-lg text-muted-foreground text-justify">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">CSR with AIM Foundation</h2>
                <p>
                  In today’s evolving business landscape, a strong commitment to social responsibility is a hallmark of respected and resilient brands. Companies across the globe are now aligning their operations with sustainable development goals, recognizing that true success includes social, environmental, and ethical impact.
                </p>
                <p>
                  At AIM Foundation, we partner with visionary businesses to co-create CSR programs that deliver real change at the grassroots level—while enhancing brand trust and stakeholder value.
                </p>
                
                <h3 className="text-2xl font-bold font-headline pt-6">Why CSR Matters More Than Ever</h3>
                <p>By integrating CSR into core strategy, companies can:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Strengthen brand reputation</li>
                  <li>Deepen employee engagement</li>
                  <li>Build lasting community relationships</li>
                  <li>Contribute meaningfully to India’s development</li>
                </ul>

                <h3 className="text-2xl font-bold font-headline pt-6">Partnering for Purpose: AIM Foundation & Corporate India</h3>
                <p>
                  Founded by professionals passionate about development and equity, AIM Foundation sees the corporate world as a key ally in driving social transformation. We work with businesses of all sizes to design, implement, and monitor CSR projects that align with your brand values and compliance requirements.
                </p>
                 <p>We welcome partnerships in areas including:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Education & Child Development</li>
                  <li>Healthcare & Hygiene</li>
                  <li>Women Empowerment & Livelihoods</li>
                  <li>Environmental Sustainability</li>
                  <li>Disaster Relief & Resilience</li>
                </ul>
                <p>
                  Whether you're looking to support an existing initiative or build a tailor-made project, AIM Foundation ensures impact, transparency, and accountability every step of the way.
                </p>

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
                    <p className="mt-4">
                       Start your CSR journey with AIM Foundation.
                    </p>
                    <p className="mt-4">
                        Get in touch at: <TrusteeEmail />
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
