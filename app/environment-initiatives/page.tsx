
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const initiatives = [
  {
    title: "Green Guardians",
    description: "Our tree plantation program aims to combat deforestation and restore green cover. We organize community drives to plant native trees, fostering a greener and healthier planet for future generations. Join us in nurturing the Earth, one tree at a time.",
    image: "https://placehold.co/600x400.png",
    hint: "tree plantation drive",
    link: "#"
  },
  {
    title: "EcoWarriors",
    description: "This initiative focuses on waste management and recycling education in urban and rural communities. We conduct workshops and cleanup drives to promote responsible waste disposal, reduce pollution, and create a cleaner, more sustainable living environment for all.",
    image: "https://placehold.co/600x400.png",
    hint: "community cleanup",
    link: "#"
  },
  {
    title: "AquaLife",
    description: "Dedicated to the conservation of water bodies, AquaLife works to clean and rejuvenate lakes, rivers, and ponds. We collaborate with local communities to remove waste, prevent pollution, and restore aquatic ecosystems, ensuring clean water for all.",
    image: "https://placehold.co/600x400.png",
    hint: "clean water lake",
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
              Protecting Our Planet, One Initiative at a Time
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Our environmental programs are dedicated to conserving nature and promoting sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Environmental Programs</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              At AIM Foundation, we believe that environmental health is crucial for community well-being. Our initiatives are designed to create a sustainable future for everyone.
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
