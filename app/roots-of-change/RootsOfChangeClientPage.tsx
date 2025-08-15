
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

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/RootsOfChangeDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function RootsOfChangeClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="Roots of Change Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="environmental education"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Roots of Change
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Planting knowledge, growing change
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
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Because change begins with understanding</h2>
                    <div className="text-lg text-muted-foreground space-y-4 text-justify">
                      <p>
                        Roots of Change is AIM Foundation’s flagship environmental education initiative, rooted in the belief that lasting transformation begins with knowledge. Our mission is to cultivate deep environmental awareness and nurture sustainable habits in communities that are most vulnerable to climate change.
                      </p>
                      <p>
                        Through <strong>expert-led seminars, interactive workshops, and engaging educational materials</strong>, Roots of Change empowers students, local leaders, and everyday citizens to become informed stewards of the planet. We work closely with schools, community centers, and local organizations to spark conversations, build understanding, and inspire action—from reducing plastic use to protecting local ecosystems.
                      </p>
                      <p>
                        This is more than just education—it’s about planting the seeds of responsibility and hope, and watching them grow into a greener, more resilient tomorrow. By starting at the grassroots level, we aim to build a future where environmental care is second nature, and every individual sees themselves as part of the solution.
                      </p>
                      <p>
                        <strong>Because real change always starts at the roots.</strong> 🌱
                      </p>
                      <h3 className="text-2xl font-bold font-headline pt-4">Plant Awareness, Grow a Greener Tomorrow</h3>
                      <p>
                        Every voice we awaken through Roots of Change plants a seed of environmental responsibility. But we can’t nurture these seeds alone. Your donation helps us reach more communities, host impactful seminars, and inspire lasting change. Together, let’s grow minds that protect the Earth. <strong>Donate today—and let your support become the root of real change.</strong>
                      </p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Roots of Change</Button>
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
