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
                The people and passion behind our mission.
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
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Who We Are</h2>
                <div className="mt-4 text-lg text-muted-foreground space-y-4 text-justify">
                    <p>
                        AIM Foundation is powered by a team of dedicated professionals, passionate volunteers, and generous supporters who share a common vision: to build a more equitable and compassionate world.
                    </p>
                    <p>
                        Our work is guided by our core values of integrity, transparency, and collaboration. We believe in working hand-in-hand with the communities we serve, ensuring that our initiatives are sustainable and truly meet their needs.
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
