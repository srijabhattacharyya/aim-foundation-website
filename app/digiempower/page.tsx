
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/DigiEmpowerDonationForm'), { ssr: false });

const donationProps = {
  title: "DigiEmpower",
  subtitle: "MAKE A DIFFERENCE",
  amounts: [
    { value: "3000", label: "₹3000" },
    { value: "6000", label: "₹6000" },
    { value: "12000", label: "₹12000" },
    { value: "24000", label: "₹24000" },
  ],
  amountDescription: "DIGITAL LITERACY FOR 1 CHILD FOR 6 MONTHS",
};

export default function DigiEmpowerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="DigiEmpower Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="digital literacy children"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                DigiEmpower
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bridging the Digital Divide, Building Futures.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">No Child Left Offline</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    DigiEmpower, an initiative supported by the Dhritiman Abilizing Infinity Foundation, is dedicated to promoting digital literacy among underprivileged and Adivasi children in both urban and remote regions of West Bengal. Operating in areas such as Kolkata, Rangakhila in Purba Bardhaman, and Dakshin Dhupjhora in Jalpaiguri, the program reaches children who traditionally have limited or no access to technology.
                  </p>
                  <p>
                    Through its Dhriti Abilizing Centres, the AIM Foundation provides hands-on computer training that equips children with essential digital skills—such as typing, navigating the internet, using productivity software, and understanding online safety. These skills are critical in today’s technology-driven world and form the foundation for future educational and career opportunities.
                  </p>
                  <p>
                    DigiEmpower recognizes that digital competence is no longer optional but a necessity. By offering structured training and exposure to technology, the initiative helps children develop the confidence and knowledge needed to thrive in school, compete in the job market, and participate fully in an increasingly digital society.
                  </p>
                  <p>
                    Importantly, the program ensures equitable access by extending its reach to Adivasi communities in Aushgram, Rangakhila, and Dakshin Dhupjhora, where children often face both social and infrastructural barriers. By bridging the digital divide, DigiEmpower not only enhances individual futures but also fosters broader social inclusion and empowerment across rural Bengal.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Bridge the Digital Divide—One Child at a Time</h3>
                  <p>
                    In a world where digital skills shape futures, many underprivileged and Adivasi children remain disconnected. <strong>Your donation can help us provide computers, internet access, and hands-on training at our Dhriti Abilizing Centres—turning curiosity into competence.</strong> With your support, a child in a remote village can learn to type, explore the internet safely, and build skills vital for school and future employment. Empower a generation to thrive in the digital age—<strong>donate today</strong> to DigiEmpower and light the screen of opportunity.
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
