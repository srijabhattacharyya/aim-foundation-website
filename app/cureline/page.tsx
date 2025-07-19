
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import CureLineDonationForm from "@/components/sections/donation-forms/CureLineDonationForm";

export default function CureLinePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="CureLine Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="rural healthcare"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                CureLine
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bringing Healthcare to the Heart of Communities.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Reaching the Unreachable with Care.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    CureLine is AIM Foundation’s rural and remote healthcare outreach program that delivers essential medical services to underserved communities. Through regular health camps, it offers free check-ups, consultations, medicines, and health education in villages, forest-fringe settlements, and disaster-hit areas—bridging critical care gaps and ensuring health access regardless of location or income.
                  </p>
                  <p>
                    Our mobile medical teams travel to the most remote areas, bringing quality healthcare to doorsteps where it's needed most. We focus on preventive care, maternal and child health, and treatment for common illnesses, ensuring that even the most isolated families receive the attention they deserve.
                  </p>
                  <p>
                    By organizing these camps, CureLine not only treats immediate health issues but also empowers communities with knowledge about hygiene, nutrition, and disease prevention, fostering long-term well-being and resilience.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Your Support Saves Lives</h3>
                  <p>
                    In remote villages, a simple illness can become a life-threatening emergency. <strong>Your donation helps us equip our mobile health camps with essential medicines, diagnostic tools, and medical supplies.</strong> With your support, we can reach more villages, treat more patients, and provide critical health education that prevents disease. <strong>Donate to CureLine today</strong> and help us deliver a lifeline of health and hope to those who have nowhere else to turn.
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <CureLineDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
