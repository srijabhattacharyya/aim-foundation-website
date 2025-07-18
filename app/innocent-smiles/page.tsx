
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DonationForm from "@/components/sections/DonationForm";
import Image from "next/image";

export default function InnocentSmilesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '45%' }}>
            <Image
              src="https://placehold.co/1920x864.png"
              alt="Innocent Smiles Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="children smiling classroom"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Nurturing Young Minds
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Our Innocent Smiles program blends academics with creativity to build confidence and shape brighter futures.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold mb-4 font-headline text-center">Why Education Matters for Every Child</h2>
                <div className="space-y-4 text-muted-foreground text-lg text-justify">
                    <p>
                    Education is more than just learning; it's the cornerstone of a child's future. It builds confidence and opens doors to opportunities that would otherwise be out of reach.
                    </p>
                    <p>
                    Going to school provides a safe, nurturing environment where children can grow and develop social and emotional skills. It protects them from child labor and early marriage.
                    </p>
                    <p>
                    By supporting a child's education, you're investing in a brighter future — not just for the child, but for their family and community too.
                    </p>
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                <DonationForm />
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
