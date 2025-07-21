
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import RootsOfChangeDonationForm from "@/components/sections/donation-forms/RootsOfChangeDonationForm";

export default function RootsOfChangePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Roots of Change Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="environmental education"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Roots of Change
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Planting knowledge, growing change
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Because change begins with understanding</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                  <p>
                    Roots of Change is AIM Foundation’s flagship environmental education initiative, rooted in the belief that lasting transformation begins with knowledge. Our mission is to cultivate deep environmental awareness and nurture sustainable habits in communities that are most vulnerable to climate change.
                  </p>
                  <p>
                    Through expert-led seminars, interactive workshops, and engaging educational materials, Roots of Change empowers students, local leaders, and everyday citizens to become informed stewards of the planet. We work closely with schools, community centers, and local organizations to spark conversations, build understanding, and inspire action—from reducing plastic use to protecting local ecosystems.
                  </p>
                  <p>
                    This is more than just education—it’s about planting the seeds of responsibility and hope, and watching them grow into a greener, more resilient tomorrow. By starting at the grassroots level, we aim to build a future where environmental care is second nature, and every individual sees themselves as part of the solution.
                  </p>
                  <p>
                    Because real change always starts at the roots. 🌱
                  </p>
                </div>
              </div>
              
              <div className="sticky top-24">
                <RootsOfChangeDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
