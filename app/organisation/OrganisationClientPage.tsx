
'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Ethos from "@/components/sections/Ethos";
import LegalRecognitions from "@/components/sections/LegalRecognitions";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const FootprintCarousel = dynamic(() => import('@/components/sections/FootprintCarousel'), {
    loading: () => <Skeleton className="h-[400px] w-full max-w-lg" />,
});


export default function OrganisationClientPage() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/organisation.avif"
              alt="Our Organisation Banner"
              width={1920}
              height={334}
              className="w-full h-auto object-cover"
              data-ai-hint="office team building"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                From Vision to Action
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Driven by purpose, creating impact through compassion.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">About Us</h2>
                <div className="mt-4 text-lg text-muted-foreground space-y-4 text-justify">
                    <p>
                    Since 2016, AIM Foundation has been a beacon of hope for underprivileged and marginalized families—walking beside them on their journey to dignity, self-reliance, and brighter possibilities. Rooted in compassion, our efforts span <Link href="/healthcare-initiatives" className="text-primary hover:underline">healthcare</Link>, <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link>, <Link href="/sustainability-initiatives" className="text-primary hover:underline">environmental protection</Link>, and the growth of <Link href="/gender-equality-initiative" className="text-primary hover:underline">women</Link> and <Link href="/childcare-initiatives" className="text-primary hover:underline">children</Link>.
                    </p>
                    <p>
                    At the heart of our mission is the unwavering belief that empowered women uplift entire communities. We strive to create a world where access to education, health, and a clean environment is not a privilege, but a right for all. With collaboration, care, and courage, AIM Foundation builds spaces where equality blossoms and futures are reshaped with hope.
                    </p>
                     <Button asChild className="mt-4">
                        <Link href="/profile">View Profile</Link>
                    </Button>
                </div>
              </div>
              <div className="md:w-1/2 w-full flex justify-center">
                  <FootprintCarousel />
              </div>
            </div>
          </div>
        </section>

        <Ethos />
        
      </main>
      <Footer />
    </div>
  );
}
