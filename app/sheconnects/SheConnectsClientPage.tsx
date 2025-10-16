
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
    link: "/blog/project-sheconnects",
    text: "Project SheConnects: Empowering Women Through Technology",
    image: { src: "/images/projects/sheconnects/sheconnects1.avif", alt: "SheConnects initiative", hint: "women technology", description: "Women learning digital skills in a SheConnects workshop"}
};

export default function SheConnectsClientPage() {
    const [showForm, setShowForm] = useState(false);
    const searchParams = useSearchParams();
    const from = searchParams.get('from') || 'educational';
    
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
                  src="https://placehold.co/1920x580.png"
                  alt="SheConnects Banner"
                  width={1920}
                  height={580}
                  className="w-full h-auto object-cover"
                  data-ai-hint="women using technology"
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
                <div className="relative z-10 text-left">
                  <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    SheConnects
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Bridging Women to the Digital World.
                  </p>
                </div>
              </div>
            </section>
    
            <section className="py-12 md:py-20 lg:py-24 bg-muted">
              <div className="container mx-auto px-4 md:px-6 relative">
                 <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">Empowering Women Through Technology.</h2>
                            <div className="text-lg text-muted-foreground space-y-4 text-justify">
                               <p>
                                Project SheConnects is a women-centric initiative designed to promote digital empowerment and financial independence. The program provides comprehensive digital literacy training to women from underserved communities, enabling them to harness the power of technology to improve their livelihoods. Participants learn how to create and manage social media profiles, market their products online, and navigate e-commerce platforms effectively.
                              </p>
                              <p>
                                Recognizing that digital access must be paired with digital safety, SheConnects also conducts awareness sessions on cyber safety and online security. These sessions teach women how to protect their personal data, handle online transactions securely, and identify and avoid cyber threats—empowering them to participate in the digital world with confidence.
                              </p>
                              <p>
                                By combining technical skills with real-world business applications, SheConnects not only equips women to boost their income but also nurtures self-reliance and entrepreneurial spirit. Whether they are homemakers, artisans, or small-scale entrepreneurs, the program gives them the tools and confidence to reach wider markets and grow sustainably.
                              </p>
                              <p>
                                Through its holistic approach, Project SheConnects plays a vital role in closing the digital gender gap and fostering inclusive economic growth. It is a step toward building a more equitable society, where women are not just connected—but empowered.
                              </p>
                              <h3 className="text-2xl font-bold font-headline pt-4">Empower a Woman, Transform a Community</h3>
                              <p>
                                When women gain digital skills, entire communities thrive. <strong>Your donation can help provide laptops, internet access, and training sessions</strong> that equip women from underserved backgrounds to start or grow their businesses online. With tools to market their products, manage finances, and stay cyber-safe, these women gain more than knowledge—they gain independence. <strong>Support Project SheConnects today</strong> and be the reason a woman becomes digitally empowered, financially secure, and fearlessly connected to opportunity.
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
