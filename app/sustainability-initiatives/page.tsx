
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sustainability Initiatives by AIM Foundation: Nurturing Nature",
    description: "Explore AIM Foundation's sustainability programs, including mangrove restoration, reforestation, and environmental education, to build a greener future in India.",
    keywords: [
        'AIM Foundation sustainability',
        'GreenRoots tree planting',
        'TideShield mangrove restoration',
        'Roots of Change environmental education',
        'forest cleaning drives',
        'NGO environmental projects India',
        'Sundarbans conservation NGO'
    ],
    authors: [{ name: 'AIM Foundation' }],
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        url: 'https://aimindia.org.in/sustainability-initiatives',
        title: 'Sustainability Initiatives by AIM Foundation: Nurturing Nature',
        description: 'Explore AIM Foundation’s sustainability programs, including mangrove restoration, reforestation, and environmental education, to build a greener future in India.',
        images: [
            {
                url: 'https://aimindia.org.in/home.avif',
                width: 1200,
                height: 630,
                alt: 'Sustainability Initiatives by AIM Foundation',
            },
        ],
        siteName: 'AIM Foundation',
        locale: 'en_IN',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@aimindiango',
        title: 'Sustainability Initiatives by AIM Foundation: Nurturing Nature',
        description: 'Explore AIM Foundation’s sustainability programs, including mangrove restoration, reforestation, and environmental education, to build a greener future in India.',
        images: ['https://aimindia.org.in/home.avif'],
    },
    alternates: {
        canonical: '/sustainability-initiatives',
    },
};

const initiatives = [
  {
    title: "GreenRoots",
    description:
      "aims to promote reforestation in areas where land acquisition is not feasible. By distributing saplings directly to villagers, the project overcomes space constraints and fosters active community involvement in afforestation efforts. This grassroots approach helps expand local green cover in a sustainable and inclusive manner.",
    image: "/images/projects/sustainability/sustainablity4.avif",
    hint: "Tree Plantation and Distribution",
    link: "/green-roots",
  },
  {
    title: "TideShield",
    description:
      "is a mangrove restoration initiative on Bali Island in the Sundarbans, launched to revive ecosystems damaged by cyclones Amphan and Yaas. By planting native mangrove species and involving local communities, the project strengthens coastal resilience, prevents erosion, and restores biodiversity along vulnerable shorelines.",
    image: "/images/projects/tide-shield/tide-shield2.avif",
    hint: "Mangrove Restoration",
    link: "/tideshield?from=sustainability",
  },
  {
    title: "Roots of Change",
    description:
      "is AIM Foundation’s environmental education initiative aimed at cultivating awareness and sustainable habits. Through expert-led seminars, engaging workshops, and impactful learning materials, we empower students, communities, and leaders to take informed action for a greener, more resilient future—starting from the roots.",
    image: "/images/projects/sustainability/sustainability3.avif",
    hint: "Environmental Education",
    link: "/roots-of-change?from=sustainability",
  },
  {
    title: "Forest Cleaning",
    description:
      "is our hands-on initiative to restore natural habitats by organizing large-scale forest cleaning drives. We mobilize volunteers to remove plastic and other non-biodegradable waste, helping to preserve biodiversity and protect wildlife from the harmful effects of pollution.",
    image: "/images/projects/forest-cleaning/forest-cleaning1.avif",
    hint: "Forest Cleaning Volunteer",
    link: "/forest-cleaning?from=sustainability",
  },
];

export default function SustainabilityInitiativesPage() {
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
    "description": "Explore AIM Foundation’s sustainability programs, including mangrove restoration, reforestation, and environmental education, to build a greener future in India."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-sustainability"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {/* Banner */}
          <section className="relative w-full">
            <div className="relative w-full h-[580px] md:h-[580px]">
              <Image
                src="/images/banner/environment.avif"
                alt="Sustainability Initiatives Banner"
                fill
                className="object-cover"
                data-ai-hint="sustainable environment"
                priority
              />
            </div>
            <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent p-8 md:p-12">
              <div className="relative z-10 text-left text-white">
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Sustainability Initiatives
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  Nurturing Nature, Sustaining Life
                </p>
              </div>
            </div>
          </section>

          {/* Initiatives Grid */}
          <section className="py-12 md:py-20 lg:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">
                  Our Sustainability Programs
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                  We are committed to creating a sustainable future through environmental protection, conservation, and <Link href="/educational-initiatives" className="text-primary hover:underline">education</Link>. Our programs also align with our work in <Link href="/healthcare-initiatives" className="text-primary hover:underline">healthcare</Link> and <Link href="/gender-equality-initiative" className="text-primary hover:underline">women empowerment</Link>.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {initiatives.map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  >
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
                      <Button
                        asChild
                        variant="link"
                        className="p-0 mt-4 self-start transition-transform transform hover:scale-105"
                      >
                        <Link href={item.link}>Learn More &rarr;</Link>
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
