
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

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/EmpowerEnglishDonationForm'), { 
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

const relatedResource = {
    link: "/blog/empower-english-story",
    text: "Confidence Begins with Conversation",
    image: { src: "/images/projects/empower-english/empower-english.avif", alt: "Empower English initiative", hint: "english speaking class", description: "Underprivileged students getting health drink during English classes"}
};

export default function EmpowerEnglishClientPage() {
  const [showForm, setShowForm] = useState(false);
  const initiativeLists = [{ title: "Educational Initiatives", initiatives: educationalInitiatives }];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="Empower English Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="english classroom students"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Empower English
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                From Silence to Self-Expression.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Confidence Begins with Conversation.</h2>
                        <div className="text-lg text-muted-foreground space-y-4 text-justify">
                        <p>
                            Empower English is a transformative initiative by the AIM Foundation that offers spoken English training to students from underserved communities in Kolkata, Purba Bardhaman, and Jalpaiguri. Recognizing the critical role of language in shaping academic and professional success, the program is designed to strengthen students’ communication skills and boost their self-confidence.
                        </p>
                        <p>
                            Many students in these regions face challenges due to a lack of exposure to proficient English instruction. Empower English bridges this gap by providing structured, interactive learning sessions that focus on practical speaking, listening, and comprehension skills. These classes help students express themselves more clearly, participate actively in their education, and prepare for future career opportunities.
                        </p>
                        <p>
                            The initiative not only improves language proficiency but also fosters a sense of self-assurance, enabling students to engage more fully in classrooms, interviews, and everyday conversations. By equipping them with essential communication tools, Empower English opens doors to higher education, employment, and social mobility.
                        </p>
                        <p>
                            Through this program, the AIM Foundation continues its mission of uplifting marginalized communities—creating pathways for personal growth, inclusion, and a more empowered future.
                        </p>
                        <h3 className="text-2xl font-bold font-headline pt-4">Give a Voice to Their Dreams</h3>
                        <p>
                            For many students in underserved communities, learning English isn’t just about language—it’s about confidence, opportunity, and belonging. <strong>Your donation can help provide trained instructors, learning materials, and digital access</strong> so these students can speak up, stand out, and succeed. Whether it’s for a college interview, a job application, or simply being heard in the classroom, every word they learn is a step toward a brighter future. <strong>Support Empower English today</strong>—and <strong>help unlock the power of communication for those who need it most.</strong>
                        </p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-1 md:order-last">
                  <InitiativeSidebar initiativeLists={initiativeLists} relatedResource={relatedResource} />
                </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
               <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Empower English</Button>
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
