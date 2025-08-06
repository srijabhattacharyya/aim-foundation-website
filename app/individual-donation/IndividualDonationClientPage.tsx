
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/IndividualDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function IndividualDonationClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/donation.jpg"
              alt="Smile Warriors"
              width={1920}
              height={334}
              className="w-full h-auto object-cover brightness-75"
              data-ai-hint="volunteer children education"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white p-8 md:p-12">
            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                THE WORLD NEEDS SMILE WARRIORS
              </h1>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">AIM Foundation is a people-driven organization.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    We run on the generosity of individuals like you. Your contribution, no matter the size, fuels our mission to bring healthcare, education, and hope to underserved communities. By becoming a donor, you become a Smile Warrior—an essential part of a movement creating lasting change.
                  </p>
                  <p>
                    Your donation can provide a child with books, fund a life-saving surgery, support a woman's journey to financial independence, or help us plant trees for a greener tomorrow. Every rupee is a step towards a more equitable and compassionate world.
                  </p>
                </div>
                <Dialog open={showForm} onOpenChange={setShowForm}>
                    <DialogTrigger asChild>
                    <Button size="lg" className="mt-6 transition-transform transform hover:scale-105 shadow-2xl rounded-full px-8 py-6 text-lg">
                        Donate Now
                    </Button>
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
