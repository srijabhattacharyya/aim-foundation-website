
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import SoulCircleDonationForm from "@/components/sections/donation-forms/SoulCircleDonationForm";

export default function SoulCirclePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="SoulCircle Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="mental health support"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                SoulCircle
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Your Safe Space to Talk and Heal.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">24/7 Emotional Support, Just a Chat Away</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                  <p>
                    SoulCircle is an AI-driven mental health support app offering round-the-clock emotional assistance. It connects users with compassionate AI counselors for private, judgment-free conversations.
                  </p>
                  <p>
                    Whether dealing with stress, anxiety, or loneliness, SoulCircle provides a safe digital space for support, reflection, and healing—empowering users to prioritize mental well-being anytime, anywhere.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Your Support Matters</h3>
                  <p>
                    Help us maintain and expand this vital service, ensuring that anyone, anywhere can find the support they need.
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <SoulCircleDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
