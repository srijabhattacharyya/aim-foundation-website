
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import DonationForm from "@/components/sections/DonationForm";

export default function InnocentSmilesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
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
                Innocent Smiles
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Empowering children through joyful learning, creativity, and holistic growth.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Nurturing Bright Futures</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    The "Innocent Smiles" initiative empowers children through a blend of education, art, dance, and music. We merge creativity with academics to create a nurturing space where young minds can build confidence, express themselves, and grow holistically. 
                  </p>
                  <p>
                    Our program provides a joyful and supportive environment designed to unlock each child's unique potential. Through guided support and engaging activities, we help shape brighter, more confident futures, fostering a lifelong love for learning and self-expression.
                  </p>
                  <p>
                    We believe every child deserves the chance to shine. "Innocent Smiles" is committed to providing the foundational skills and creative outlets that allow children to thrive, dream, and succeed in all aspects of life.
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
