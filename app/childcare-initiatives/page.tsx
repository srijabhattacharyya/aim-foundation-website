
import type { Metadata } from 'next';
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Childcare Initiatives - AIM Foundation',
  description: 'Our initiatives are focused on creating a safe, healthy, and inspiring start for every child.',
  alternates: {
    canonical: '/childcare-initiatives',
  },
};

const initiatives = [
  {
    title: "Innocent Smiles",
    description: "Empowers children by combining education with art, dance, and music, nurturing both creativity and academics. It offers a supportive space where young minds gain confidence, express themselves, and grow holistically.",
    image: "https://placehold.co/600x400.png",
    hint: "classroom children",
    link: "/innocent-smiles?from=childcare"
  },
  {
    title: "Milieu",
    description: "Fosters holistic development by connecting children from diverse economic backgrounds. Through interactive sessions, students from reputed schools and underprivileged communities learn together, building empathy and respect.",
    image: "https://placehold.co/600x400.png",
    hint: "community gathering",
    link: "/milieu?from=childcare"
  },
  {
    title: "ChildFirst",
    description: "A compassionate healthcare initiative offering pediatric and general health camps for children of sex workers. It provides a safe, non-judgmental space for early medical intervention, aiming to improve health and dignity.",
    image: "https://placehold.co/600x400.png",
    hint: "mental health support",
    link: "/childfirst?from=childcare"
  },
];

export default function ChildcareInitiativesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="Childcare Initiatives Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="happy children playing"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Nurturing the Next Generation
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Our initiatives are focused on creating a safe, healthy, and inspiring start for every child.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Childcare Programs</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe that a strong foundation in childhood leads to a brighter future for all.
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
