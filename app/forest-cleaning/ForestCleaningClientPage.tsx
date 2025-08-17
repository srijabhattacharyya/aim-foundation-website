
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import InitiativeSidebar from "@/components/layout/InitiativeSidebar";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/ForestCleaningDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function ForestCleaningClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/roots-of-change1.avif"
              alt="Forest Cleaning Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="environmental awareness"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Forest Cleaning
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Restoring Nature, One Cleanup at a Time.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-3 gap-12">
              <InitiativeSidebar from="sustainability" />
              <div className="md:col-span-2">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Reclaiming Our Forests from Waste</h2>
                    <div className="text-lg text-muted-foreground space-y-4 text-justify">
                      <p>
                        Forest Cleaning is our hands-on initiative dedicated to the restoration and preservation of natural habitats through large-scale cleaning drives. Our forests are vital ecosystems that are increasingly threatened by plastic and other non-biodegradable waste, which harms wildlife and pollutes the environment.
                      </p>
                      <p>
                        This project mobilizes volunteers, local communities, and corporate partners to participate in organized cleanups in forest areas. By removing harmful pollutants, we help restore the natural balance, protect biodiversity, and ensure these precious green spaces remain healthy for generations to come.
                      </p>
                      <h3 className="text-2xl font-bold font-headline pt-4">Our cleaning drives focus on:</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Removing plastic bottles, bags, and other non-biodegradable waste.</li>
                        <li>Sorting and responsibly disposing of collected garbage.</li>
                        <li>Raising awareness among local communities and visitors about the impact of pollution.</li>
                        <li>Promoting a culture of environmental stewardship and responsibility.</li>
                      </ul>
                      <p>
                        Join us in our mission to keep our forests clean and green. Your support can help us organize more drives, provide necessary equipment to volunteers, and make a tangible difference in the health of our planet.
                      </p>
                      <h3 className="text-2xl font-bold font-headline pt-4">Help Us Keep Our Forests Green</h3>
                      <p>
                        Your contribution can fund cleaning equipment, safety gear for volunteers, and transportation for waste disposal. Every donation helps us reclaim more forest area from pollution.
                      </p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Forest Cleaning</Button>
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
