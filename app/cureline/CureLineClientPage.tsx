
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
import Link from "next/link";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/CureLineDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

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
    link: "/blog/cureline-bringing-healthcare-to-the-last-mile",
    text: "CureLine: Bringing Healthcare to the Last Mile",
    image: { src: "/images/projects/cureline/cureline2.avif", alt: "CureLine initiative", hint: "rural healthcare camp", description: "Health Camp at Bali Island, Sundarbans"}
};


export default function CureLineClientPage() {
  const [showForm, setShowForm] = useState(false);
  const initiativeLists = [{ title: "Healthcare Initiatives", initiatives: healthcareInitiatives }];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/cureline.avif"
              alt="CureLine Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="rural healthcare"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/10 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                CureLine
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bringing Healthcare to the Heart of Communities.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Reaching the Unreachable with Care.</h2>
                  <div className="text-lg text-muted-foreground space-y-4 text-justify">
                    <p>
                      CureLine is a frontline <Link href="/healthcare-initiatives" className="text-primary hover:underline">healthcare initiative</Link> by AIM Foundation, designed to deliver <strong>essential medical services</strong> to communities that are often neglected by mainstream health systems. Through regular, on-ground <strong>healthcare camps</strong>, CureLine serves <strong>remote villages, forest-fringe settlements,</strong> and <strong><Link href="/disaster-management" className="text-primary hover:underline">disaster-affected regions</Link></strong> across West Bengal and beyond.
                    </p>
                    <p>
                      Many of these regions suffer from <strong>limited or no access to registered medical practitioners</strong>, diagnostic facilities, or affordable treatment options. CureLine fills this critical gap by <strong>bringing doctors, nurses, and essential medicines directly to the people</strong>, eliminating the barriers of distance, cost, and awareness.
                    </p>
                    <h3 className="text-2xl font-bold font-headline pt-4">Key Services Offered:</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>General health check-ups and medical consultations</li>
                      <li>Diagnosis and treatment of common ailments</li>
                      <li>Monitoring of chronic conditions like diabetes and hypertension</li>
                      <li>Maternal and <Link href="/childcare-initiatives" className="text-primary hover:underline">child healthcare</Link> support</li>
                      <li>Free distribution of prescribed medicines and supplements</li>
                      <li>Health <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link> sessions on hygiene, nutrition, and disease prevention</li>
                    </ul>
                    <p>
                      Camps are conducted at local community hubs such as schools, village centres, and makeshift clinics—often in challenging terrains like the Sundarbans delta, the tribal villages near Gorumara, and flood-prone areas.
                    </p>
                    <p>
                      In times of crisis, such as cyclones, floods, or epidemics, CureLine plays a crucial role in offering emergency medical relief, first aid, and recovery care. It works in tandem with local <Link href="/volunteering" className="text-primary hover:underline">volunteers</Link>, health workers, and panchayat leaders to ensure every camp is tailored to the community’s specific health needs.
                    </p>
                    <p>
                      More than just treatment, CureLine builds trust. It promotes regular health-seeking behaviour, improves awareness, and helps communities take ownership of their well-being. With each outreach, the initiative strengthens the belief that quality healthcare is a right—not a privilege.
                    </p>
                    <h3 className="text-2xl font-bold font-headline pt-4">Be the Lifeline Where Healthcare Doesn’t Reach</h3>
                    <p>
                      For families in remote villages, forest edges, and disaster-hit zones, CureLine may be the only source of medical care they ever receive. <strong>Your <Link href="/individual-donation" className="text-primary hover:underline">donation can help us</Link> send doctors, nurses, and essential medicines</strong> to the most neglected corners of West Bengal—where a clinic is miles away and affordability is out of reach. Whether it’s treating a fever, managing chronic illness, or responding to emergencies, <strong>your support keeps CureLine moving, healing, and saving lives. Donate today to bring healthcare to the heart of need—and hope to those who’ve gone unseen for far too long.</strong>
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
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to CureLine</Button>
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
