
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import DonationForm from "@/components/sections/DonationForm";

export default function DigiEmpowerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="DigiEmpower Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="digital literacy children"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                DigiEmpower
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bridging the Digital Divide, Building Futures.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Unlocking Potential Through Technology</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    DigiEmpower, supported by Dhritiman Abilizing Infinity Foundation, promotes digital literacy among underprivileged and Adivasi children in Kolkata, Purba Bardhaman, and Jalpaiguri. Through computer training at Dhriti Abilizing Centres, AIM Foundation equips them with essential digital skills, bridging the digital divide and enabling future success.
                  </p>
                  <p>
                    Our program provides hands-on training in basic computer operations, internet usage, and essential software applications, opening up a world of information and opportunities for children who would otherwise be left behind in an increasingly digital world.
                  </p>
                  <p>
                    By fostering digital fluency, we empower these young minds to pursue higher education, secure better job prospects, and participate fully in modern society, creating a more inclusive and equitable future for all.
                  </p>
                </div>
              </div>
              
              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <DonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
