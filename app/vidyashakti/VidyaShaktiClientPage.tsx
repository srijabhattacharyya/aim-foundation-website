
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import InitiativeSidebar from "@/components/layout/InitiativeSidebar";
import Link from "next/link";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/VidyaShaktiDonationForm'), { 
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
    link: "/blog/vidyashakti-ai-learning",
    text: "VidyaShakti: AI-Powered Learning for Rural Classrooms",
    image: { src: "/images/projects/vidyashakti/vidyashakti2.avif", alt: "VidyaShakti initiative", hint: "learning app student", description: "A student engaging with the VidyaShakti learning app"}
};

export default function VidyaShaktiClientPage() {
  const [showForm, setShowForm] = useState(false);
  const initiativeLists = [{ title: "Educational Initiatives", initiatives: educationalInitiatives }];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/vidyashakti.avif"
              alt="VidyaShakti Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="learning app student"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                VidyaShakti
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Empowering Rural Minds with Digital Wisdom.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">When Teachers Aren’t Nearby, VidyaShakti Is!</h2>
                        <div className="text-lg text-muted-foreground space-y-4 text-justify">
                           <p>
                            VidyaShakti is a multilingual educational app designed to support rural children and first-generation learners. While it may not be possible to provide quality teachers in every village, the widespread availability of smartphones and internet connectivity has opened new doors for accessible learning.
                          </p>
                          <p>
                            Through VidyaShakti, students from Class 5 to Class 12 can ask any academic question and receive AI-generated answers tailored to their class level and comprehension ability. What sets the app apart is its ability to deliver explanations in the student’s preferred language, ensuring clarity and better understanding.
                          </p>
                          <p>
                            This innovative platform bridges the educational gap by offering personalized, on-demand support—empowering rural students to learn independently, strengthen their academic foundation, and stay connected with quality education regardless of their location.
                          </p>
                          <p>
                            VidyaShakti is more than just an app; it is a lifeline for learners in remote areas, bringing the power of knowledge directly to their fingertips.
                          </p>
                          <h3 className="text-2xl font-bold font-headline pt-4">Put the Power of Learning in a Child’s Hands</h3>
                          <p>
                            In many rural homes, a smartphone is the only classroom a child can access. <strong>Your donation can help us expand VidyaShakti</strong>—bringing AI-powered, multilingual learning to more remote students who lack quality teaching support. With just a click, a child can ask questions, receive tailored answers in their own language, and build the confidence to learn independently. <strong>Support VidyaShakti today</strong>, and help transform a mobile device into a gateway of hope, knowledge, and opportunity for first-generation learners across rural India.
                          </p>
                           <div className="mt-8">
                            <Button asChild>
                              <Link href="https://vidyashakti.aimindia.org.in/" target="_blank" rel="noopener noreferrer">
                                Visit VidyaShakti
                              </Link>
                            </Button>
                          </div>
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
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to VidyaShakti</Button>
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
