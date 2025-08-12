
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

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/CareCircleDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function CareCircleClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/projects/carecircle/carecircle1.webp"
              alt="CareCircle Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover brightness-50"
              data-ai-hint="urban health camp"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                CareCircle
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Because Every Life Deserves Care.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid md:grid-cols-3 gap-12">
                <InitiativeSidebar from="healthcare" />
                <div className="md:col-span-2">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Health Equity in Every Neighbourhood.</h2>
                    <div className="text-lg text-muted-foreground space-y-4 text-justify">
                      <p>
                        CareCircle is a collaborative urban health initiative by AIM Foundation, focused on delivering <strong>accessible and inclusive medical services</strong> to underserved communities across Kolkata. Through strategic partnerships with healthcare providers and community organizations, CareCircle organizes regular healthcare camps at key urban outreach centres such as <strong>Sarala Punyashram, Sarat Bose Road</strong>, and <strong>Boral Natunhat</strong>.
                      </p>
                      <p>
                        These camps are designed to reach <strong>marginalized urban populations</strong>, including daily wage workers, senior citizens, migrants, single mothers, and others who often fall through the cracks of the healthcare system. By bringing <strong>basic health services directly to localities</strong>, CareCircle eliminates common barriers like affordability, transportation challenges, and lack of awareness.
                      </p>
                      <h3 className="text-2xl font-bold font-headline pt-4">Each camp offers:</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>General health check-ups and consultations</li>
                        <li>Free distribution of essential medicines</li>
                        <li>Health screenings for blood pressure, diabetes, and other chronic conditions</li>
                        <li>Referrals to partner hospitals for further treatment</li>
                        <li>Awareness sessions on hygiene, nutrition, and disease prevention</li>
                      </ul>
                      <p>
                        What sets CareCircle apart is its holistic, community-based approach—fostering trust within neighborhoods, encouraging preventive care, and promoting health-seeking behavior among vulnerable urban residents. The program also empowers local volunteers and caregivers, turning every camp into an opportunity for both healing and education.
                      </p>
                      <p>
                        <strong>CareCircle ensures that health is not a privilege, but a shared right—accessible to all, regardless of income, identity, or background.</strong>
                      </p>
                      <h3 className="text-2xl font-bold font-headline pt-4">Bring Healing to the Heart of the City</h3>
                      <p>
                        In the shadows of urban progress, thousands still live without access to basic healthcare. <strong>Your donation to CareCircle can provide free medical check-ups, life-saving medicines, and preventive care</strong> to daily wage earners, elderly citizens, migrants, and single mothers who are too often overlooked. By supporting these local health camps, <strong>you’re not just funding treatment—you’re restoring dignity, reducing suffering, and building a healthier, more inclusive Kolkata. Donate today and become part of a circle of care that truly leaves no one behind.</strong>
                      </p>
                    </div>
                  </div>
                </div>
             <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to CareCircle</Button>
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
