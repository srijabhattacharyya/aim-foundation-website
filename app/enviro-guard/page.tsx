
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import DonationForm from "@/components/sections/DonationForm";

export default function EnviroGuardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Enviro-Guard Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="environmental education children"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Enviro-Guard
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Educating for a Sustainable Future.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Guardians of Our Environment.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    Enviro-Guard is an educational program focused on raising environmental awareness among students and communities. Through workshops and interactive sessions, we teach about conservation, recycling, and sustainable living practices.
                  </p>
                  <p>
                    Our goal is to empower the next generation with the knowledge and passion to protect our planet. We believe that education is the key to fostering a culture of environmental responsibility and creating lasting change.
                  </p>
                </div>
              </div>
              
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
