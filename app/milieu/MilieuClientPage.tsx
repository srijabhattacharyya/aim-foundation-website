
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
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/MilieuDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const educationalInitiatives = [
  { href: '/innocent-smiles?from=educational', label: 'Innocent Smiles' },
  { href: '/inspire-eduLab?from=educational', label: 'Inspire EduLab' },
  { href: '/eduaccess?from=educational', label: 'EduAccess' },
  { href: '/empower-english?from=educational', label: 'Empower English'},
  { href: '/digiempower?from=educational', label: 'DigiEmpower' },
  { href: '/milieu?from=educational', label: 'Milieu' },
  { href: '/vidyashakti?from=educational', label: 'VidyaShakti' },
];

const childcareInitiatives = [
  { href: '/innocent-smiles?from=childcare', label: 'Innocent Smiles' },
  { href: '/milieu?from=childcare', label: 'Milieu' },
  { href: '/childfirst?from=childcare', label: 'ChildFirst' },
];

const relatedResource = {
    link: "/blog/nurturing-a-kinder-tomorrow-the-story-of-milieu",
    text: "Nurturing a Kinder Tomorrow: The Story of Milieu",
    image: { src: "/images/projects/milieu/milieu1.avif", alt: "Milieu initiative", hint: "children collaboration", description: "Children from diverse backgrounds learning together"},
};

export default function MilieuClientPage() {
    const [showForm, setShowForm] = useState(false);
    const searchParams = useSearchParams();
    const from = searchParams?.get('from') ?? 'educational';
    
    const initiativeLists = from === 'educational'
        ? [{ title: "Educational Initiatives", initiatives: educationalInitiatives }, { title: "Childcare Initiatives", initiatives: childcareInitiatives }]
        : [{ title: "Childcare Initiatives", initiatives: childcareInitiatives }, { title: "Educational Initiatives", initiatives: educationalInitiatives }];

    return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <section className="relative w-full">
              <div className="relative w-full">
                <Image
                  src="/images/banner/milieu.avif"
                  alt="Milieu Banner"
                  width={1920}
                  height={580}
                  className="w-full h-auto object-cover"
                  data-ai-hint="diverse children interacting"
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
                <div className="relative z-10 text-left">
                  <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Milieu
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Bridging Backgrounds, Building Bonds.
                  </p>
                </div>
              </div>
            </section>
    
            <section className="py-12 md:py-20 lg:py-24 bg-muted">
              <div className="container mx-auto px-4 md:px-6 relative">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">Shaping Conscious Citizens of Tomorrow.</h2>
                            <div className="text-lg text-muted-foreground space-y-4 text-justify">
                                <p>
                                    Milieu is a unique initiative that promotes holistic development in <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link> by fostering meaningful connections across diverse socio-economic backgrounds. The program brings together students from reputed schools and underprivileged communities, offering a shared space where learning, empathy, and mutual respect flourish.
                                </p>
                                <p>
                                    Through interactive sessions, collaborative activities, and open conversations, children engage with one another in ways that go beyond textbooks. These exchanges create opportunities for students to see the world through different lenses—helping privileged children develop humility and social awareness, while underprivileged children gain confidence and a sense of inclusion.
                                </p>
                                <p>
                                    Milieu helps to break down socio-economic barriers, replacing stereotypes with understanding and compassion. It instils values of respect, equality, and inclusivity in young minds at an early age—planting the seeds for a more united and empathetic future.
                                </p>
                                <p>
                                    By promoting emotional intelligence, communication, and shared learning, Milieu builds a sense of community and connectedness, empowering all children involved to grow into open-minded, socially responsible individuals who value diversity and collective well-being.
                                </p>
                                <h3 className="text-2xl font-bold font-headline pt-4">Help Children Learn Beyond Boundaries</h3>
                                <p>
                                  In every Milieu session, a child discovers empathy, breaks a bias, or finds the courage to connect across differences. <strong>Your <Link href="/individual-donation" className="text-primary hover:underline">donation</Link> can help us organize more inclusive workshops, provide transportation, materials, and safe spaces</strong> where children from all walks of life learn together, grow together, and inspire each other. <strong>Support Milieu today</strong> to build bridges of understanding and shape a generation that sees unity in diversity. <strong>Your kindness can nurture a more compassionate tomorrow—one child at a time.</strong>
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
                      <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Milieu</Button>
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
