
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

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/SoulCircleDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

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
    link: "/blog/soulcircle-24-7-mental-health-support",
    text: "SoulCircle: 24/7 Compassionate Mental Health Support",
    image: { src: "/images/projects/soulcircle/soulcircle1.avif", alt: "SoulCircle initiative", hint: "mental health peace", description: "Finding peace and support with SoulCircle"}
};

export default function SoulCircleClientPage() {
  const [showForm, setShowForm] = useState(false);
  const initiativeLists = [{ title: "Healthcare Initiatives", initiatives: healthcareInitiatives }];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/soulcircles.avif"
              alt="SoulCircle Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="mental health support"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                SoulCircle
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Safe Space to Talk and Heal
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">24/7 Emotional Support, Just a Chat Away</h2>
                    <div className="text-lg text-muted-foreground space-y-4 text-justify">
                        <p>
                            <Link href="https://soulcircle.aimindia.org.in/home" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">SoulCircle</Link> is an innovative <strong>AI-powered mental health support app</strong> created to provide accessible, compassionate, and judgment-free support for anyone experiencing emotional distress, stress, anxiety, loneliness, or other mental health challenges. It's a key part of our <Link href="/healthcare-initiatives" className="text-primary hover:underline">healthcare initiatives</Link>.
                        </p>
                        <p>
                            Whether you're struggling in silence, need someone to talk to, or just want daily emotional check-ins, <strong>SoulCircle's intelligent AI mental health counsellors</strong> are always available—24/7. These virtual companions are designed to <strong>listen empathetically, respond mindfully,</strong> and provide <strong>supportive guidance</strong> based on therapeutic frameworks and emotional well-being best practices.
                        </p>
                        <h3 className="text-2xl font-bold font-headline pt-4">SoulCircle is especially helpful for:</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>People who hesitate to seek traditional therapy</li>
                            <li>Those in regions with limited mental health resources</li>
                            <li>Individuals needing immediate emotional support at odd hours</li>
                            <li>Youth and students navigating emotional challenges</li>
                        </ul>
                        <h3 className="text-2xl font-bold font-headline pt-4">Key features include:</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Private, confidential conversations</strong> with an AI counsellor</li>
                            <li><strong>Mood tracking and journaling tools</strong></li>
                            <li><strong>Mindfulness prompts and stress-relief exercises</strong></li>
                        </ul>
                        <p>
                            In a world where mental health support is often hard to access, SoulCircle bridges the gap, creating a safe, stigma-free space where users can feel heard, supported, and guided toward emotional balance.
                        </p>
                        <h3 className="text-2xl font-bold font-headline pt-4">Be the Reason Someone Feels Heard Today</h3>
                        <p>
                          SoulCircle can offer 24/7 emotional care—free of stigma, barriers, or judgment—to those who need it most. Your <Link href="/individual-donation" className="text-primary hover:underline">donation</Link> helps us improve AI emotional intelligence, expand multilingual access, and reach more isolated individuals, especially students, youth, and those in underserved regions. <strong>Just ₹500 can fund a month of safe, compassionate support for someone silently battling anxiety, stress, or depression</strong>. Mental health is not a luxury—it’s a necessity. <strong>Help us make healing accessible to all. Donate now.</strong>
                        </p>
                        <div className="mt-8">
                            <Button asChild>
                                <Link href="https://soulcircle.aimindia.org.in/home" target="_blank" rel="noopener noreferrer">
                                    Connect SoulCircle
                                </Link>
                            </Button>
                        </div>
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
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to SoulCircle</Button>
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
