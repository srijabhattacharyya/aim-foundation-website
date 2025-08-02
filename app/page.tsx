

import type { Metadata } from 'next';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import InfoSection from '../components/sections/InfoSection';
import AboutUs from '../components/sections/AboutUs';
import Impact from '../components/sections/Impact';
import LatestAnnouncements from '../components/sections/LatestAnnouncements';
import DonateSection from '../components/sections/DonateSection';
import Volunteer from '../components/sections/Volunteer';
import dynamic from 'next/dynamic';
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: 'AIM Foundation Hub - Building a Brighter Future, Together',
  description: 'We are committed to empowering communities through education, healthcare, and sustainable development.',
  alternates: {
    canonical: '/',
  },
};

const Testimonials = dynamic(() => import('../components/sections/Testimonials'));
const Patrons = dynamic(() => import('../components/sections/Patrons'));
const Blog = dynamic(() => import('../components/sections/Blog'));
const Newsletter = dynamic(() => import('../components/sections/Newsletter'));
const HeroCarousel = dynamic(() => import('../components/sections/HeroCarousel'), {
  loading: () => <div className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto p-4"><Skeleton className="h-[200px] w-full" /></div>,
  ssr: false
});


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero>
        <HeroCarousel />
      </Hero>
      <main className="flex-grow">
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
  );
}
