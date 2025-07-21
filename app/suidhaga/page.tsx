
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import SuiDhagaDonationForm from "@/components/sections/donation-forms/SuiDhagaDonationForm";

export default function SuiDhagaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="SuiDhaga Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="women tailoring"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                SuiDhaga
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Stitching Dreams, Weaving Futures.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Threads of Hope, Dreams in Every Stitch</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    SuiDhaga is an empowering vocational training initiative by AIM Foundation that equips women from underserved communities with valuable skills in tailoring and embroidery. The program is designed to help women transform traditional crafts into sustainable sources of income, fostering financial independence and self-reliance.
                  </p>
                  <p>
                    Through hands-on workshops and expert guidance, participants learn everything from basic stitching to intricate embroidery techniques. This practical education provides them with the tools and confidence needed to start their own small businesses, join local artisan groups, or secure employment in the textile industry.
                  </p>
                   <h3 className="text-2xl font-bold font-headline pt-4">Key Features of the Program:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Comprehensive training in tailoring and embroidery.</li>
                    <li>Provision of sewing machines and materials.</li>
                    <li>Mentorship on design, quality control, and marketing.</li>
                    <li>Building a supportive community of female artisans.</li>
                  </ul>
                  <p>
                    By investing in these skills, SuiDhaga helps women uplift their families, contribute to their local economies, and take confident steps toward a more secure and empowered future. The initiative is a testament to the power of craft in creating opportunity and transforming lives.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Help a Woman Weave a New Future</h3>
                  <p>
                    A sewing machine can be a tool of empowerment, and a new skill can be the start of a new life. <strong>Your donation to SuiDhaga provides women with the training, materials, and support they need to become financially independent.</strong> Help us equip more women with the skills to build a better future for themselves and their families. <strong>Donate today and help stitch together a world of opportunity.</strong>
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <SuiDhagaDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
