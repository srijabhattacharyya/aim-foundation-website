
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/EmpowerEnglishDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const educationalInitiatives = [
  { href: '/innocent-smiles', label: 'Innocent Smiles' },
  { href: '/inspire-eduLab', label: 'Inspire EduLab' },
  { href: '/eduaccess', label: 'EduAccess' },
  { href: '/empower-english', label: 'Empower English' },
  { href: '/digiempower', label: 'DigiEmpower' },
  { href: '/sheconnects', label: 'SheConnects' },
  { href: '/milieu', label: 'Milieu' },
  { href: '/vidyashakti', label: 'VidyaShakti' },
];

const otherInitiatives = [
    { href: '/healthcare-initiatives', label: 'Healthcare Initiatives' },
    { href: '/gender-equality-initiative', label: 'Gender Equality Initiatives' },
    { href: '/childcare-initiatives', label: 'Childcare Initiatives' },
    { href: '/sustainability-initiatives', label: 'Sustainability Initiatives' },
    { href: '/relief-to-the-underprivileged', label: 'Relief to the Underprivileged' },
    { href: '/disaster-management', label: 'Disaster Management' },
    { href: '/ignite-change-initiative', label: 'Ignite Change Initiative' },
];


export default function EmpowerEnglishClientPage() {
  const [showForm, setShowForm] = useState(false);

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
              className="w-full h-auto object-cover brightness-50"
              data-ai-hint="english classroom students"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
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
                 <aside className="md:col-span-1 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Educational Initiatives</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                            {educationalInitiatives.map((item) => (
                                <li key={item.href}>
                                <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                                    {item.label}
                                </Link>
                                </li>
                            ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Related Resources</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-40 w-full" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Other Initiatives</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {otherInitiatives.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </aside>
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
