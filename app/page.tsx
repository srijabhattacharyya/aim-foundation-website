

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
import Programs from '@/components/sections/Programs';

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

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <InfoSection />
        <Programs />
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
