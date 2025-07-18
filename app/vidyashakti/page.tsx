
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import DonationForm from "@/components/sections/DonationForm";
import { Button } from "@/components/ui/button";

export default function VidyaShaktiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="VidyaShakti Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="learning app student"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                VidyaShakti
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Empowering Rural Minds with Digital Wisdom.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">When Teachers Aren’t Nearby, VidyaShakti Is!</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    VidyaShakti is a multilingual educational app designed to support rural children and first-generation learners. While it may not be possible to provide quality teachers in every village, the widespread availability of smartphones and internet connectivity has opened new doors for accessible learning.
                  </p>
                  <p>
                    Through VidyaShakti, students from Class 5 to Class 12 can ask any academic question and receive AI-generated answers tailored to their class level and comprehension ability. What sets the app apart is its ability to deliver explanations in the student’s preferred language, ensuring clarity and better understanding.
                  </p>
                  <p>
                    This innovative platform bridges the educational gap by offering personalized, on-demand support—empowering rural students to learn independently, strengthen their academic foundation, and stay connected with quality education regardless of their location.
                  </p>
                  <p>
                    VidyaShakti is more than just an app; it is a lifeline for learners in remote areas, bringing the power of knowledge directly to their fingertips.
                  </p>
                </div>
                <div className="mt-8">
                  <Button disabled>App is under construction</Button>
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
