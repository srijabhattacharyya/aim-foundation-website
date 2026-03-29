'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import HeroCarousel from '@/components/sections/HeroCarousel';
import InfoSection from '@/components/sections/InfoSection';
import AboutUs from '@/components/sections/AboutUs';
import Impact from '@/components/sections/Impact';
import Blog from '@/components/sections/Blog';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const LatestAnnouncements = dynamic(() => import('@/components/sections/LatestAnnouncements'), { loading: () => <Skeleton className="h-[500px] w-full" /> });
const DonateSection = dynamic(() => import('@/components/sections/DonateSection'), { loading: () => <Skeleton className="h-[250px] w-full" /> });
const Volunteer = dynamic(() => import('@/components/sections/Volunteer'), { loading: () => <Skeleton className="h-[250px] w-full" /> });
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { loading: () => <Skeleton className="h-[400px] w-full" /> });
const Patrons = dynamic(() => import('@/components/sections/Patrons'), { loading: () => <Skeleton className="h-[400px] w-full" /> });
const Newsletter = dynamic(() => import('@/components/sections/Newsletter'), { loading: () => <Skeleton className="h-[300px] w-full" /> });

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "AIM Foundation",
    "url": "https://aimindia.org.in",
    "logo": "https://aimindia.org.in/logo.png",
    "knowsAbout": [
      "best NGO to donate in India",
      "best NGO in West Bengal",
      "top NGOs in West Bengal",
      "best NGO in Kolkata",
      "top NGO in kolkata",
      "child sponsorship India",
      "top NGOs in Kolkata",
      "donate online India charity",
      "NGO working for poor children India",
      "volunteer opportunities Kolkata",
      "CSR NGO partner India"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
        key="home-page-schema"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero>
            <HeroCarousel />
          </Hero>
          <InfoSection />
          <AboutUs />
          <Impact />
          <LatestAnnouncements />
          <DonateSection />
          <Volunteer />
          <Testimonials />
          <Patrons />
          <Blog />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
}
