
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const initiatives = [
  {
    title: "Green Thumbs",
    description: "Promotes urban gardening and tree plantation drives to increase green cover in cities. We provide saplings, tools, and training to communities, encouraging them to create their own green spaces and reconnect with nature.",
    image: "https://placehold.co/600x400.png",
    hint: "tree plantation",
    link: "#"
  },
  {
    title: "Clean Water Project",
    description: "Focuses on restoring and cleaning local water bodies. Through community-led efforts, we work to remove pollutants, prevent contamination, and raise awareness about the importance of water conservation for a healthier ecosystem.",
    image: "https://placehold.co/600x400.png",
    hint: "clean water",
    link: "#"
  },
  {
    title: "Waste Warriors",
    description: "A comprehensive waste management program that educates communities on segregation, recycling, and composting. We aim to reduce landfill waste and create a circular economy by turning waste into valuable resources.",
    image: "https://placehold.co/600x400.png",
    hint: "waste recycling",
    link: "#"
  },
  {
    title: "Eco-Awareness Campaigns",
    description: "Conducting workshops and campaigns in schools and communities to build awareness about critical environmental issues like climate change, plastic pollution, and biodiversity loss, inspiring sustainable habits for a better future.",
    image: "https://placehold.co/600x400.png",
    hint: "environmental awareness",
    link: "#"
  },
];

export default function EnvironmentInitiativesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
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
                Our environmental programs are dedicated to preserving nature for a sustainable and healthier future for all.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Environmental Programs</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe that a healthy planet is the foundation for healthy communities. Our initiatives focus on conservation, awareness, and sustainable action.
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
