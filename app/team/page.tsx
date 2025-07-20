

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Card, CardContent } from "../../components/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: 'Prof. Amitabha Mookherjee',
    designation: 'Chairman',
    image: 'https://placehold.co/400x400.png',
    hint: 'male leader portrait',
  },
  {
    name: 'Mr. Santanu Chatterjee',
    designation: 'Vice Chairman',
    image: 'https://placehold.co/400x400.png',
    hint: 'male leader portrait',
  },
  {
    name: 'Mr. Saibal Ganguly',
    designation: 'General Secretary',
    image: 'https://placehold.co/400x400.png',
    hint: 'male leader portrait',
  },
  {
    name: 'Mr. Chandan Roy',
    designation: 'Joint Secretary',
    image: 'https://placehold.co/400x400.png',
    hint: 'male professional portrait',
  },
  {
    name: 'Mr. Mridul Das',
    designation: 'Joint Secretary',
    image: 'https://placehold.co/400x400.png',
    hint: 'male professional portrait',
  },
  {
    name: 'CA Banasri Bhattacharyya',
    designation: 'Treasurer',
    image: 'https://placehold.co/400x400.png',
    hint: 'female professional portrait',
  },
  {
    name: 'Dr. Piyali Bhaduri',
    designation: 'Convenor - Health & Hygiene',
    image: 'https://placehold.co/400x400.png',
    hint: 'female doctor portrait',
  },
  {
    name: 'Dr. Madhumita Mukherjee',
    designation: 'Convenor - Environment',
    image: 'https://placehold.co/400x400.png',
    hint: 'female communications portrait',
  },
  {
    name: 'Prof Sushovon Sengupta',
    designation: 'Convenor - Awareness Initiative',
    image: 'https://placehold.co/400x400.png',
    hint: 'male professor portrait',
  },
  {
    name: 'Mr. Bhaskar Bhadra',
    designation: 'Convenors - Fund Raising',
    image: 'https://placehold.co/400x400.png',
    hint: 'male fundraiser portrait',
  },
  {
    name: 'Mrs. Sushmeli Dutta',
    designation: 'Eminant Writer',
    image: 'https://placehold.co/400x400.png',
    hint: 'female writer portrait',
  },
  {
    name: 'Dr. Apurba Mukherjee',
    designation: 'Scientist & Entrepreneur, California',
    image: 'https://placehold.co/400x400.png',
    hint: 'male scientist portrait',
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
            <div className="relative w-full" style={{ paddingTop: '52.08%' }}>
                <Image
                src="https://placehold.co/1920x1080.png"
                alt="Our Team Banner"
                fill
                className="object-cover brightness-50"
                data-ai-hint="diverse team professional"
                />
            </div>
            <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
                <div className="relative z-10 text-left">
                <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
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
                                width={400}
                                height={400}
                                data-ai-hint={member.hint}
                                className="w-full h-auto object-cover"
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
