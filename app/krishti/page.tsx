
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import KrishtiDonationForm from "@/components/sections/donation-forms/KrishtiDonationForm";

export default function KrishtiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Krishti Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="women entrepreneurs community"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Krishti
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                She Creates. Krishti Elevates.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Crafted by Her. Backed by Krishti</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                  <p>
                    Krishti is the next step for women trained through SuiDhaga, nurturing their journey from skill to self-reliance. By providing access to modern production setups and marketing support, Krishti empowers women to become entrepreneurs—transforming their craft into livelihood, their passion into purpose, and their efforts into lasting financial independence.
                  </p>
                  <p>
                    This initiative bridges the crucial gap between acquiring a skill and successfully monetizing it. We provide a platform for these talented women to showcase their products to a wider audience, connect with buyers, and build a sustainable business. 
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Our support includes:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Access to well-equipped production facilities.</li>
                    <li>Guidance on product design and quality enhancement.</li>
                    <li>Marketing and branding support to reach new markets.</li>
                    <li>Financial literacy and business management training.</li>
                  </ul>
                  <p>
                    Krishti is about creating a thriving ecosystem where female artisans can flourish, turning their creative potential into economic empowerment for themselves and their communities.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Empower an Artisan, Build an Enterprise</h3>
                  <p>
                    Your donation to Krishti helps provide a woman with the resources she needs to transition from a skilled artisan to a successful entrepreneur. Support her journey with access to better equipment, marketing platforms, and business training. Your contribution can help turn her passion into a sustainable livelihood. <strong>Donate today and help a woman build her own future.</strong>
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <KrishtiDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

