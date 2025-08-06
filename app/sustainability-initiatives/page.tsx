
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "../../components/ui/card";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const initiatives = [
  {
    title: "GreenRoots",
    description: "aims to promote reforestation in areas where land acquisition is not feasible. By distributing saplings directly to villagers, the project overcomes space constraints and fosters active community involvement in afforestation efforts. This grassroots approach helps expand local green cover in a sustainable and inclusive manner.",
    image: "https://placehold.co/600x400.png",
    hint: "urban garden",
    link: "/green-roots"
  },
  {
    title: "TideShield",
    description: "is a mangrove restoration initiative on Bali Island in the Sundarbans, launched to revive ecosystems damaged by cyclones Amphan and Yaas. By planting native mangrove species and involving local communities, the project strengthens coastal resilience, prevents erosion, and restores biodiversity along vulnerable shorelines.",
    image: "https://placehold.co/600x400.png",
    hint: "mangrove restoration",
    link: "/tideshield"
  },
  {
    title: "Roots of Change",
    description: "is AIM Foundation’s environmental education initiative aimed at cultivating awareness and sustainable habits. Through expert-led seminars, engaging workshops, and impactful learning materials, we empower students, communities, and leaders to take informed action for a greener, more resilient future—starting from the roots.",
    image: "https://placehold.co/600x400.png",
    hint: "environmental education",
    link: "/roots-of-change"
  },
];

export default function SustainabilityInitiativesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/health.jpg"
              alt="Sustainability Initiatives Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover brightness-50"
              data-ai-hint="sustainable environment"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Sustainability Initiatives
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Nurturing Nature, Sustaining Life
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Sustainability Programs</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We are committed to creating a sustainable future through environmental protection, conservation, and education.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="relative w-full h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      data-ai-hint={item.hint}
                      className="object-cover"
                      loading="lazy"
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
