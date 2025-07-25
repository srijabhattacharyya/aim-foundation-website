
'use client';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/DonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

const donationProps = {
  title: "Krishti",
  subtitle: "FROM SKILL TO SELF-RELIANCE",
  amounts: [
    { value: "2500", label: "₹2500" },
    { value: "5000", label: "₹5000" },
    { value: "10000", label: "₹10000" },
    { value: "20000", label: "₹20000" },
  ],
  amountDescription: "SUPPORT A WOMAN'S ENTREPRENEURIAL JOURNEY",
};

export default function KrishtiPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Krishti Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="women entrepreneurs community"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Krishti
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                She Creates. Krishti Elevates.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Crafted by Her. Backed by Krishti.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                  <p>
                    Krishti is an empowerment initiative that builds on the foundation laid by SuiDhaga, guiding skilled women toward entrepreneurship. While SuiDhaga imparts tailoring and embroidery skills, Krishti takes it further—offering access to modern production infrastructure, collaborative workspaces, and crucial marketing support. Here, trained women are no longer just workers—they become creators, leaders, and businesswomen.
                  </p>
                  <p>
                    By connecting their traditional skills with contemporary platforms, Krishti helps these women launch their own micro-enterprises, reach wider markets, and earn dignified incomes. It’s not just about stitching garments; it’s about stitching stories of resilience, independence, and progress. Krishti is where skills blossom into sustainable livelihoods, and hope finds a path forward.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">She Learned to Sew—Now Let Her Soar</h3>
                  <p>
                    She mastered the skill. Now she needs the chance. Krishti bridges the gap between training and real livelihood, giving women access to modern production support and market exposure. Your contribution fuels her flight to financial freedom. <strong>Be the wind beneath her wings—donate to Krishti today.</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to Krishti</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
                  <DynamicDonationForm {...donationProps} />
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
