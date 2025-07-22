
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/TideShieldDonationForm'), { ssr: false });

const donationProps = {
  title: "TideShield",
  subtitle: "PROTECT OUR COASTS",
  amounts: [
    { value: "1000", label: "₹1000" },
    { value: "2500", label: "₹2500" },
    { value: "5000", label: "₹5000" },
    { value: "10000", label: "₹10000" },
  ],
  amountDescription: "PLANT 10 MANGROVE SAPLINGS",
};

export default function TideShieldPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="TideShield Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="mangrove forest"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                TideShield
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Plant today, protect tomorrow
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Give the Sundarbans a fighting chance.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                  <p>
                    TideShield is a focused environmental initiative by AIM Foundation to restore the mangrove ecosystems of Bali Island in the Sundarbans, severely impacted by cyclones Amphan and Yaas. These natural disasters caused widespread coastal degradation, increased erosion, and left communities more vulnerable to future climate events.
                  </p>
                  <p>
                    Mangroves act as nature’s frontline defenders—reducing storm surges, stabilizing shorelines, and supporting rich biodiversity. Through TideShield, we plant native mangrove species and work hand-in-hand with local communities to nurture and maintain these vital green buffers. By restoring mangroves, we not only protect fragile ecosystems but also enhance the long-term resilience of the people who depend on them for survival. But we can’t do it alone.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Be the hope that coastal families are waiting for.</h3>
                   <p>
                    Every contribution helps us provide more saplings, train local volunteers, and monitor the growth and survival of planted trees. With just a small donation, you can directly help protect coastal families, restore biodiversity, and rebuild nature’s defenses against climate disasters.
                   </p>
                   <p>
                    Help us shield the Sundarbans. Donate to TideShield today—and let your generosity take root in the world’s most vital coastal forest.
                   </p>
                </div>
              </div>
              
              <div className="sticky top-24">
                <DynamicDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
