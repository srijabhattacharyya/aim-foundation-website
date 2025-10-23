
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
import Link from 'next/link';

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/SheConnectsDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const educationalInitiatives = [
  { href: '/innocent-smiles?from=educational', label: 'Innocent Smiles' },
  { href: '/inspire-eduLab?from=educational', label: 'Inspire EduLab' },
  { href: '/eduaccess?from=educational', label: 'EduAccess' },
  { href: '/empower-english?from=educational', label: 'Empower English'},
  { href: '/digiempower?from=educational', label: 'DigiEmpower' },
  { href: '/sheconnects?from=educational', label: 'SheConnects' },
  { href: '/milieu?from=educational', label: 'Milieu' },
  { href: '/vidyashakti?from=educational', label: 'VidyaShakti' },
];

const genderEqualityInitiatives = [
    { href: '/sheconnects?from=gender-equality', label: 'SheConnects' },
    { href: '/cyclesafe?from=gender-equality', label: 'CycleSafe' },
    { href: '/detect?from=gender-equality', label: 'Detect' },
    { href: '/suidhaga?from=gender-equality', label: 'SuiDhaga' },
    { href: '/krishti?from=gender-equality', label: 'Krishti' },
];

const relatedResource = {
    link: "#",
    text: "Empowering Girls for a Digital Future",
    image: { src: "/images/projects/sheconnects/sheconnects1.avif", alt: "SheConnects initiative", hint: "digital literacy girls", description: "A digital literacy session in progress"}
};

export default function SheConnectsClientPage() {
    const [showForm, setShowForm] = useState(false);
    const searchParams = useSearchParams();
    const from = searchParams?.get('from') ?? 'educational';
    
    const initiativeLists = from === 'educational'
        ? [{ title: "Educational Initiatives", initiatives: educationalInitiatives }, { title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives }]
        : [{ title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives }, { title: "Educational Initiatives", initiatives: educationalInitiatives }];

    return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <section className="relative w-full">
              <div className="relative w-full">
                <Image
                  src="/images/banner/sheconnects.avif"
                  alt="SheConnects Banner"
                  width={1920}
                  height={580}
                  className="w-full h-auto object-cover"
                  data-ai-hint="women empowerment digital"
                  priority
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
                <div className="relative z-10 text-left">
                  <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    SheConnects
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Empowering Girls with Digital and Financial Skills
                  </p>
                </div>
              </div>
            </section>
    
            <section className="py-12 md:py-20 lg:py-24 bg-muted">
              <div className="container mx-auto px-4 md:px-6 relative">
                <div className="grid md:grid-cols-3 gap-12">
                   <div className="md:col-span-2">
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-bold font-headline">Fostering Independence and Leadership</h2>
                      <div className="text-lg text-muted-foreground space-y-4 text-justify">
                        <p>
                          SheConnects is a forward-thinking initiative by AIM Foundation that empowers adolescent girls and young women by providing them with crucial <strong>digital and financial literacy skills</strong>. This program is designed to bridge the gender gap in technology and finance, equipping participants with the tools they need to achieve personal and economic independence.
                        </p>
                        <p>
                          Through a series of engaging workshops and hands-on training sessions, SheConnects covers essential topics such as:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                          <li><strong>Digital Literacy:</strong> Basic computer skills, internet safety, and using digital tools for communication and learning.</li>
                          <li><strong>Financial Literacy:</strong> Budgeting, saving, banking, and understanding financial products.</li>
                          <li><strong>Leadership and Communication:</strong> Building confidence, public speaking, and teamwork skills.</li>
                        </ul>
                        <p>
                          By fostering these competencies, SheConnects helps girls build a strong foundation for their future, opening doors to higher <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link>, better employment opportunities, and active participation in the digital economy. The program not only enhances their skills but also instills a sense of confidence and agency, encouraging them to become leaders in their communities.
                        </p>
                        <h3 className="text-2xl font-bold font-headline pt-4">Your Support Empowers a Girl's Future</h3>
                        <p>
                          Your <Link href="/individual-donation" className="text-primary hover:underline">donation</Link> can provide a girl with the digital and financial training she needs to build an independent future. Help us equip the next generation of female leaders with the skills to succeed.
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
                      <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to SheConnects</Button>
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
