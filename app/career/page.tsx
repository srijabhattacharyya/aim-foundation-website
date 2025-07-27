
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import HREmail from "@/components/layout/HREmail";

export default function CareerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Careers at AIM Foundation"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover brightness-50"
              data-ai-hint="diverse team working"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Join AIM Foundation
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Be a Catalyst for Change.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 text-lg text-muted-foreground text-justify">
                <h2 className="text-3xl md:text-4xl font-bold font-headline pt-8">Be the Voice, the Hands, the Hope Behind the Change</h2>
                <p>
                  At AIM Foundation, we believe that every individual—regardless of background—deserves access to education, healthcare, dignity, and opportunity. If you’re passionate about driving meaningful change across multiple sectors of society, we welcome you to become a part of our journey.
                </p>
                <p className="font-semibold text-xl text-center text-primary py-4">
                  Our guiding belief is: “Act with Impact.”
                </p>
                <p>
                  From urban slums to remote villages, our work tackles pressing human needs at the grassroots—where real change begins. In a country where a significant portion of the population still lacks access to basic services, our efforts are focused, urgent, and unwavering.
                </p>
                 <p>
                  Through structured and community-driven programs, we work across diverse verticals including:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Education & Child Development</li>
                  <li>Healthcare & Hygiene</li>
                  <li>Women’s Empowerment & Livelihoods</li>
                  <li>Environmental Sustainability</li>
                  <li>Disaster Relief & Community Resilience</li>
                </ul>
                <h3 className="text-2xl font-bold font-headline pt-6">We don’t just run programs—we nurture transformation.</h3>
                <p>
                  At the heart of AIM Foundation is our people—a growing team of professionals, interns, and volunteers committed to serving communities with integrity, compassion, and skill. We believe in empowering individuals to grow while they contribute—building careers of purpose and value in the development sector.
                </p>
                <p>
                  If you’re ready to step beyond the ordinary and work on the frontlines of change, we’d love to hear from you.
                </p>
                
                <div className="bg-card p-6 rounded-lg shadow-md mt-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Come, join AIM Foundation—where your commitment creates real, lasting impact.</h2>
                    <p className="mt-4">
                        Write to: <HREmail />
                    </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
