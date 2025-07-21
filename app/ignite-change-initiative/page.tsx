"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import IgniteChangeDonationForm from "@/components/sections/donation-forms/IgniteChangeDonationForm";

export default function IgniteChangeInitiativePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Ignite Change Initiative Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="community action group"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Ignite Change Initiative
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Sparking Action, Inspiring Hope.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Be the Spark. Fuel the Movement.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    The Ignite Change Initiative is our dynamic platform for mobilizing communities and fostering a culture of proactive social responsibility. This initiative is designed to support a wide range of grassroots projects, from local awareness campaigns to volunteer-driven community improvements. It's about empowering individuals to become agents of change in their own neighborhoods.
                  </p>
                  <p>
                    We believe that small actions, when multiplied by many, can lead to transformative outcomes. Ignite Change provides the resources, mentorship, and framework for passionate individuals and groups to launch and sustain their own social good projects.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Our Support Includes:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Seed funding for innovative community projects.</li>
                    <li>Volunteer recruitment and management support.</li>
                    <li>Training workshops on project management and community outreach.</li>
                    <li>A network of like-minded changemakers to share ideas and resources.</li>
                  </ul>
                  <p>
                    Whether it's a neighborhood cleanup drive, a local literacy program, or a campaign for public health, Ignite Change is here to help turn passion into impactful action. We are dedicated to building a more engaged, compassionate, and proactive society from the ground up.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Fuel a Grassroots Movement</h3>
                  <p>
                    Your donation to the Ignite Change Initiative provides the critical seed funding that allows local heroes to get their ideas off the ground. Support a community-led project and empower passionate individuals to create the change they want to see. Your contribution can help launch a new campaign, train volunteers, or provide essential materials. Be the spark that ignites a wave of positive action.
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <IgniteChangeDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
