
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
import { useSearchParams } from 'next/navigation';

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/ChildFirstDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const childcareInitiatives = [
  { href: '/innocent-smiles', label: 'Innocent Smiles' },
  { href: '/milieu', label: 'Milieu' },
  { href: '/childfirst', label: 'ChildFirst' },
];

const healthcareInitiatives = [
    { href: '/cureline', label: 'CureLine' },
    { href: '/carecircle', label: 'CareCircle' },
    { href: '/childfirst', label: 'ChildFirst' },
    { href: '/detect', label: 'Detect' },
    { href: '/sighthope', label: 'SightHope' },
    { href: '/oralscan', label: 'OralScan' },
    { href: '/cyclesafe', label: 'CycleSafe' },
    { href: '/soulcircle', label: 'SoulCircle' },
];

const relatedResource = {
    link: "/blog/childfirst-health-hope-dignity",
    text: "ChildFirst: Bringing Health, Hope, and Dignity",
    image: { src: "/images/projects/childfirst/childfirst3.avif", alt: "ChildFirst initiative", hint: "paediatric camp", description: "Specialised Paediatric Camp at Kolkata."},
};

export default function ChildFirstClientPage() {
    const [showForm, setShowForm] = useState(false);
    const searchParams = useSearchParams();
    const fromQuery = searchParams.get('from') || 'healthcare';

    const initiativeLists = fromQuery === 'childcare'
        ? [{ title: "Childcare Initiatives", initiatives: childcareInitiatives }, { title: "Healthcare Initiatives", initiatives: healthcareInitiatives }]
        : [{ title: "Healthcare Initiatives", initiatives: healthcareInitiatives }, { title: "Childcare Initiatives", initiatives: childcareInitiatives }];

    return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <section className="relative w-full">
              <div className="relative w-full">
                <Image
                  src="/images/banner/childfirst.avif"
                  alt="ChildFirst Banner"
                  width={1920}
                  height={580}
                  className="w-full h-auto object-cover"
                  data-ai-hint="children health checkup"
                  priority
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/10 to-transparent text-white p-8 md:p-12">
                <div className="relative z-10 text-left">
                  <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    ChildFirst
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Health, Dignity, and a Brighter Future.
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
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Every Child Deserves a Healthy Start.</h2>
                        <div className="text-lg text-muted-foreground space-y-4 text-justify">
                          <p>
                            ChildFirst is a compassionate healthcare initiative offering paediatric and general health camps for children of sex workers in Rambagan and Sonagachi. It provides a safe, non-judgmental space for early medical intervention, aiming to improve health, dignity, and future opportunities for these vulnerable and often overlooked children.
                          </p>
                          <p>
                            These camps offer free consultations, essential medicines, and nutritional support, ensuring that every child receives the care they need to thrive.
                          </p>
                          <h3 className="text-2xl font-bold font-headline pt-4">Your Support Can Change a Life</h3>
                          <p>
                            A small contribution can provide a child with a complete health check-up and vital medicines. Help us ensure that no child is left behind. Donate today to support our mission and bring health and hope to those who need it most.
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="fixed bottom-8 right-8 z-50">
                  <Dialog open={showForm} onOpenChange={setShowForm}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to ChildFirst</Button>
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
