
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import TrusteeEmail from "@/components/layout/TrusteeEmail";
import QuickFacts from "@/components/sections/QuickFacts";
import WaysToPartner from "@/components/sections/WaysToPartner";

export const metadata: Metadata = {
  title: 'Cause-Related Marketing (CRM) - AIM Foundation',
  description: 'Align your brand with purpose. Partner with AIM Foundation for cause-related marketing and drive impact together.',
  alternates: {
    canonical: '/cause-marketing-events',
  },
};

export default function CauseMarketingEventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Cause Marketing & Events"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover brightness-50"
              data-ai-hint="brand partnership event"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
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
                    <p>
                    Together, we design campaigns that are authentic, impactful, and inspiring—built on transparency, shared goals, and long-term vision.
                    </p>

                    <h3 className="text-2xl font-bold font-headline pt-6">How Your Brand Benefits</h3>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>Stronger brand reputation and emotional connection with consumers</li>
                        <li>Increased customer loyalty and engagement</li>
                        <li>Positive media coverage and public goodwill</li>
                        <li>Contribution to your CSR, ESG, and SDG goals</li>
                    </ul>
                    <p>
                        Whether it’s a product-linked donation, co-branded campaign, or a social media cause challenge, cause-related marketing with AIM Foundation creates a win-win: real change for communities and enhanced value for your brand.
                    </p>

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
  );
}
