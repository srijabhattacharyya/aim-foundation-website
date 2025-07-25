
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import InfoSection from '../components/sections/InfoSection';
import AboutUs from '../components/sections/AboutUs';
import Impact from '../components/sections/Impact';
import Activities from '../components/sections/Activities';
import DonateSection from '../components/sections/DonateSection';
import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('../components/sections/Testimonials'));
const Patrons = dynamic(() => import('../components/sections/Patrons'));
const Blog = dynamic(() => import('../components/sections/Blog'));
const Volunteer = dynamic(() => import('../components/sections/Volunteer'));
const Newsletter = dynamic(() => import('../components/sections/Newsletter'));


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <main className="flex-grow">
        <InfoSection />
        <AboutUs />
        <Impact />
        <Activities />
        <DonateSection />
        <Testimonials />
        <Patrons />
        <Blog />
        <Volunteer />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
