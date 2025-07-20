
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import TideShieldDonationForm from "@/components/sections/donation-forms/TideShieldDonationForm";

export default function TideShieldPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="TideShield Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="mangrove forest"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                TideShield
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Restoring Coastlines, Rebuilding Futures.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Guardians of the Coast</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    TideShield is a mangrove restoration initiative on Bali Island in the Sundarbans, launched to revive ecosystems damaged by cyclones Amphan and Yaas. By planting native mangrove species and involving local communities, the project strengthens coastal resilience, prevents erosion, and restores biodiversity along vulnerable shorelines.
                  </p>
                  <p>
                    Our goal is to create a natural shield against tidal surges and storms, protecting both the environment and the livelihoods of the coastal communities. We believe that by restoring these vital ecosystems, we can build a more sustainable and resilient future for the Sundarbans.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Support the Shield</h3>
                  <p>
                    Your donation helps us plant more mangroves, train local volunteers, and monitor the health of the restored forests. Together, we can protect these precious coastlines and the communities that depend on them.
                  </p>
                </div>
              </div>
              
              <div className="sticky top-24">
                <TideShieldDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
