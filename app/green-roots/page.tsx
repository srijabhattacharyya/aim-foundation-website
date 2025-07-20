
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import GreenRootsDonationForm from "@/components/sections/donation-forms/GreenRootsDonationForm";

export default function GreenRootsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="GreenRoots Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="urban garden community"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                GreenRoots
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Sow Today, Breathe Tomorrow
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Planting Hope, Growing Futures</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    GreenRoots is a grassroots environmental initiative launched by AIM Foundation to promote reforestation and expand green cover in regions where land acquisition for large-scale plantation is not viable. In many rural and semi-rural areas, the lack of access to common or government-owned land poses a significant barrier to traditional afforestation efforts. GreenRoots addresses this challenge by empowering individual households and communities to become stewards of the environment.
                  </p>
                  <p>
                    Under this initiative, saplings are directly distributed to villagers along with basic guidance on planting and nurturing them. Beneficiaries are encouraged to plant trees in courtyards, agricultural borders, schools, community spaces, and temple grounds—transforming idle land into green pockets. Through awareness campaigns and hands-on support, AIM Foundation ensures that recipients understand the long-term environmental benefits of tree care.
                  </p>
                  <p>
                    By shifting the focus from centralized plantations to decentralized community participation, GreenRoots promotes environmental responsibility, encourages ownership, and builds lasting ecological resilience at the grassroots level. The project not only increases tree cover but also strengthens the bond between people and nature.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Let your support take root—help green India’s future</h3>
                  <p>
                    Your contribution can help provide more saplings, expand outreach, and support communities in nurturing our planet. Donate today and help GreenRoots grow stronger, deeper, and greener—one tree, one family, one village at a time.
                  </p>
                </div>
              </div>
              
              <div className="sticky top-24">
                <GreenRootsDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
