
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
import Link from "next/link";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/DetectDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const genderEqualityInitiatives = [
    { href: '/sheconnects?from=gender-equality', label: 'SheConnects' },
    { href: '/cyclesafe?from=gender-equality', label: 'CycleSafe' },
    { href: '/detect?from=gender-equality', label: 'Detect' },
    { href: '/suidhaga?from=gender-equality', label: 'SuiDhaga' },
    { href: '/krishti?from=gender-equality', label: 'Krishti' },
];

const healthcareInitiatives = [
    { href: '/cureline?from=healthcare', label: 'CureLine' },
    { href: '/carecircle?from=healthcare', label: 'CareCircle' },
    { href: '/childfirst?from=healthcare', label: 'ChildFirst' },
    { href: '/detect?from=healthcare', label: 'Detect' },
    { href: '/sighthope?from=healthcare', label: 'SightHope' },
    { href: '/oralscan?from=healthcare', label: 'OralScan' },
    { href: '/cyclesafe?from=healthcare', label: 'CycleSafe' },
    { href: '/soulcircle?from=healthcare', label: 'SoulCircle' },
];

const relatedResource = {
    link: "/blog/the-quiet-revolution-in-womens-health",
    text: "The Quiet Revolution in Women’s Health: The Story of Project Detect",
    image: { src: "/images/projects/detect/detect1.avif", alt: "Detect initiative", hint: "cervical cancer screening", description: "Cervical cancer screening camp in progress."}
};

export default function DetectClientPage() {
    const [showForm, setShowForm] = useState(false);
    const searchParams = useSearchParams();
    const from = searchParams?.get('from') ?? 'healthcare';  // ✅ Safe handling

    const initiativeLists = from === 'gender-equality'
        ? [{ title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives }, { title: "Healthcare Initiatives", initiatives: healthcareInitiatives }]
        : [{ title: "Healthcare Initiatives", initiatives: healthcareInitiatives }, { title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives }];

    return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <section className="relative w-full">
              <div className="relative w-full">
                <Image
                  src="/images/banner/detect1.avif"
                  alt="Detect Banner"
                  width={1920}
                  height={580}
                  className="w-full h-auto object-cover"
                  data-ai-hint="women health checkup"
                  priority
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
                <div className="relative z-10 text-left">
                  <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Detect
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Catching Cancer Before It Catches Her.
                  </p>
                </div>
              </div>
            </section>
    
            <section className="py-12 md:py-20 lg:py-24 bg-muted">
              <div className="container mx-auto px-4 md:px-6 relative">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">Empowering Women Through Early Detection.</h2>
                            <div className="text-lg text-muted-foreground space-y-4 text-justify">
                              <p>
                                Project Detect empowers rural women through <strong>cervical health <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link> and cancer screenings</strong>. In collaboration with Chittaranjan National Cancer Institute and the West Bengal government, it organizes community camps and trains frontline workers district by district—starting with Howrah—to promote early detection, break taboos, and build awareness for women’s reproductive health. This initiative is a vital part of our <Link href="/gender-equality-initiative" className="text-primary hover:underline">Gender Equality</Link> and <Link href="/healthcare-initiatives" className="text-primary hover:underline">Healthcare</Link> programs.
                              </p>
                              <p>
                                By bringing these vital services directly to the communities, we overcome barriers of distance, cost, and social stigma, ensuring that women have the knowledge and access to care they need to protect their health.
                              </p>
                              <h3 className="text-2xl font-bold font-headline pt-4">Your Support Saves Lives</h3>
                              <p>
                                Cervical cancer is preventable and treatable when caught early, yet millions of women in rural India lack access to basic screenings. Your <Link href="/individual-donation" className="text-primary hover:underline">donation</Link> can change that. <strong>A contribution of just ₹1500 can sponsor a life-saving screening for one woman</strong>, giving her the chance for early treatment and a healthy future. By funding our community camps and training health workers, you’re not just detecting cancer—you’re building a shield of awareness and hope. <strong>Donate today and empower a woman to live a life free from fear.</strong>
                              </p>
                            </div>
                        </div>
                    </div>
                     <div className="hidden md:block md:col-span-1">
                      <InitiativeSidebar initiativeLists={initiativeLists} relatedResource={relatedResource} />
                    </div>
                </div>
                <div className="fixed bottom-8 right-8 z-50">
                  <Dialog open={showForm} onOpenChange={setShowForm}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Detect</Button>
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
