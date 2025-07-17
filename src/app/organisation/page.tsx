
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Team from "@/components/sections/Team";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function OrganisationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="w-full aspect-video relative">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Our Organisation Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="office team building"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                From Vision to Action
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Driven by purpose, creating impact through compassion.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-down">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="AIM Foundation office or event"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                  data-ai-hint="community meeting"
                />
              </div>
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">From Vision to Reality</h2>
                <div className="mt-4 text-lg text-muted-foreground space-y-4 text-justify">
                    <p>
                        Founded in 2016, AIM Foundation is devoted to uplifting underprivileged and marginalized families—helping them move toward dignity, self-reliance, and a better future. With a focus on healthcare, education, environmental care, and women and child development, we aim to build a more just and compassionate society.
                    </p>
                    <p>
                        At our core is the belief in women’s empowerment—creating space for leadership and economic independence. We envision a world where everyone, regardless of background, has access to education, healthcare, and a healthy environment. Through collaboration and innovation, AIM Foundation nurtures communities where equality thrives and hope takes root.
                    </p>
                     <Button asChild className="mt-4">
                        <Link href="#team">Meet Our Team</Link>
                    </Button>
                </div>
              </div>
            </div>

          </div>
        </section>

        <Team />
        
      </main>
      <Footer />
    </div>
  );
}
