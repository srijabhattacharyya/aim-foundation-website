
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

const DynamicDonationForm = dynamic(() => import('../../components/sections/donation-forms/SightHopeDonationForm'), { 
    ssr: false,
    loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div> 
});

export default function SightHopeClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/sighthope.avif"
              alt="SightHope Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="vision eye care"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                SightHope
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bringing Light to Lives
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
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Restoring Sight, Rekindling Dreams.</h2>
                  <div className="text-lg text-muted-foreground space-y-4 text-justify">
                    <p>
                      SightHope is a transformative eye health initiative by AIM Foundation, launched to address the widespread but often overlooked burden of <strong>avoidable vision loss</strong> among underserved populations. In partnership with some of Kolkata’s most renowned eye hospitals—including Sushrut Eye Foundation, B. B. Eye Foundation, and the Hope Foundation—SightHope <strong>brings high-quality, no-cost eye care</strong> to those who need it most but can least afford it.
                    </p>
                    <p>
                      For many individuals living in urban slums, rural villages, and remote areas, poor eyesight is not just a health issue—it’s a barrier to education, employment, mobility, and dignity. Children struggle in school, adults lose livelihoods, and elders face isolation, all due to conditions that are often preventable or easily treatable, such as refractive errors or cataracts.
                    </p>
                    <p>
                      SightHope steps in to fill this critical gap by organizing regular eye care camps that provide:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Comprehensive vision screenings</strong></li>
                      <li><strong>Diagnosis and treatment of common eye conditions</strong></li>
                      <li><strong>Prescription and distribution of corrective lenses</strong></li>
                      <li><strong>Minor procedures for infections and irritations</strong></li>
                      <li><strong>Free cataract surgeries for eligible individuals</strong></li>
                      <li><strong>Referrals to partner hospitals for specialized care</strong></li>
                    </ul>
                    <p>
                      Each camp is conducted by qualified ophthalmologists and healthcare staff from our partner hospitals, ensuring trusted expertise and continuity of care. Camps are held at accessible community hubs, including schools, health centres, and even temporary rural setups—bringing care directly to the doorstep of marginalized communities.
                    </p>
                    <p>
                      By restoring sight, SightHope restores much more:
                    </p>
                    <ul className="list-none space-y-2">
                      <li>🔹 <strong>The freedom to move confidently</strong></li>
                      <li>🔹 <strong>The ability to work and earn</strong></li>
                      <li>🔹 <strong>The joy of seeing loved ones clearly again</strong></li>
                    </ul>
                    <p>
                      Above all, it restores hope—a renewed sense of possibility for people who had long accepted poor vision as their fate.
                    </p>
                    <p>
                      Through this powerful collaboration between community outreach and medical excellence, SightHope is not just changing lives—it’s helping people see a better future.
                    </p>
                    <h3 className="text-2xl font-bold font-headline pt-4">Restore Sight, Renew Lives</h3>
                    <p>
                      For millions, blurry vision means missed opportunities, lost income, and silent suffering. With just ₹300, you can provide the gift of spectacles to someone in need. A donation of ₹3000 can fund a life-changing cataract surgery. Your contribution to SightHope empowers children to succeed in school, enables elders to regain independence, and allows workers to return to their jobs with confidence. <strong>Vision is more than just sight—it’s dignity, freedom, and hope.</strong> Give someone the gift of seeing the world clearly again. <strong>Donate now—because no one should live in the dark when the cure is within reach.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed bottom-8 right-8 z-50">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg">Donate to SightHope</Button>
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
