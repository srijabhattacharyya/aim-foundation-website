
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import InfoSection from "@/components/sections/InfoSection";
import MissionVision from "@/components/sections/MissionVision";
import AboutUs from "@/components/sections/AboutUs";
import DonateSection from "@/components/sections/DonateSection";
import Activities from "@/components/sections/Activities";
import Impact from "@/components/sections/Impact";
import Volunteer from "@/components/sections/Volunteer";
import Blog from "@/components/sections/Blog";
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
        <DonateSection />
        <Activities />
        <Impact />
        <Volunteer />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
