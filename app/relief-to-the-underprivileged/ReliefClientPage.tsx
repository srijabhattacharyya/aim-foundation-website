
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/ReliefDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});


export default function ReliefClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/relief.jpg"
              alt="Relief for the Underprivileged Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover brightness-50"
              data-ai-hint="community support food"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Relief to the Underprivileged
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Providing Hope and Support in Times of Need.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Extending a Helping Hand, Restoring Dignity.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    Our Relief to the Underprivileged program is a cornerstone of our commitment to immediate and compassionate action. We provide essential support to individuals and families facing extreme hardship due to poverty, lack of resources, or sudden crises. This initiative is about more than just aid; it's about restoring hope and dignity.
                  </p>
                  <p>
                    We work to address the most urgent needs of marginalized communities, including those in remote villages, urban slums, and areas often overlooked by mainstream support systems.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Our relief efforts include:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Distribution of nutritious food and ration kits.</li>
                    <li>Provision of clean drinking water and sanitation supplies.</li>
                    <li>Distribution of clothing, blankets, and essential household items.</li>
                    <li>Support for shelter and basic living necessities.</li>
                  </ul>
                  <p>
                    By providing this crucial support, we help alleviate immediate suffering and create a foundation from which families can begin to rebuild their lives. Our goal is to ensure that no one is left behind and that everyone has access to the basic necessities required for a dignified life.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Be the Lifeline for Someone in Need</h3>
                  <p>
                    For many, a single meal, a warm blanket, or access to clean water can be a lifeline. Your donation provides immediate, tangible relief to those who have the least. You can help us reach more families, provide more meals, and offer a glimmer of hope in the darkest of times. Your support ensures that our helping hand can extend to every person who needs it.
                  </p>
                </div>
              </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Relief Efforts</Button>
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
