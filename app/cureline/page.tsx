
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/CureLineDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function CureLinePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="CureLine Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="rural healthcare"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                CureLine
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bringing Healthcare to the Heart of Communities.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Reaching the Unreachable with Care.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    CureLine is a frontline healthcare initiative by AIM Foundation, designed to deliver <strong>essential medical services</strong> to communities that are often neglected by mainstream health systems. Through regular, on-ground <strong>healthcare camps</strong>, CureLine serves <strong>remote villages, forest-fringe settlements,</strong> and <strong>disaster-affected regions</strong> across West Bengal and beyond.
                  </p>
                  <p>
                    Many of these regions suffer from <strong>limited or no access to registered medical practitioners</strong>, diagnostic facilities, or affordable treatment options. CureLine fills this critical gap by <strong>bringing doctors, nurses, and essential medicines directly to the people</strong>, eliminating the barriers of distance, cost, and awareness.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Key Services Offered:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>General health check-ups and medical consultations</li>
                    <li>Diagnosis and treatment of common ailments</li>
                    <li>Monitoring of chronic conditions like diabetes and hypertension</li>
                    <li>Maternal and child healthcare support</li>
                    <li>Free distribution of prescribed medicines and supplements</li>
                    <li>Health education sessions on hygiene, nutrition, and disease prevention</li>
                  </ul>
                  <p>
                    Camps are conducted at local community hubs such as schools, village centers, and makeshift clinics—often in challenging terrains like the Sundarbans delta, the tribal villages near Gorumara, and flood-prone areas.
                  </p>
                   <p>
                    In times of crisis, such as cyclones, floods, or epidemics, CureLine plays a crucial role in offering emergency medical relief, first aid, and recovery care. It works in tandem with local volunteers, health workers, and panchayat leaders to ensure every camp is tailored to the community’s specific health needs.
                  </p>
                  <p>
                    More than just treatment, CureLine builds trust. It promotes regular health-seeking behavior, improves awareness, and helps communities take ownership of their well-being. With each outreach, the initiative strengthens the belief that quality healthcare is a right—not a privilege.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Be the Lifeline Where Healthcare Doesn’t Reach</h3>
                  <p>
                    For families in remote villages, forest edges, and disaster-hit zones, CureLine may be the only source of medical care they ever receive. <strong>Your donation can help us send doctors, nurses, and essential medicines</strong> to the most neglected corners of West Bengal—where a clinic is miles away and affordability is out of reach. Whether it’s treating a fever, managing chronic illness, or responding to emergencies, <strong>your support keeps CureLine moving, healing, and saving lives. Donate today to bring healthcare to the heart of need—and hope to those who’ve gone unseen for far too long.</strong>
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <Dialog open={showForm} onOpenChange={setShowForm}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full transition-transform transform hover:scale-105">Donate to CureLine</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] p-0">
                    <DynamicDonationForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
