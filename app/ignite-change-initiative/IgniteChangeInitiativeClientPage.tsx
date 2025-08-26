
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import InitiativeSidebar from "@/components/layout/InitiativeSidebar";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/IgniteChangeDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const ourInitiatives = [
    { href: '/educational-initiatives', label: 'Educational Initiatives' },
    { href: '/healthcare-initiatives', label: 'Healthcare Initiatives' },
    { href: '/gender-equality-initiative', label: 'Gender Equality Initiatives' },
    { href: '/childcare-initiatives', label: 'Childcare Initiatives' },
    { href: '/sustainability-initiatives', label: 'Sustainability Initiatives' },
    { href: '/relief-to-the-underprivileged', label: 'Relief to the Underprivileged' },
    { href: '/disaster-management', label: 'Disaster Management' },
    { href: '/ignite-change-initiative', label: 'Ignite Change Initiative' },
];

const relatedResource = {
    link: "/blog/igniting-change-transforming-communities",
    text: "Igniting Change: How Grassroots Action Transforms Communities",
    image: { src: "/images/projects/ignite-change/ignite-change1.avif", alt: "Ignite Change initiative", hint: "community awareness", description: "Community awareness campaign in action"}
};

export default function IgniteChangeInitiativeClientPage() {
  const [showForm, setShowForm] = useState(false);
  const initiativeLists = [{ title: "Our Initiatives", initiatives: ourInitiatives }];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/awareness.avif"
              alt="Ignite Change Initiative Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="community action group"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Ignite Change Initiative
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Sparking Action, Inspiring Hope.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-3 gap-12">
                <InitiativeSidebar initiativeLists={initiativeLists} relatedResource={relatedResource} />
                <div className="md:col-span-2">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Be the Spark. Fuel the Movement.</h2>
                        <div className="text-lg text-muted-foreground space-y-4 text-justify">
                        <p>
                            The Ignite Change Initiative is our dynamic platform for mobilizing communities and fostering a culture of proactive social responsibility. This initiative is designed to support a wide range of grassroots projects, from local awareness campaigns to volunteer-driven community improvements. It's about empowering individuals to become agents of change in their own neighbourhoods.
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
                            Whether it's a neighbourhood cleanup drive, a local literacy program, or a campaign for public health, Ignite Change is here to help turn passion into impactful action. We are dedicated to building a more engaged, compassionate, and proactive society from the ground up.
                        </p>
                        <h3 className="text-2xl font-bold font-headline pt-4">Fuel a Grassroots Movement</h3>
                        <p>
                            Your donation to the Ignite Change Initiative provides the critical seed funding that allows local heroes to get their ideas off the ground. Support a community-led project and empower passionate individuals to create the change they want to see. Your contribution can help launch a new campaign, train volunteers, or provide essential materials. Be the spark that ignites a wave of positive action.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Ignite Change</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                  <DynamicDonationForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
