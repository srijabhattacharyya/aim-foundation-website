'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeartPulse } from 'lucide-react';
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import type { Metadata } from "next";

const DynamicDonationForm = dynamic(
  () => import('@/components/sections/donation-forms/CareCircleDonationForm'),
  {
    ssr: false,
    loading: () => (
      <div className="p-8">
        <Skeleton className="h-[500px] w-full" />
      </div>
    ),
  }
);

// ✅ Correct metadata (no 'url' inside twitter)
export const metadata: Metadata = {
  title: 'CareCircle by AIM Foundation | Healthcare for Kolkata',
  description:
    'CareCircle by AIM Foundation delivers free check-ups, medicines, and screenings to underserved communities in Kolkata, ensuring healthcare for all.',
  alternates: {
    canonical: 'https://aimindia.org.in/blog/carecircle-bringing-healing-to-the-city',
  },
  openGraph: {
    title: 'CareCircle by AIM Foundation | Healthcare for Kolkata',
    description:
      'CareCircle by AIM Foundation delivers free check-ups, medicines, and screenings to underserved communities in Kolkata, ensuring healthcare for all.',
    url: 'https://aimindia.org.in/blog/carecircle-bringing-healing-to-the-city',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'CareCircle health camp by AIM Foundation',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'CareCircle by AIM Foundation | Healthcare for Kolkata',
    description:
      'CareCircle by AIM Foundation delivers free check-ups, medicines, and screenings to underserved communities in Kolkata, ensuring healthcare for all.',
    images: ['https://aimindia.org.in/home.avif'],
  },
};

export default function CareCircleBlogPage() {
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
                src="/images/banner/carecircle.avif"
                alt="An urban health camp in Kolkata"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  CareCircle: Bringing Healing to the Heart of the City
                </h1>
              </div>
            </div>
          </header>

          {/* --- Main Blog Content --- */}
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">

                <p>
                  In the bustling metropolis of Kolkata—where the hum of traffic, the call of street vendors, and the rhythm of daily life form a vivid urban symphony—there exists another, quieter reality. In the narrow lanes and forgotten neighborhoods, countless individuals struggle daily for access to the most basic healthcare. That’s where <strong>CareCircle by AIM Foundation</strong> steps in.
                </p>

                <p>
                  CareCircle is a compassionate initiative that brings essential medical services directly to underserved communities. Through regular health camps, free consultations, and the distribution of medicines, AIM Foundation ensures that no one is denied the right to good health simply because of where they live or what they earn.
                </p>

                {/* --- CTA Section --- */}
                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">Your Donation, Their Lifeline</h2>
                  <p className="mt-4">
                    In the shadows of skyscrapers and shopping malls, there are thousands still waiting for the comfort of medical attention. With your support, CareCircle can continue to touch more lives and bring healing to the heart of the city.
                  </p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/carecircle">Support CareCircle Today</Link>
                  </Button>
                </div>

                {/* --- Final CTA --- */}
                <div className="text-center pt-8">
                  <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                    <HeartPulse /> Donate to CareCircle today and bring healing to the heart of the city.
                  </p>
                  <div className="mt-4 flex gap-4 justify-center">
                    <Button asChild><Link href="/carecircle">Donate</Link></Button>
                    <Button asChild variant="outline"><Link href="/volunteering">Volunteer</Link></Button>
                    <Button asChild variant="outline"><Link href="/corporate-social-responsibility">Collaborate</Link></Button>
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
              Donate to CareCircle
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
