
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, HeartHandshake, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Join Us | Volunteer, Intern, or Build a Career with AIM Foundation',
  description: 'Be part of AIM Foundation’s mission. Explore internships, volunteer programs, and career opportunities to make a real difference in communities across India.',
  keywords: [
    'AIM Foundation volunteer opportunities',
    'AIM Foundation internships',
    'NGO careers India',
    'join AIM Foundation',
    'social work internships India',
    'NGO volunteer programs',
    'careers with purpose NGO',
    'student internships NGO India',
    'non profit jobs India',
    'community service AIM Foundation',
  ],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/join-us',
    title: 'Join Us | Volunteer, Intern, or Build a Career with AIM Foundation',
    description: 'Be part of AIM Foundation’s mission. Explore internships, volunteer programs, and career opportunities to make a real difference in communities across India.',
    images: [
      {
        url: 'https://aimindia.org.in/home.avif',
        width: 1200,
        height: 630,
        alt: 'Join AIM Foundation',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Join Us | Volunteer, Intern, or Build a Career with AIM Foundation',
    description: 'Explore internships, volunteer programs, and career opportunities to make a real difference.',
    images: ['https://aimindia.org.in/home.avif'],
  },
  alternates: {
    canonical: '/join-us',
  },
};

const opportunities = [
    {
        icon: <Briefcase className="w-12 h-12 text-primary" />,
        title: "Careers",
        description: "Build a career with purpose. Join our team of passionate professionals dedicated to creating lasting social change.",
        link: "/career",
        buttonText: "View Openings"
    },
    {
        icon: <HeartHandshake className="w-12 h-12 text-primary" />,
        title: "Volunteering",
        description: "Lend your time and skills to our grassroots initiatives. Make a tangible impact, whether in person or virtually.",
        link: "/volunteering",
        buttonText: "Become a Volunteer"
    },
    {
        icon: <GraduationCap className="w-12 h-12 text-primary" />,
        title: "Internships",
        description: "Gain hands-on experience in the social sector. Our internships offer a unique opportunity to learn, contribute, and grow.",
        link: "/internship",
        buttonText: "Explore Internships"
    }
];

export default function JoinUsPage() {
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "AIM Foundation",
        "url": "https://aimindia.org.in/join-us",
        "logo": "https://aimindia.org.in/logo.png",
        "description": "Explore internships, volunteer programs, and career opportunities to make a real difference in communities across India.",
    };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-join-us"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <section className="py-12 md:py-20 lg:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline">Join Our Mission</h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            Whether you're looking to build a career, gain experience, or simply give back, there's a place for you at AIM Foundation.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {opportunities.map((opp, index) => (
                            <Card key={index} className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                                <div className="bg-primary/10 p-4 rounded-full mb-6">
                                    {opp.icon}
                                </div>
                                <CardTitle className="font-headline text-2xl mb-4">{opp.title}</CardTitle>
                                <CardDescription className="text-base text-muted-foreground flex-grow mb-6">{opp.description}</CardDescription>
                                <Button asChild size="lg" className="w-full mt-auto">
                                    <Link href={opp.link}>{opp.buttonText}</Link>
                                </Button>
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
