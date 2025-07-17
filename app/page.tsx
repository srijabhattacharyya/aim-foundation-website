import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/sections/AboutUs";
import MissionVision from "@/components/sections/MissionVision";
import Team from "@/components/sections/Team";

export default function OrganisationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AboutUs />
        <MissionVision />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
