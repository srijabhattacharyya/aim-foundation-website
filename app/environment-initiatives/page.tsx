
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const initiatives = [
  {
    title: "GreenSustain",
    description: "Our flagship program for promoting sustainable living through waste reduction, recycling drives, and community-led composting projects. We aim to create zero-waste communities that are mindful of their environmental footprint.",
    image: "https://placehold.co/600x400.png",
    hint: "community recycling drive",
    link: "#"
  },
  {
    title: "AquaLife",
    description: "Dedicated to the conservation and restoration of local water bodies. Through cleanup drives, water quality monitoring, and awareness campaigns, AquaLife works to protect our precious freshwater ecosystems for future generations.",
    image: "https://placehold.co/600x400.png",
    hint: "river cleanup volunteers",
    link: "#"
  },
  {
    title: "Project Canopy",
    description: "An urban and rural afforestation initiative aimed at increasing green cover. We organize tree plantation drives in schools, public spaces, and barren lands to combat climate change, improve air quality, and restore biodiversity.",
    image: "https://placehold.co/600x400.png",
    hint: "tree plantation drive",
    link: "#"
  },
  {
    title: "EcoWarriors",
    description: "An educational program for students to foster a love for nature and environmental stewardship. Through workshops, nature walks, and hands-on projects, we are nurturing the next generation of environmental leaders.",
    image: "https://placehold.co/600x400.png",
    hint: "children learning nature",
    link: "#"
  },
];

export default function EnvironmentInitiativesPage() {
  return (
    <>
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '45%' }}>
            <Image
              src="https://placehold.co/1920x864.png"
              alt="Environment Initiatives Banner"
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
                Our environmental initiatives are dedicated to conserving nature and building a sustainable future for all.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Environmental Programs</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe that a healthy planet is the foundation of a prosperous society. Our programs are designed to protect and restore our natural world.
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
    </>
  );
}
