
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import SurgiReachDonationForm from "@/components/sections/donation-forms/SurgiReachDonationForm";

export default function SurgiReachPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="SurgiReach Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="operating room surgery"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                SurgiReach
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Providing Life-Changing Surgeries, Restoring Hope.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Surgery Shouldn’t Be a Luxury.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                  <p>
                    SurgiReach is AIM Foundation’s flagship hospital partnership initiative, dedicated to ensuring that life-saving and life-enhancing surgeries are accessible to those who need them most—economically disadvantaged individuals who often go untreated due to high medical costs and limited access to specialized care.
                  </p>
                  <p>
                    Through meaningful collaborations with reputed hospitals and surgical specialists, SurgiReach identifies eligible patients and facilitates free surgical interventions, with a focus on both pediatric and adult care.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">For Children:</h3>
                  <p>
                    Children between 5 months and 14 years receive free pediatric surgeries, including treatments for congenital disorders, hernias, cleft conditions, orthopedic needs, and other critical conditions. Early intervention is key to giving these young lives a healthy start and preventing long-term complications.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">For Adults:</h3>
                  <p>
                    SurgiReach supports complex and essential surgeries for adults such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Kidney transplants</li>
                    <li>Knee and joint replacements</li>
                    <li>Gallbladder, appendix, and abdominal surgeries</li>
                    <li>Other procedures based on medical urgency</li>
                  </ul>
                  <p>
                    Every case is reviewed based on medical necessity and financial eligibility, ensuring a transparent, fair, and patient-centered process. The program covers not just the surgical cost but also pre-operative diagnostics, hospital admission, post-operative recovery support, and in some cases, medication assistance.
                  </p>
                  <p>
                    SurgiReach represents AIM Foundation’s commitment to health equity—ensuring that no child suffers in pain, no adult is left untreated, and no family is pushed into poverty because of surgery-related costs.
                  </p>
                  <p>
                    With every successful surgery, SurgiReach restores health, dignity, and hope—one patient at a time.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Help Someone Heal—and Hope Again</h3>
                  <p>
                    For many families, a needed surgery is a distant dream—delayed by cost, denied by circumstance. With your donation, SurgiReach can provide life-changing operations to children and adults who would otherwise go untreated. From cleft repairs in toddlers to kidney transplants for struggling parents, every contribution helps restore not just health, but dignity and a second chance at life. Support SurgiReach today—and be the reason someone wakes up to a pain-free tomorrow.
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <SurgiReachDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
