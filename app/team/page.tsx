
import { Card, CardContent } from "../../components/ui/card";
import Image from "next/image";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import teamMembers from './team-data.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Meet Our Team | AIM Foundation Leaders & Change-Makers',
    description: 'Discover the dedicated team behind AIM Foundation, working passionately to drive education, healthcare, women empowerment, and community change across West Bengal.',
    keywords: ['AIM Foundation team', 'NGO leaders Kolkata', 'NGO staff West Bengal', 'AIM Foundation leadership', 'NGO volunteers Kolkata', 'education NGO team', 'healthcare NGO team'],
    authors: [{ name: 'AIM Foundation' }],
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        url: 'https://www.aimindia.org.in/team',
        title: 'Meet Our Team | AIM Foundation Leaders & Change-Makers',
        description: 'Discover the dedicated team behind AIM Foundation, working passionately to drive education, healthcare, women empowerment, and community change across West Bengal.',
        images: [
            {
                url: 'https://www.aimindia.org.in/home.avif',
                width: 1200,
                height: 630,
                alt: 'The team of AIM Foundation',
            },
        ],
        siteName: 'AIM Foundation',
        locale: 'en_IN',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@aimindiango',
        title: 'Meet Our Team | AIM Foundation Leaders & Change-Makers',
        description: 'Discover the dedicated team behind AIM Foundation, working passionately to drive education, healthcare, women empowerment, and community change across West Bengal.',
        images: ['https://www.aimindia.org.in/home.avif'],
    },
    alternates: {
        canonical: '/team',
    },
};


export default function TeamPage() {
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
        "description": "Discover the dedicated team behind AIM Foundation, working passionately to drive education, healthcare, women empowerment, and community change across West Bengal."
    };
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
        }}
        key="org-schema-team"
        />
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
            <div className="relative w-full">
                <Image
                src="/images/banner/team.avif"
                alt="Our Team Banner"
                width={1920}
                height={334}
                className="w-full h-auto object-cover"
                data-ai-hint="diverse team professional"
                priority
                />
            </div>
            <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/30 to-transparent text-white p-8 md:p-12">
                <div className="relative z-10 text-left">
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    The Heart of Our Mission
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Meet the passionate individuals dedicated to creating change.
                </p>
                </div>
            </div>
        </section>
        <section className="py-12 md:py-20 lg:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down">Meet Our Dedicated Team</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
                    The driving force behind our mission, our team is a dedicated group of professionals passionate about making a difference.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                    <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="relative">
                        <Image
                            src={member.image}
                            alt={`Portrait of ${member.name}`}
                            width={270}
                            height={270}
                            data-ai-hint={member.hint}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                        </div>
                        <CardContent className="p-6">
                        <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                        <p className="text-primary font-medium">{member.designation}</p>
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
