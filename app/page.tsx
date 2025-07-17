
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import InfoSection from "@/components/sections/InfoSection";
import MissionVision from "@/components/sections/MissionVision";
import Activities from "@/components/sections/Activities";
import Volunteer from "@/components/sections/Volunteer";
import Blog from "@/components/sections/Blog";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <InfoSection />
        <MissionVision />
        <Activities />
        <Volunteer />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
