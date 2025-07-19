
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  {
    title: "Mental Wellness Support",
    description: "Provides accessible mental health counseling and support groups to address stress, anxiety, and depression in underserved communities. We aim to break the stigma and foster emotional well-being.",
    image: "https://placehold.co/600x400.png",
    hint: "mental health support",
    link: "#"
  },
  {
    title: "Maternal & Child Health",
    description: "Offers comprehensive pre-natal and post-natal care for mothers and infants, including vaccinations and regular health check-ups to ensure a healthy start in life.",
    image: "https://placehold.co/600x400.png",
    hint: "mother child health",
    link: "#"
  },
  {
    title: "Vision Care for All",
    description: "Conducts eye screening camps and provides free spectacles to those in need, helping to prevent blindness and improve quality of life through better vision.",
    image: "https://placehold.co/600x400.png",
    hint: "vision eye exam",
    link: "#"
  },
  {
    title: "Dental Health Camps",
    description: "Organizes free dental check-ups, treatments, and awareness sessions on oral hygiene to prevent dental diseases and promote healthy smiles in rural areas.",
    image: "https://placehold.co/600x400.png",
    hint: "dental checkup",
    link: "#"
  },
  {
    title: "Rehabilitation Support",
    description: "Supports individuals in overcoming addiction through counseling, rehabilitation programs, and community support systems, helping them reintegrate into society.",
    image: "https://placehold.co/600x400.png",
    hint: "support group",
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Healthcare Programs</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                At AIM Foundation, we believe that access to healthcare is a fundamental right. Our initiatives are designed to bring quality medical services to the most vulnerable communities.
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
