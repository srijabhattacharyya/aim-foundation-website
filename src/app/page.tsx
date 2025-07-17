import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import InfoSection from "@/components/sections/InfoSection";
import AboutUs from "@/components/sections/AboutUs";
import MissionVision from "@/components/sections/MissionVision";
import Impact from "@/components/sections/Impact";
import Activities from "@/components/sections/Activities";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Blog from "@/components/sections/Blog";
import Volunteer from "@/components/sections/Volunteer";
import Newsletter from "@/components/sections/Newsletter";
import Patrons from "@/components/sections/Patrons";
import DonateSection from "@/components/sections/DonateSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <InfoSection />
        <AboutUs />
        <MissionVision />
        <Impact />
        <Activities />
        <Testimonials />
        <Patrons />
        <DonateSection />
        <Blog />
        <Volunteer />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
