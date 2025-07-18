
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import DonationForm from "@/components/sections/DonationForm";

export default function MilieuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Milieu Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="diverse children interacting"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Milieu
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Fostering Empathy, Building Bridges.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Connecting Worlds, Creating a Shared Future.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    Milieu fosters holistic development by connecting children from diverse economic backgrounds. Through interactive sessions, students from reputed schools and underprivileged communities learn together, building empathy, respect, and inclusivity.
                  </p>
                  <p>
                    This mutual exchange enhances emotional intelligence, breaks social barriers, and nurtures compassionate, community-minded young individuals. The program is built on the belief that shared experiences are the most powerful tool for learning and growth.
                  </p>
                  <p>
                    By creating a platform for genuine interaction, Milieu helps dissolve stereotypes and encourages children to see the world from different perspectives. It's about building a future where collaboration and understanding are the cornerstones of society.
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
