
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

const DynamicDonationForm = dynamic(() => import('@/components/sections/donation-forms/OralScanDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function OralScanClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/oralscan.avif"
              alt="OralScan Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="dental health checkup"
              quality={100}
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                OralScan
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Early Detection for a Healthy Smile, a Healthy Life.
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
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Screening Today for a Healthier Tomorrow.</h2>
                  <div className="text-lg text-muted-foreground space-y-4 text-justify">
                    <p>
                      OralScan is a crucial initiative by AIM Foundation focused on <strong>early detection of oral cancer</strong> through free screening camps in underserved communities. Oral cancer is a significant health threat in India, often diagnosed late due to lack of awareness and access to medical care. OralScan directly confronts this challenge by bringing vital services to those who need them most.
                    </p>
                    <p>
                      Our camps provide more than just screenings. We focus on comprehensive community engagement through:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Free, non-invasive oral cancer screenings</strong> conducted by healthcare professionals.</li>
                      <li><strong>Public awareness campaigns</strong> to educate on the risk factors, including tobacco and alcohol consumption.</li>
                      <li><strong>Guidance on oral hygiene</strong> practices to promote long-term health.</li>
                      <li><strong>Counseling and support</strong> for individuals identified with potential risks.</li>
                      <li><strong>Referrals for further diagnosis and treatment</strong>, ensuring a continuum of care.</li>
                    </ul>
                    <p>
                      By focusing on early detection, OralScan significantly improves the chances of successful treatment and saves lives. The program is built on the belief that preventive care and education are the most powerful tools in fighting this preventable disease. We work to break down barriers of fear and stigma, encouraging community members to take proactive steps for their health.
                    </p>
                    <p>
                      Join us in our mission to combat oral cancer. Your support helps us reach more villages, screen more people, and spread the life-saving message of early detection.
                    </p>
                    <h3 className="text-2xl font-bold font-headline pt-4">Your Support Can Save a Life</h3>
                    <p>
                      A simple screening can be the difference between life and death. <strong>Your donation to OralScan funds free screening camps, educational materials, and follow-up care for at-risk individuals</strong> in communities with little to no access to dental and health services. Help us detect cancer early and give someone a chance for a healthy future. <strong>Donate today and be a part of the fight against oral cancer.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to OralScan</Button>
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
