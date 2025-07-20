
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import CycleSafeDonationForm from "@/components/sections/donation-forms/CycleSafeDonationForm";

export default function CycleSafePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="CycleSafe Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="adolescent girls smiling"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                CycleSafe
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Dignity, Health, and Confidence for Every Girl.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Empowering Girls, One Cycle at a Time.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                  <p>
                    CycleSafe is a dedicated initiative that supports the <strong>menstrual and reproductive health of underprivileged adolescent girls</strong> in and around Kolkata. These girls, many of whom come from socioeconomically disadvantaged backgrounds, often lack access to basic menstrual hygiene resources, health education, and supportive spaces to discuss their bodies and well-being.
                  </p>
                  <p>
                    The project addresses this gap through comprehensive menstrual hygiene workshops, awareness sessions on cervical health, and open discussions on puberty, reproductive health, and emotional changes. These sessions are led by trained health educators who approach the subject with sensitivity, accuracy, and respect.
                  </p>
                  <p>
                    In addition, the initiative provides monthly sanitary napkins to ensure girls don’t miss school or feel shame during their menstrual cycles. Access to these essentials helps boost their confidence, attendance, and participation in daily life.
                  </p>
                  <p>
                    The program also works to break taboos and social stigma surrounding menstruation and female reproductive health. By creating safe, inclusive, and educational spaces, the project not only promotes physical well-being but also helps these young girls build self-worth, body awareness, and emotional resilience.
                  </p>
                  <p>
                    Ultimately, this initiative empowers adolescent girls to take charge of their health, voice their needs, and grow into informed, confident individuals—laying the foundation for a more equitable and healthy future.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Help Her Stay in School, Stay Confident</h3>
                  <p>
                    For many adolescent girls, periods mean missed classes, silent shame, and compromised health—simply because they can’t afford sanitary napkins or don’t understand what’s happening to their bodies. <strong>Your support to CycleSafe can change that.</strong> <strong>Just ₹300 can provide a girl with sanitary pads and vital menstrual health education for a month.</strong> With your donation, you’re not just giving hygiene products—you’re restoring dignity, confidence, and opportunity. Stand with these girls. Help them grow without fear or stigma. Donate today and empower a future that’s safe, strong, and unstoppable.
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <CycleSafeDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
