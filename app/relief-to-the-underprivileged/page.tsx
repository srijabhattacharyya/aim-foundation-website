
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/ReliefDonationForm'), { ssr: false });

export default function ReliefPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Relief for the Underprivileged Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="community support food"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Relief to the Underprivileged
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Providing Hope and Support in Times of Need.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Extending a Helping Hand, Restoring Dignity.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    Our Relief to the Underprivileged program is a cornerstone of our commitment to immediate and compassionate action. We provide essential support to individuals and families facing extreme hardship due to poverty, lack of resources, or sudden crises. This initiative is about more than just aid; it's about restoring hope and dignity.
                  </p>
                  <p>
                    We work to address the most urgent needs of marginalized communities, including those in remote villages, urban slums, and areas often overlooked by mainstream support systems.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Our relief efforts include:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Distribution of nutritious food and ration kits.</li>
                    <li>Provision of clean drinking water and sanitation supplies.</li>
                    <li>Distribution of clothing, blankets, and essential household items.</li>
                    <li>Support for shelter and basic living necessities.</li>
                  </ul>
                  <p>
                    By providing this crucial support, we help alleviate immediate suffering and create a foundation from which families can begin to rebuild their lives. Our goal is to ensure that no one is left behind and that everyone has access to the basic necessities required for a dignified life.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Be the Lifeline for Someone in Need</h3>
                  <p>
                    For many, a single meal, a warm blanket, or access to clean water can be a lifeline. Your donation provides immediate, tangible relief to those who have the least. You can help us reach more families, provide more meals, and offer a glimmer of hope in the darkest of times. Your support ensures that our helping hand can extend to every person who needs it.
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
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
