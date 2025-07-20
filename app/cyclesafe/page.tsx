
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
                    CycleSafe is a dedicated initiative by AIM Foundation that empowers underprivileged adolescent girls in and around Kolkata by promoting <strong>menstrual hygiene, cervical health awareness, and reproductive well-being</strong>. We believe that every girl deserves to manage her period with dignity and without shame.
                  </p>
                  <p>
                    In many communities, a lack of access to sanitary products and proper information leads to girls missing school, facing social stigma, and being at risk of infections. CycleSafe addresses these challenges head-on by:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Distributing free sanitary napkins</strong> on a monthly basis to ensure girls don't have to choose between education and hygiene.</li>
                    <li>Conducting <strong>educational workshops</strong> on menstrual health to break taboos and spread accurate information.</li>
                    <li>Raising awareness about <strong>cervical health and the importance of early screening</strong>.</li>
                    <li>Creating a <strong>supportive and safe space</strong> for girls to ask questions and share experiences.</li>
                  </ul>
                  <p>
                    Through these efforts, CycleSafe fosters confidence, ensures health, and promotes equal opportunities, helping young girls thrive without barriers. The initiative is not just about providing products; it's about building knowledge, breaking cycles of misinformation, and empowering a new generation of healthy, confident young women.
                  </p>
                   <h3 className="text-2xl font-bold font-headline pt-4">Gift Dignity and Health</h3>
                  <p>
                    For many adolescent girls, a period means missing school and facing shame. <strong>Your donation can provide sanitary napkins and vital health education, ensuring a girl can continue her education with confidence and dignity.</strong> Help us break the silence and stigma around menstruation. <strong>Support CycleSafe today and empower a girl to stay healthy, stay in school, and build a brighter future.</strong>
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
