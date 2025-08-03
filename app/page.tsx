
import type { Metadata } from 'next';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import InfoSection from '../components/sections/InfoSection';
import AboutUs from '../components/sections/AboutUs';
import Impact from '../components/sections/Impact';
import dynamic from 'next/dynamic';
import HeroCarousel from '@/components/sections/HeroCarousel';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'AIM Foundation Hub - Building a Brighter Future, Together',
  description: 'We are committed to empowering communities through education, healthcare, and sustainable development.',
  alternates: {
    canonical: '/',
  },
};

const LatestAnnouncements = dynamic(() => import('@/components/sections/LatestAnnouncements'), { loading: () => <Skeleton className="h-[500px] w-full" /> });
const DonateSection = dynamic(() => import('@/components/sections/DonateSection'), { loading: () => <Skeleton className="h-[250px] w-full" /> });
const Volunteer = dynamic(() => import('@/components/sections/Volunteer'), { loading: () => <Skeleton className="h-[250px] w-full" /> });
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { loading: () => <Skeleton className="h-[400px] w-full" /> });
const Patrons = dynamic(() => import('@/components/sections/Patrons'), { loading: () => <Skeleton className="h-[400px] w-full" /> });
const Blog = dynamic(() => import('@/components/sections/Blog'), { loading: () => <Skeleton className="h-[500px] w-full" /> });
const Newsletter = dynamic(() => import('@/components/sections/Newsletter'), { loading: () => <Skeleton className="h-[300px] w-full" /> });

export default function HomePage() {
  return (
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
  );
}
