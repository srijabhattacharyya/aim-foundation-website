
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
import Link from 'next/link';

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/GreenRootsDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const sustainabilityInitiatives = [
    { href: '/green-roots?from=sustainability', label: 'GreenRoots' },
    { href: '/tideshield?from=sustainability', label: 'TideShield' },
    { href: '/roots-of-change?from=sustainability', label: 'Roots of Change' },
    { href: '/forest-cleaning?from=sustainability', label: 'Forest Cleaning' },
];

const relatedResource = {
    link: "/blog/planting-hope-growing-futures",
    text: "The GreenRoots Journey",
    image: { src: "/images/projects/sustainability/sustainability5.avif", alt: "GreenRoots initiative", hint: "community planting trees", description: "Sapling Distribution to community members"}
};

export default function GreenRootsClientPage() {
  const [showForm, setShowForm] = useState(false);
  const initiativeLists = [{ title: "Sustainability Initiatives", initiatives: sustainabilityInitiatives }];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/greenroots.avif"
              alt="GreenRoots Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="urban garden community"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                GreenRoots
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Sow Today, Breathe Tomorrow
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Planting Hope, Growing Futures</h2>
                    <div className="text-lg text-muted-foreground space-y-4 text-justify">
                      <p>
                        GreenRoots is a grassroots environmental initiative launched by AIM Foundation to promote reforestation and expand green cover in regions where land acquisition for large-scale plantation is not viable. In many rural and semi-rural areas, the lack of access to common or government-owned land poses a significant barrier to traditional afforestation efforts. GreenRoots addresses this challenge by empowering individual households and communities to become stewards of the <Link href="/sustainability-initiatives" className="text-primary hover:underline">environment</Link>.
                      </p>
                      <p>
                        Under this initiative, saplings are directly distributed to villagers along with basic guidance on planting and nurturing them. Beneficiaries are encouraged to plant trees in courtyards, agricultural borders, schools, community spaces, and temple grounds—transforming idle land into green pockets. Through <Link href="/ignite-change-initiative" className="text-primary hover:underline">awareness campaigns</Link> and hands-on support, AIM Foundation ensures that recipients understand the long-term environmental benefits of tree care.
                      </p>
                      <p>
                        By shifting the focus from centralized plantations to decentralized community participation, GreenRoots promotes environmental responsibility, encourages ownership, and builds lasting ecological resilience at the grassroots level. The project not only increases tree cover but also strengthens the bond between people and nature.
                      </p>
                      <h3 className="text-2xl font-bold font-headline pt-4">Let your support take root—help green India’s future</h3>
                      <p>
                        Your <Link href="/individual-donation" className="text-primary hover:underline">contribution</Link> can help provide more saplings, expand outreach, and support communities in nurturing our planet. Donate today and help GreenRoots grow stronger, deeper, and greener—one tree, one family, one village at a time.
                      </p>
                    </div>
                  </div>
              </div>
              <div className="hidden md:block md:col-span-1 md:order-last">
                <InitiativeSidebar initiativeLists={initiativeLists} relatedResource={relatedResource} />
              </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to GreenRoots</Button>
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
