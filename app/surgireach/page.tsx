
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import SurgiReachDonationForm from "@/components/sections/donation-forms/SurgiReachDonationForm";

export default function SurgiReachPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="SurgiReach Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="operating room surgery"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                SurgiReach
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Providing Life-Changing Surgeries, Restoring Hope.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Restoring Health, One Surgery at a Time.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    SurgiReach is AIM Foundation’s hospital partnership initiative providing free surgeries to economically disadvantaged individuals. Children aged 5 months to 14 years receive life-changing pediatric operations, while adults access essential procedures like kidney transplants and knee replacements. The program ensures critical medical care is available, regardless of financial limitations.
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <SurgiReachDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
