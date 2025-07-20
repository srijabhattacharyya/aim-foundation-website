
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import SightHopeDonationForm from "@/components/sections/donation-forms/SightHopeDonationForm";

export default function SightHopePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="SightHope Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="vision eye care"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                SightHope
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bringing Light to Lives
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Restoring Sight, Rekindling Dreams.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                  <p>
                    SightHope is a transformative eye health initiative by AIM Foundation, launched to address the widespread but often overlooked burden of avoidable vision loss among underserved populations. In partnership with some of Kolkata’s most renowned eye hospitals—including Sushrut Eye Foundation, B. B. Eye Foundation, and the Hope Foundation—SightHope brings high-quality, no-cost eye care to those who need it most but can least afford it.
                  </p>
                  <p>
                    For many individuals living in urban slums, rural villages, and remote areas, poor eyesight is not just a health issue—it’s a barrier to education, employment, mobility, and dignity. Children struggle in school, adults lose livelihoods, and elders face isolation, all due to conditions that are often preventable or easily treatable, such as refractive errors or cataracts.
                  </p>
                  <p>
                    SightHope steps in to fill this critical gap by organizing regular eye care camps that provide:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Comprehensive vision screenings</li>
                    <li>Diagnosis and treatment of common eye conditions</li>
                    <li>Prescription and distribution of corrective lenses</li>
                    <li>Minor procedures for infections and irritations</li>
                    <li>Free cataract surgeries for eligible individuals</li>
                    <li>Referrals to partner hospitals for specialized care</li>
                  </ul>
                  <p>
                    Each camp is conducted by qualified ophthalmologists and healthcare staff from our partner hospitals, ensuring trusted expertise and continuity of care. Camps are held at accessible community hubs, including schools, health centers, and even temporary rural setups—bringing care directly to the doorstep of marginalized communities.
                  </p>
                  <p>
                    By restoring sight, SightHope restores much more:
                  </p>
                  <ul className="list-none space-y-2">
                    <li>🔹 The freedom to move confidently</li>
                    <li>🔹 The ability to work and earn</li>
                    <li>🔹 The joy of seeing loved ones clearly again</li>
                  </ul>
                  <p>
                    Above all, it restores hope—a renewed sense of possibility for people who had long accepted poor vision as their fate.
                  </p>
                  <p>
                    Through this powerful collaboration between community outreach and medical excellence, SightHope is not just changing lives—it’s helping people see a better future.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Restore Sight, Renew Lives</h3>
                  <p>
                    For millions, blurry vision means missed opportunities, lost income, and silent suffering. With just ₹3,000, you can help restore someone’s sight through a free eye screening or cataract surgery. Your donation to SightHope empowers children to succeed in school, enables elders to regain independence, and allows workers to return to their jobs with confidence. Vision is more than just sight—it’s dignity, freedom, and hope. Give someone the gift of seeing the world clearly again. Donate now—because no one should live in the dark when the cure is within reach.
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <SightHopeDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
