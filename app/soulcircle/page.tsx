
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/SoulCircleDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function SoulCirclePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="SoulCircle Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="mental health support"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                SoulCircle
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Safe Space to Talk and Heal
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6 md:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">24/7 Emotional Support, Just a Chat Away</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                    <p>
                        SoulCircle is an innovative <strong>AI-powered mental health support app</strong> created to provide accessible, compassionate, and judgment-free support for anyone experiencing emotional distress, stress, anxiety, loneliness, or other mental health challenges.
                    </p>
                    <p>
                        Whether you're struggling in silence, need someone to talk to, or just want daily emotional check-ins, <strong>SoulCircle's intelligent AI mental health counselors</strong> are always available—24/7. These virtual companions are designed to <strong>listen empathetically, respond mindfully,</strong> and provide <strong>supportive guidance</strong> based on therapeutic frameworks and emotional well-being best practices.
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
                        <li><strong>Private, confidential conversations</strong> with an AI counselor</li>
                        <li><strong>Mood tracking and journaling tools</strong></li>
                        <li><strong>Mindfulness prompts and stress-relief exercises</strong></li>
                    </ul>
                    <p>
                        In a world where mental health support is often hard to access, SoulCircle bridges the gap, creating a safe, stigma-free space where users can feel heard, supported, and guided toward emotional balance.
                    </p>
                    <h3 className="text-2xl font-bold font-headline pt-4">Be the Reason Someone Feels Heard Today</h3>
                    <p>
                       SoulCircle can offer 24/7 emotional care—free of stigma, barriers, or judgment—to those who need it most. Your donation helps us improve AI emotional intelligence, expand multilingual access, and reach more isolated individuals, especially students, youth, and those in underserved regions. <strong>Just ₹500 can fund a month of safe, compassionate support for someone silently battling anxiety, stress, or depression</strong>. Mental health is not a luxury—it’s a necessity. <strong>Help us make healing accessible to all. Donate now.</strong>
                    </p>
                     <div className="mt-8">
                        <Button disabled className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-not-allowed opacity-100">App is under construction</Button>
                     </div>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <Dialog open={showForm} onOpenChange={setShowForm}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full transition-transform transform hover:scale-105">Donate to SoulCircle</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                    <DynamicDonationForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
