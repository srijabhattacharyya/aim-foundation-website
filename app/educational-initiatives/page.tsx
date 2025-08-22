
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'AIM Foundation | Educational Initiatives for Brighter Futures',
  description: 'Explore AIM Foundation’s educational initiatives empowering children and youth through digital literacy, English training, e-learning, creativity, and inclusive growth.',
  keywords: ['AIM Foundation education', 'NGO education projects', 'digital literacy NGO', 'spoken English training Kolkata', 'e-learning Sundarbans', 'child development NGO', 'inclusive education West Bengal'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/educational-initiatives',
    title: 'AIM Foundation | Educational Initiatives for Brighter Futures',
    description: 'Explore AIM Foundation’s educational initiatives empowering children and youth through digital literacy, English training, e-learning, creativity, and inclusive growth.',
    images: [
        {
            url: 'https://aimindia.org.in/home.avif',
            width: 1200,
            height: 630,
            alt: 'AIM Foundation Educational Initiatives',
        },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://aimindia.org.in/educational-initiatives',
    title: 'AIM Foundation | Educational Initiatives for Brighter Futures',
    description: 'Explore AIM Foundation’s educational initiatives empowering children and youth through digital literacy, English training, e-learning, creativity, and inclusive growth.',
    images: ['https://aimindia.org.in/home.avif'],
    site: '@aimindiango',
  },
  alternates: {
    canonical: '/educational-initiatives',
  },
};

const initiatives = [
  {
    title: "Innocent Smiles",
    description: "Empowers children by combining education with art, dance, and music, nurturing both creativity and academics. It offers a supportive space where young minds gain confidence, express themselves, and grow holistically.",
    image: "/images/projects/innocent-smiles/innocent-smiles2.avif",
    hint: "children art class",
    link: "/innocent-smiles?from=educational",
    specialText: "(Art & Music Class)"
  },
  {
    title: "Inspire EduLab",
    description: "Transforms classrooms into smart, internet-enabled hubs. With interactive tools, it makes complex lessons dynamic and easier to grasp, fostering engagement and a love for learning.",
    image: "/images/projects/edulab/edulab1.avif",
    hint: "smart classroom",
    link: "/inspire-eduLab?from=educational",
    specialText: "(Smart Class Room)"
  },
  {
    title: "EduAccess",
    description: "Delivers quality education to rural West Bengal through expert-led online classes. Covering core subjects, it empowers students in underserved areas with skills for academic success.",
    image: "/images/projects/eduaccess/eduaccess2.avif",
    hint: "online learning",
    link: "/eduaccess",
    specialText: "(Online class)"
  },
   {
    title: "Empower English",
    description: "Offers spoken English training to students from underserved communities, strengthening communication skills and boosting self-confidence for academic and professional success.",
    image: "/images/projects/empower-english/empower-english2.avif",
    hint: "english class",
    link: "/empower-english?from=educational",
    specialText: "(Spoken English class)"
  },
  {
    title: "DigiEmpower",
    description: "Promotes digital literacy among underprivileged and Adivasi children. It provides hands-on computer training, equipping them with essential skills for today’s technology-driven world.",
    image: "/images/projects/digiempower/digiempower2.avif",
    hint: "computer literacy",
    link: "/digiempower?from=educational",
    specialText: "(Digital Literacy for Children)"
  },
  {
    title: "SheConnects",
    description: "Empowers women through digital literacy, helping them promote businesses online. Includes cyber safety sessions to ensure secure digital participation and financial independence.",
    image: "https://placehold.co/600x400.png",
    hint: "women entrepreneurs",
    link: "/sheconnects?from=educational",
    specialText: "(Digital Literacy for women)"
  },
  {
    title: "Milieu",
    description: "Fosters holistic development by connecting children from diverse backgrounds. Through interactive sessions, students learn together, building empathy, respect, and social awareness.",
    image: "/images/projects/milieu/milieu1.avif",
    hint: "children collaboration",
    link: "/milieu?from=educational",
    specialText: "(Learn Beyond Boundaries)"
  },
  {
    title: "VidyaShakti",
    description: "by AIM Foundation is a multilingual AI app that offers instant learning support, helping rural and first-generation learners study confidently and independently.",
    image: "https://placehold.co/600x400.png",
    hint: "learning app",
    link: "/vidyashakti?from=educational",
    specialText: "(App for Education)"
  }
];

export default function EducationalInitiativesPage() {
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
    "description": "Explore AIM Foundation’s educational initiatives empowering children and youth through digital literacy, English training, e-learning, creativity, and inclusive growth."
    };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-edu"
      />
      <section className="relative w-full">
        <div className="relative w-full">
          <Image
            src="/images/banner/education.avif"
            alt="Educational Initiatives Banner"
            width={1920}
            height={580}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
          <div className="relative z-10 text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Unlocking Potential Through Education
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Our educational programs are designed to inspire, empower, and create opportunities for every learner.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Educational Initiatives</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We are committed to breaking down barriers to education and fostering a lifelong love of learning.
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
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <CardTitle className="font-headline mb-2">{item.title}</CardTitle>
                  {item.specialText && <p className="text-sm font-bold text-muted-foreground mb-2">{item.specialText}</p>}
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
