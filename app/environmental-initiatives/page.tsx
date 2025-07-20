
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const initiatives = [
  {
    title: "RENEW",
    description: "Restoring Earth’s Natural Ecosystems & Wildlife focuses on large-scale afforestation, soil regeneration, and creating protected wildlife corridors. By planting native trees and reviving degraded land, we rebuild habitats and fight climate change.",
    image: "https://placehold.co/600x400.png",
    hint: "forest restoration",
    link: "#"
  },
  {
    title: "AquaLife",
    description: "The Water Body Rejuvenation and Marine Conservation initiative cleans and restores polluted rivers, lakes, and coastal areas. We work with local communities to stop waste dumping, remove contaminants, and protect aquatic biodiversity.",
    image: "https://placehold.co/600x400.png",
    hint: "clean river",
    link: "#"
  },
  {
    title: "EcoVation",
    description: "Our Waste Upcycling & Circular Economy program empowers communities to turn waste into wealth. We establish local collection centers and provide training to create marketable products from plastic, textile, and organic waste, fostering a circular economy.",
    image: "https://placehold.co/600x400.png",
    hint: "recycling plastic",
    link: "#"
  },
  {
    title: "GreenGuard",
    description: "The Afforestation & Community Forest Management initiative empowers local and indigenous communities to protect and manage their forest resources sustainably. We provide training in conservation, agroforestry, and non-timber forest products.",
    image: "https://placehold.co/600x400.png",
    hint: "community tree planting",
    link: "#"
  },
];

export default function EnvironmentalInitiativesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '45%' }}>
            <Image
              src="https://placehold.co/1920x864.png"
              alt="Environmental Initiatives Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="lush green forest"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Protecting Our Planet, Together
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Our environmental initiatives are committed to conserving nature and building a sustainable future for all.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Environmental Programs</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe that a healthy planet is the foundation for healthy communities. Our programs focus on conservation, restoration, and sustainability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {initiatives.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="relative w-full h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      data-ai-hint={item.hint}
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <CardTitle className="font-headline mb-2">{item.title}</CardTitle>
                    <CardDescription className="flex-grow text-justify">{item.description}</CardDescription>
                    <Button asChild variant="link" className="p-0 mt-4 self-start transition-transform transform hover:scale-105">
                      <Link href={item.link || "#"}>Learn More &rarr;</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
