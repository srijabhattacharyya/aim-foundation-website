
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import DonationForm from "@/components/sections/DonationForm";

export default function SheConnectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="SheConnects Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="women using technology"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                SheConnects
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Bridging Women to the Digital World.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Digital Skills for Brighter Futures</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    Project SheConnects is a women-centric initiative designed to promote digital empowerment and financial independence. The program provides comprehensive digital literacy training to women from underserved communities, enabling them to harness the power of technology to improve their livelihoods. Participants learn how to create and manage social media profiles, market their products online, and navigate e-commerce platforms effectively.
                  </p>
                  <p>
                    Recognizing that digital access must be paired with digital safety, SheConnects also conducts awareness sessions on cyber safety and online security. These sessions teach women how to protect their personal data, handle online transactions securely, and identify and avoid cyber threats—empowering them to participate in the digital world with confidence.
                  </p>
                  <p>
                    By combining technical skills with real-world business applications, SheConnects not only equips women to boost their income but also nurtures self-reliance and entrepreneurial spirit. Whether they are homemakers, artisans, or small-scale entrepreneurs, the program gives them the tools and confidence to reach wider markets and grow sustainably.
                  </p>
                  <p>
                    Through its holistic approach, Project SheConnects plays a vital role in closing the digital gender gap and fostering inclusive economic growth. It is a step toward building a more equitable society, where women are not just connected—but empowered.
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
