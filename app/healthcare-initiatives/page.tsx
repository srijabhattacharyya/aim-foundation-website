
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Healthcare Initiatives - AIM Foundation',
  description: 'Healthcare is a right, not merely a privilege! Our healthcare programs are dedicated to providing accessible and quality medical care to those in need.',
  alternates: {
    canonical: '/healthcare-initiatives',
  },
};

const initiatives = [
  {
    title: "CureLine",
    description: "is AIM Foundation’s rural and remote healthcare outreach program that delivers essential medical services to underserved communities. Through regular health camps, it offers free check-ups, consultations, medicines, and health education in villages, forest-fringe settlements, and disaster-hit areas—bridging critical care gaps and ensuring health access regardless of location or income.",
    image: "/images/projects/cureline/cureline3.avif",
    hint: "rural health camp",
    link: "/cureline",
    specialText: "(Rural Healthcare)"
  },
  {
    title: "CareCircle",
    description: "is an urban health initiative by AIM Foundation that organizes healthcare camps through partnerships at Kolkata centres like Sarala Punyashram, Sarat Bose Road, and Boral Natunhat. These camps deliver free check-ups, medicines, and consultations to underserved populations, ensuring inclusive, accessible healthcare for those often overlooked in city life.",
    image: "/images/projects/carecircle/carecircle3.avif",
    hint: "hygiene awareness session",
    link: "/carecircle?from=healthcare",
    specialText: "(Urban Healthcare)"
  },
  {
    title: "ChildFirst",
    description: "is a compassionate healthcare initiative by AIM Foundation offering pediatric and general health camps for children of sex workers in Rambagan and Sonagachi. It provides a safe, non-judgmental space for early medical intervention, aiming to improve health, dignity, and future opportunities for these vulnerable and often overlooked children.",
    image: "/images/projects/childfirst/childfirst2.avif",
    hint: "paediatric  health support",
    link: "/childfirst?from=healthcare",
    specialText: "(Child Health)"
  },
  {
    title: "Detect",
    description: "empowers rural women through cervical health education and cancer screenings. In collaboration with Chittaranjan National Cancer Institute and the West Bengal government, it organizes community camps and trains frontline workers district by district—starting with Howrah—to promote early detection, break taboos, and build awareness for women’s reproductive health.",
    image: "/images/projects/detect/detect2.avif",
    hint: "mother child health",
    link: "/detect?from=healthcare",
    specialText: "(Cervical Cancer Detection)"
  },
  {
    title: "SightHope",
    description: "in partnership with leading eye hospitals like Sushrut Eye Foundation, B. B. Eye Foundation, and Hope Foundation, brings free eye care to underserved communities. Through screenings, treatments, and cataract surgeries, it restores vision, dignity, and independence—offering new possibilities to those without access to quality eye health services.",
    image: "/images/projects/sighthope/sighthope1.avif",
    hint: "vision eye exam",
    link: "/sighthope?from=healthcare",
    specialText: "(Eye Camp)"
  },
  {
    title: "OralScan",
    description: "is a crucial initiative offering free oral cancer screening camps in underserved communities. By focusing on early detection and public awareness, it identifies potential risks at the outset, improving treatment outcomes. The program promotes oral hygiene, educates on risk factors, and helps save lives through timely medical intervention.",
    image: "/images/projects/oralscan/oranscan2.avif",
    hint: "oral cancer screening",
    link: "/oralscan?from=healthcare",
    specialText: "(Oral Cancer Screening)"
  },
  {
    title: "CycleSafe",
    description: "empowers underprivileged adolescent girls in and around Kolkata by promoting menstrual hygiene, cervical health awareness, and reproductive well-being. Through monthly sanitary napkin distribution and educational sessions, the initiative breaks taboos, builds knowledge, and fosters confidence—ensuring dignity, health, and equal opportunities for young girls to thrive.",
    image: "/images/projects/cyclesafe/cyclesafe2.avif",
    hint: "menstrual hygiene",
    link: "/cyclesafe?from=healthcare",
    specialText: "(Reproductive Health)"
  },
  {
    title: "SoulCircle",
    description: "is a 24/7 AI-powered mental health support app by AIM Foundation, offering a confidential, judgment-free space to talk and heal. Designed for those hesitant to seek traditional therapy, it provides empathetic guidance, mood tracking, and mindfulness exercises, making emotional well-being accessible to all, anytime, anywhere.",
    image: "https://placehold.co/600x400.png",
    hint: "mental health app",
    link: "/soulcircle?from=healthcare",
    specialText: "(Mental Health App)"
  }
];

export default function HealthCareInitiativesPage() {
  return (
    <>
        <section className="relative w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner/health.jpg"
              alt="Healthcare Initiatives Banner"
              width={1920}
              height={580}
              className="w-full h-auto object-cover"
              data-ai-hint="doctor patient care"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Healthcare is a right, not merely a privilege!
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
              {initiatives.map((item: any, index: React.Key | null | undefined) => (
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
                     {item.specialText && <p className="text-sm font-bold text-muted-foreground mb-2">{item.specialText}</p>}
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
