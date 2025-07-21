
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
                Knowledge Blooms, Action Grows.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Cultivating a Greener Tomorrow, Today.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    Roots of Change is AIM Foundation’s environmental education initiative aimed at cultivating awareness and sustainable habits. Through expert-led seminars, engaging workshops, and impactful learning materials, we empower students, communities, and leaders to take informed action for a greener, more resilient future—starting from the roots.
                  </p>
                  <p>
                    Our programs are designed to be interactive and hands-on, covering topics like waste management, conservation, renewable energy, and the importance of biodiversity. We believe that by instilling a deep respect for the environment in the next generation, we can create a powerful ripple effect of positive change.
                  </p>
                   <h3 className="text-2xl font-bold font-headline pt-4">Sow the Seeds of Awareness</h3>
                  <p>
                    Your support helps us develop educational materials, organize workshops, and reach more schools and communities. By donating to Roots of Change, you are investing in a future where people and nature thrive together. Help us empower the environmental leaders of tomorrow.
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
