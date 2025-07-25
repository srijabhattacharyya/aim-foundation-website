
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/EduAccessDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function EduAccessPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="EduAccess Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="online learning student"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                EduAccess
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bridging Distances, Building Futures
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Teaching Beyond Boundaries</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    Supported by Dhritiman Abilizing Infinity Foundation, EduAccess delivers quality education to rural West Bengal through expert-led online classes from a Kolkata studio. Covering subjects like English, Math, and Science, it empowers students in underserved areas with skills essential for academic success and future opportunities.
                  </p>
                  <p>
                    Our state-of-the-art studio allows experienced educators to connect with students in real-time, providing interactive and engaging lessons that transcend geographical barriers. We aim to bridge the educational gap between urban and rural areas, ensuring that every student has the chance to receive a high-quality education.
                  </p>
                   <p>
                    By leveraging technology, EduAccess creates a virtual classroom environment where students can ask questions, participate in discussions, and receive personalized attention, fostering a supportive and effective learning experience.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Bring a Classroom to a Village</h3>
                  <p>
                    Thousands of bright young minds in rural West Bengal are eager to learn—but lack access to quality teachers and resources. Your donation can help us expand EduAccess to more remote communities, provide digital learning tools, and ensure uninterrupted online education from our Kolkata-based studio. <strong>With your support, a child who once struggled to keep up can thrive, dream bigger, and build a better future.</strong> Help us bridge the education gap—<strong>donate today</strong><strong> and be the link between talent and opportunity.</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to EduAccess</Button>
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
