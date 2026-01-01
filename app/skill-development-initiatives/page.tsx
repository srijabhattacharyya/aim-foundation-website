
import type { Metadata } from 'next';
import { Card, CardContent, CardTitle, CardDescription } from "../../components/ui/card";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Skill Development Initiatives | AIM Foundation',
  description: 'AIM Foundation’s skill development programs in Digital Marketing, Graphic Design, and Web Development empower youth for a brighter future.',
  keywords: ['skill development NGO', 'digital marketing course', 'graphic design training', 'web development program', 'youth empowerment India', 'vocational training NGO'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/skill-development-initiatives',
    title: 'Skill Development Initiatives | AIM Foundation',
    description: 'AIM Foundation’s skill development programs empower youth with in-demand skills for a brighter future.',
    images: [
        {
            url: 'https://aimindia.org.in/images/banner/skill-development.avif',
            width: 1200,
            height: 630,
            alt: 'AIM Foundation Skill Development Initiatives',
        },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Skill Development Initiatives | AIM Foundation',
    description: 'AIM Foundation’s skill development programs empower youth with in-demand skills for a brighter future.',
    images: ['https://aimindia.org.in/images/banner/skill-development.avif'],
  },
  alternates: {
    canonical: '/skill-development-initiatives',
  },
};

const initiatives = [
  {
    title: "Digital Marketing",
    description: "Our Digital Marketing program equips students with essential skills in SEO, social media marketing, content creation, and analytics to thrive in the digital economy.",
    image: "/images/projects/skill-development/digital-marketing.avif",
    hint: "digital marketing class",
    link: "#"
  },
  {
    title: "Graphic Designing",
    description: "This program nurtures creativity and technical proficiency in graphic design, covering tools like Adobe Photoshop and Illustrator to prepare students for creative careers.",
    image: "/images/projects/skill/graphic-design.avif",
    hint: "graphic design workshop",
    link: "#"
  },
  {
    title: "Web Development",
    description: "Our Web Development course teaches the fundamentals of front-end and back-end technologies, enabling students to build and manage modern websites and web applications.",
    image: "/images/projects/skill/web.avif",
    hint: "web development coding",
    link: "#"
  },
];

export default function SkillDevelopmentInitiativesPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://www.aimindia.org.in/",
    "logo": "https://www.aimindia.org.in/logo.png",
    "sameAs": [
        "https://www.facebook.com/aimindiango/",
        "https://x.com/aimindiango",
        "https://www.instagram.com/aimfoundation_ngo/",
        "https://www.linkedin.com/in/aim-foundation-ngo/",
        "https://www.youtube.com/@aimfoundation2604"
    ],
    "description": "AIM Foundation’s skill development programs empower youth with in-demand skills for a brighter future."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-skill-development"
      />
      <section className="relative w-full">
        <div className="relative w-full">
          <Image
            src="/images/banner/skill-development.avif"
            alt="Skill Development Initiatives Banner"
            width={1920}
            height={580}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
          <div className="relative z-10 text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Skill Development Initiatives
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Empowering Youth for Tomorrow's Workforce.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Skill Development Programs</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We are committed to equipping youth with practical, in-demand skills to build sustainable careers and foster economic independence.
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
                  <CardDescription className="flex-grow text-justify">
                    {item.description}
                  </CardDescription>
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
