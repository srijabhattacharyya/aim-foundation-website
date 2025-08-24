
import type { Metadata } from 'next';
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Gender Equality by AIM Foundation: Women Empowerment',
  description: 'AIM Foundation’s Gender Equality Programs empower women and girls through health, skills, and education—building confidence, independence, and equity.',
  keywords: ['AIM Foundation', 'gender equality programs', 'women empowerment Kolkata', 'SheConnects AIM Foundation', 'CycleSafe AIM Foundation', 'Detect AIM Foundation', 'SuiDhaga AIM Foundation', 'Krishti AIM Foundation', 'menstrual health support', 'cervical health awareness', 'women entrepreneurship India', 'NGO women empowerment programs'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/gender-equality-initiative',
    title: 'Gender Equality by AIM Foundation: Women Empowerment',
    description: 'AIM Foundation’s Gender Equality Programs empower women and girls through health, skills, and education—building confidence, independence, and equity.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Gender Equality Initiatives by AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    url: 'https://aimindia.org.in/gender-equality-initiative',
    title: 'Gender Equality by AIM Foundation: Women Empowerment',
    description: 'AIM Foundation’s Gender Equality Programs empower women and girls through health, skills, and education—building confidence, independence, and equity.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/gender-equality-initiative',
  },
};

const initiatives = [
  {
    title: "SheConnects",
    description: "empowers rural women through cervical health education and cancer screenings. In collaboration with Chittaranjan National Cancer Institute and the West Bengal government, it organizes community camps and trains frontline workers district by district—starting with Howrah—to promote early detection, break taboos, and build awareness for women’s reproductive health.",
    image: "https://placehold.co/600x400.png",
    hint: "women networking",
    link: "/sheconnects?from=gender-equality"
  },
  {
    title: "CycleSafe",
    description: "empowers underprivileged adolescent girls in and around Kolkata by promoting menstrual hygiene, cervical health awareness, and reproductive well-being. Through monthly sanitary napkin distribution and educational sessions, the initiative breaks taboos, builds knowledge, and fosters confidence—ensuring dignity, health, and equal opportunities for young girls to thrive.",
    image: "/images/projects/cyclesafe/cyclesafe3.avif",
    hint: "menstrual hygiene",
    link: "/cyclesafe?from=gender-equality"
  },
  {
    title: "Detect",
    description: "empowers rural women through cervical health education and cancer screenings. In collaboration with Chittaranjan National Cancer Institute and the West Bengal government, it organizes community camps and trains frontline workers district by district—starting with Howrah—to promote early detection, break taboos, and build awareness for women’s reproductive health.",
    image: "/images/projects/detect/detect2.avif",
    hint: "mother child health",
    link: "/detect?from=gender-equality"
  },
  {
    title: "SuiDhaga",
    description: "empowers women through hands-on training in tailoring and embroidery, helping them transform traditional skills into sources of income. By providing practical vocational education, the initiative equips women with the tools they need to gain financial independence, uplift their families, and take confident steps toward a more self-reliant future.",
    image: "/images/projects/suidhaga/suidhaga1.avif",
    hint: "women sewing",
    link: "/suidhaga?from=gender-equality"
  },
  {
    title: "Krishti",
    description: "is the next step for women trained through SuiDhaga, nurturing their journey from skill to self-reliance. By providing access to modern production setups and marketing support, Krishti empowers women to become entrepreneurs—transforming their craft into livelihood, their passion into purpose, and their efforts into lasting financial independence.",
    image: "/images/projects/krishti/krishti1.avif",
    hint: "women traditional art",
    link: "/krishti?from=gender-equality"
  },
];

export default function GenderEqualityInitiativesPage() {
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
    "description": "AIM Foundation’s Gender Equality Programs empower women and girls through health, skills, and education—building confidence, independence, and equity."
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-gender-equality"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section className="relative w-full">
            <div className="relative w-full">
              <Image
                src="/images/banner/gender-equality.avif"
                alt="Gender Equality Initiatives Banner"
                width={1920}
                height={580}
                className="w-full h-auto object-cover"
                data-ai-hint="women empowerment"
              />
            </div>
            <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
              <div className="relative z-10 text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Empowering Women, Uplifting Society
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Our initiatives are dedicated to creating a world of equal opportunity for women and girls.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20 lg:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Gender Equality Programs</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                  We believe that empowering women and girls is essential for building a just, prosperous, and compassionate society.
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
    </>
  );
}
