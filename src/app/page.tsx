import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/sections/AboutUs";
import MissionVision from "@/components/sections/MissionVision";
import DonateSection from "@/components/sections/DonateSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AboutUs />
        <MissionVision />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
}
