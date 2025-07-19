
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DonationForm from "@/components/sections/DonationForm";


const initiatives = [
  {
    title: "Project Sanjeevani",
    description: "Delivers essential healthcare services to remote and underserved communities, offering free medical camps, check-ups, and medicines. By bringing healthcare to their doorsteps, we ensure that even the most vulnerable populations have access to the care they need to lead healthy, productive lives.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile health clinic",
    link: "#"
  },
  {
    title: "NourishCare",
    description: "Tackles malnutrition in children and mothers by providing nutritional supplements, health education, and regular monitoring. Our goal is to ensure healthy development for children and improve maternal well-being, creating a foundation for a stronger, healthier future generation.",
    image: "https://placehold.co/600x400.png",
    hint: "child nutrition program",
    link: "#"
  },
  {
    title: "Arogya",
    description: "Focuses on preventive healthcare through awareness campaigns on hygiene, sanitation, and disease prevention. By educating communities on healthy practices, we empower them to take control of their health, reducing the incidence of preventable illnesses and promoting long-term well-being.",
    image: "https://placehold.co/600x400.png",
    hint: "hygiene awareness session",
    link: "#"
  },
];

export default function HealthCareInitiativesPage() {
  return (
    <>
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '45%' }}>
            <Image
              src="https://placehold.co/1920x864.png"
              alt="Healthcare Initiatives Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="doctor patient care"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Health for All, Hope for a Better Tomorrow
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Our healthcare programs are dedicated to providing accessible and quality medical care to those in need.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Column for Initiatives */}
              <div className="space-y-12">
                 <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Healthcare Programs</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                      At AIM Foundation, we believe that access to healthcare is a fundamental right. Our initiatives are designed to bring quality medical services to the most vulnerable communities.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  {initiatives.map((item, index) => (
                    <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row">
                      <div className="w-full sm:w-1/3">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={400}
                          data-ai-hint={item.hint}
                          className="w-full h-48 sm:h-full object-cover"
                        />
                      </div>
                      <div className="w-full sm:w-2/3 flex flex-col">
                        <CardHeader>
                          <CardTitle className="font-headline">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-grow p-6 pt-0">
                          <CardDescription className="flex-grow text-justify">{item.description}</CardDescription>
                          <Button asChild variant="link" className="p-0 mt-4 self-start transition-transform transform hover:scale-105">
                            <Link href={item.link || "#"}>Learn More &rarr;</Link>
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
               {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <DonationForm />
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
