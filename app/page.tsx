
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import InfoSection from "@/components/sections/InfoSection";
import MissionVision from "@/components/sections/MissionVision";
import Activities from "@/components/sections/Activities";
import Volunteer from "@/components/sections/Volunteer";
import Blog from "@/components/sections/Blog";
import AboutUs from "@/components/sections/AboutUs";
import DonateSection from "@/components/sections/DonateSection";
import Impact from "@/components/sections/Impact";
import Patrons from "@/components/sections/Patrons";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <InfoSection />
        <MissionVision />
        <AboutUs />
        <Activities />
        <Impact />
        <Volunteer />
        <Blog />
        <Newsletter />
        <DonateSection />
        <Patrons />
        <Testimonials />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
