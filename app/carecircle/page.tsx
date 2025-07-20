
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import CareCircleDonationForm from "@/components/sections/donation-forms/CareCircleDonationForm";

export default function CareCirclePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="CareCircle Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="urban health camp"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                CareCircle
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Because Every Life Deserves Care.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Healthcare for the Heart of the City</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    CareCircle is a collaborative urban health initiative by AIM Foundation, focused on delivering accessible and inclusive medical services to underserved communities across Kolkata. Through strategic partnerships with healthcare providers and community organizations, CareCircle organizes regular healthcare camps at key urban outreach centres such as Sarala Punyashram, Sarat Bose Road, and Boral Natunhat.
                  </p>
                  <p>
                    These camps are designed to reach marginalized urban populations, including daily wage workers, senior citizens, migrants, single mothers, and others who often fall through the cracks of the healthcare system. By bringing basic health services directly to localities, CareCircle eliminates common barriers like affordability, transportation challenges, and lack of awareness.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Each camp offers:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>General health check-ups and consultations</li>
                    <li>Free distribution of essential medicines</li>
                    <li>Health screenings for blood pressure, diabetes, and other chronic conditions</li>
                    <li>Referrals to partner hospitals for further treatment</li>
                    <li>Awareness sessions on hygiene, nutrition, and disease prevention</li>
                  </ul>
                  <p>
                    What sets CareCircle apart is its holistic, community-based approach—fostering trust within neighborhoods, encouraging preventive care, and promoting health-seeking behavior among vulnerable urban residents. The program also empowers local volunteers and caregivers, turning every camp into an opportunity for both healing and education.
                  </p>
                  <p>
                    In a fast-paced city where inequality often defines access to care, CareCircle ensures that health is not a privilege, but a shared right—accessible to all, regardless of income, identity, or background.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Bring Healing to the Heart of the City</h3>
                  <p>
                    In the shadows of urban progress, thousands still live without access to basic healthcare. Your donation to CareCircle can provide free medical check-ups, life-saving medicines, and preventive care to daily wage earners, elderly citizens, migrants, and single mothers who are too often overlooked. By supporting these local health camps, you’re not just funding treatment—you’re restoring dignity, reducing suffering, and building a healthier, more inclusive Kolkata. Donate today and become part of a circle of care that truly leaves no one behind.
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <CareCircleDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
