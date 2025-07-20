

import Image from "next/image";
import GenderEqualityDonationForm from "@/components/sections/donation-forms/GenderEqualityDonationForm";

export default function GenderEqualityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Gender Equality Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="women empowerment"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Gender Equality Initiative
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Empowering Women, Uplifting Society.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Fostering a World of Equal Opportunity.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    Our Gender Equality Initiative is committed to breaking down barriers and creating a world where women and girls have the same opportunities as their male counterparts. We focus on key areas such as education, economic empowerment, health, and leadership to foster systemic change.
                  </p>
                  <p>
                    Through vocational training, financial literacy workshops, and support for women-led enterprises, we help women achieve economic independence. We also work to ensure girls have access to quality education and are encouraged to pursue their dreams without limitation.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Our Key Interventions:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Advocacy for equal rights and policies</li>
                    <li>Leadership training for women and girls</li>
                    <li>Support for survivors of gender-based violence</li>
                    <li>Community dialogues to challenge harmful stereotypes</li>
                  </ul>
                  <p>
                    By investing in women and girls, we are investing in the future of entire communities. An empowered woman uplifts her family and contributes to a more just, prosperous, and peaceful society.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Support the Movement for Equality</h3>
                  <p>
                    Your donation can help us provide a woman with the skills to start a business, a girl with the education to become a leader, or a community with the tools to challenge inequality. Stand with us in our mission to create a world where everyone, regardless of gender, can thrive.
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <GenderEqualityDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
