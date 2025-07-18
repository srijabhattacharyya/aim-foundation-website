
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import DonationForm from "@/components/sections/DonationForm";

export default function EmpowerEnglishPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Empower English Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="english classroom students"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Empower English
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Unlocking Futures, One Word at a Time
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Building Confidence Through Communication</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    Empower English provides spoken English training to students in underserved areas like Kolkata, Purba Bardhaman, and Jalpaiguri. The program is designed to build confidence and improve communication skills, which are crucial for academic and professional success.
                  </p>
                  <p>
                    Our curriculum focuses on practical, real-world English, helping students overcome language barriers and express themselves clearly. By creating an interactive and supportive learning environment, we empower students to participate in conversations, interviews, and public speaking with ease.
                  </p>
                   <p>
                    This initiative bridges critical language gaps, opening doors to greater opportunities in higher education and the job market. We believe that mastering English is not just about learning a new language, but about unlocking potential and paving the way for long-term growth and a brighter future.
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
