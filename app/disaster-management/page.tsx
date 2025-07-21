
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import DisasterManagementDonationForm from "@/components/sections/donation-forms/DisasterManagementDonationForm";

export default function DisasterManagementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Disaster Management Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="disaster relief team"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Disaster Management
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Rapid Response, Lasting Recovery.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Standing Strong in Times of Crisis.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    When disaster strikes, AIM Foundation is on the front lines, providing swift and effective relief to affected communities. Our disaster management program is designed to address the immediate needs of those impacted by natural calamities like floods, cyclones, and earthquakes, as well as other emergencies.
                  </p>
                  <p>
                    Our rapid response teams work tirelessly to deliver critical aid where it's needed most, ensuring that vulnerable populations receive the support necessary to survive and recover.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Our Emergency Relief Services Include:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Distribution of emergency food, clean water, and hygiene kits.</li>
                    <li>Provision of temporary shelter and essential supplies like blankets and clothing.</li>
                    <li>Deployment of mobile medical units to provide first aid and essential healthcare.</li>
                    <li>Psychosocial support to help individuals cope with trauma and stress.</li>
                  </ul>
                  <p>
                    Beyond immediate relief, we are committed to long-term recovery and resilience-building. We work with communities to rebuild infrastructure, restore livelihoods, and implement disaster preparedness programs to mitigate the impact of future crises. Our goal is not just to help people survive, but to help them rebuild their lives with dignity and hope.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Be a Beacon of Hope in the Storm</h3>
                  <p>
                    Your contribution can provide life-saving assistance to a family devastated by disaster. A donation today can provide emergency shelter, a week's worth of food, or critical medical supplies. Stand with us as we stand with them. <strong>Your support can turn despair into hope and help communities rebuild stronger than before.</strong>
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <DisasterManagementDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
