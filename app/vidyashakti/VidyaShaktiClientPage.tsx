
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/VidyaShaktiDonationForm'), { 
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


export default function VidyaShaktiClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="VidyaShakti Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover brightness-50"
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
                            In many rural homes, a smartphone is the only classroom a child can access. <strong>Your donation can help us expand VidyaShakti</strong>—bringing AI-powered, multilingual learning to more remote students who lack quality teaching support. With just a click, a child can ask questions, receive tailored answers in their own language, and build the confidence to learn independently. <strong>Support VidyaShakti today</strong>, and help transform a mobile device into a gateway of hope, knowledge, and possibility for first-generation learners across rural India.
                          </p>
                           <div className="mt-8">
                            <Button disabled className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-not-allowed opacity-100">App is under construction</Button>
                          </div>
                        </div>
                    </div>
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
