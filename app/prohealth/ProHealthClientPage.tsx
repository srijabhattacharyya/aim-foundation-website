
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeartPulse, Globe, Target } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicDonationForm = dynamic(
  () => import('@/components/sections/donation-forms/HealthcareDonationForm'),
  {
    ssr: false,
    loading: () => (
      <div className="p-8">
        <Skeleton className="h-[500px] w-full" />
      </div>
    ),
  }
);

export default function ProHealthClientPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          {/* --- Header Banner --- */}
          <header className="relative w-full h-auto">
            <div className="relative w-full">
              <Image
                src="/images/projects/carecircle/carecircle2.avif"
                alt="ProHealth initiative health camp"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-black/60 to-transparent">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge className="mb-4 bg-primary hover:bg-primary/90">Flagship Project</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  ProHealth: A $70,000 Strategic Investment in the Future of Kolkata
                </h1>
                <p className="text-xl md:text-2xl mt-2 font-medium opacity-90">
                  In Partnership with <strong>Children International, USA</strong>
                </p>
              </div>
            </div>
          </header>

          {/* --- Main Content --- */}
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                
                <p className="text-xl font-semibold text-primary">
                  AIM Foundation is proud to announce "ProHealth," a major strategic initiative launched in collaboration with Children International, USA. With a total investment of $70,000, this project is set to redefine healthcare delivery for the most vulnerable communities in Kolkata.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground flex items-center gap-2">
                  <Globe className="text-primary" /> A Global Partnership for Local Impact
                </h2>
                <p>
                  By joining forces with <strong>Children International, USA</strong>, AIM Foundation is combining global expertise with deep grassroots knowledge. This partnership represents more than just financial support; it is a commitment to long-term systemic change in how healthcare is accessed and delivered in urban underserved areas.
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground flex items-center gap-2">
                  <Target className="text-primary" /> Strategic Objectives of ProHealth
                </h2>
                <p>The ProHealth initiative focuses on four critical pillars of community well-being:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Comprehensive Health Screenings:</strong> Early detection of chronic and infectious diseases among children and families.</li>
                  <li><strong>Infrastructure Strengthening:</strong> Enhancing the capabilities of local health outreach centers with modern diagnostic tools.</li>
                  <li><strong>Nutrition & Growth Monitoring:</strong> Combating urban malnutrition through structured supplement programs and monitoring.</li>
                  <li><strong>Community Health Empowerment:</strong> Training local health champions to spread awareness and ensure health-seeking behavior.</li>
                </ul>

                <p>
                  This $70,000 investment will directly fund medical personnel, state-of-the-art diagnostic equipment, and life-saving medicines, ensuring that no child's future is compromised by preventable health issues.
                </p>

                {/* --- Impact Box --- */}
                <div className="bg-muted p-8 rounded-lg my-12 border-l-4 border-primary shadow-sm">
                  <h2 className="text-2xl font-bold font-headline text-foreground mb-4">Why This Investment Matters</h2>
                  <p>
                    In the dense urban landscape of Kolkata, millions of families live in "healthcare shadows"—areas where high-quality medical services are physically near but economically out of reach. ProHealth bridges this gap, ensuring that professional care is not a luxury, but a standardized right.
                  </p>
                </div>

                <h2 className="text-3xl font-bold font-headline text-foreground">A Shared Vision for the Future</h2>
                <p>
                  "ProHealth is a testament to what is possible when organizations with shared values come together," says the leadership at AIM Foundation. "This investment allows us to scale our impact significantly, moving from episodic relief to a model of sustainable health security for thousands of families."
                </p>

                {/* --- Final CTA --- */}
                <div className="text-center pt-12 border-t mt-12">
                  <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2 mb-6">
                    <HeartPulse /> Support our journey toward a healthier Kolkata.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button onClick={() => setShowForm(true)} size="lg">
                      Donate to Healthcare
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/healthcare-initiatives">All Health Initiatives</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/organisation">Our Mission</Link>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </article>
      </main>

      {/* --- Floating Donation Form --- */}
      <div className="fixed bottom-8 right-8 z-50">
        <Dialog open={showForm} onOpenChange={setShowForm}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="w-full transition-transform transform hover:scale-105 shadow-2xl rounded-full px-6 py-8 text-lg"
            >
              Support ProHealth
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] p-0 max-h-[90vh] overflow-y-auto">
            <DynamicDonationForm />
          </DialogContent>
        </Dialog>
      </div>

      <Footer />
    </div>
  );
}
