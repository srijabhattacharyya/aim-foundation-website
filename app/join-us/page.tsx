
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const opportunities = [
  {
    title: "Join as an Intern",
    description: "Gain hands-on experience and contribute to meaningful projects. Our internship program offers a unique opportunity to learn, grow, and make a real impact.",
    image: "https://placehold.co/600x400.png",
    hint: "internship office team",
    link: "/internship"
  },
  {
    title: "Join as a Volunteer",
    description: "Your time and skills are invaluable. Join our passionate community of volunteers dedicated to making a difference on the ground.",
    image: "https://placehold.co/600x400.png",
    hint: "volunteers community work",
    link: "/volunteering"
  },
  {
    title: "Careers with Purpose",
    description: "Looking for a career that aligns with your values? Explore opportunities to join our dedicated team and drive our mission forward.",
    image: "https://placehold.co/600x400.png",
    hint: "professional meeting",
    link: "/career"
  },
];

export default function JoinUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="Join Us Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="team collaboration"
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Join Our Movement
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Be a part of the change. Your skills, passion, and time can help us build a better future.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Ways to Get Involved</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Whether you're a student, a professional, or simply someone who wants to give back, there's a place for you at AIM Foundation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {opportunities.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="relative w-full h-56">
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
                    <Button asChild className="mt-6 w-full transition-transform transform hover:scale-105">
                      <Link href={item.link}>Learn More</Link>
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
