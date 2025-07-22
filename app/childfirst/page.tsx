
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/DonationForm'), { ssr: false });

const donationProps = {
  title: "ChildFirst",
  subtitle: "MAKE A DIFFERENCE",
  amounts: [
    { value: "2500", label: "₹2500" },
    { value: "5000", label: "₹5000" },
    { value: "10000", label: "₹10000" },
    { value: "20000", label: "₹20000" },
  ],
  amountDescription: "HEALTH & NUTRITION FOR ONE CHILD",
};

export default function ChildFirstPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="ChildFirst Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="vulnerable children healthcare"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                ChildFirst
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Healing and Hope for Every Child.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Care Beyond Stigma. Health Beyond Barriers.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    ChildFirst is a compassionate and vital healthcare initiative by AIM Foundation that focuses on delivering <strong>pediatric and general health support</strong> to the children of sex workers living in <strong>Rambagan</strong> and <strong>Sonagachi</strong>—two of Kolkata’s most marginalized and stigmatized red-light areas.
                  </p>
                  <p>
                    These children often face multiple layers of vulnerability: limited access to healthcare, social exclusion, emotional trauma, and an increased risk of neglect and exploitation. ChildFirst recognizes the <strong>urgent need for early medical intervention and holistic well-being</strong> for these young lives.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Through this initiative, AIM Foundation organizes regular health camps offering:</h3>
                   <ul className="list-disc list-inside space-y-2">
                    <li>Basic health screenings and growth monitoring</li>
                    <li>Immunization support and referrals</li>
                    <li>Treatment for common childhood illnesses</li>
                    <li>Nutritional guidance and hygiene awareness</li>
                    <li>Safe and respectful care environments</li>
                  </ul>
                  <p>
                    By working closely with local NGOs, women’s groups, and community leaders, ChildFirst ensures that these camps are <strong>accessible, stigma-free, and child-centered</strong>. Special efforts are made to earn the trust of both children and caregivers, fostering a long-term relationship built on care and dignity.
                  </p>
                  <p>
                    Beyond physical health, the initiative also promotes emotional well-being, encouraging positive self-image, protection, and resilience in children who are often denied these basic securities.
                  </p>
                  <p>
                    ChildFirst stands as a promise—that <strong>every child, no matter their background, deserves quality healthcare, compassion, and a fair chance at a brighter future.</strong>
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Give Hope Where It’s Needed Most</h3>
                  <p>
                    In places where childhood is shadowed by stigma and neglect, <strong>your support can bring light, healing, and dignity</strong>. A small donation to ChildFirst provides medical check-ups, immunizations, nutrition support, and a safe, caring environment for children of sex workers in Kolkata’s red-light areas. You can help protect their health, restore their confidence, and rewrite their future. Stand with us in saying: <strong>every child matters, and every child deserves a chance. Donate now—because healing begins with you.</strong>
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <DynamicDonationForm {...donationProps} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
