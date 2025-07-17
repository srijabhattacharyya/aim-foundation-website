import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: 'Prof. Amitabha Mookherjee',
    designation: 'Chairman',
    image: 'https://placehold.co/400x400.png',
    hint: 'male leader portrait',
  },
  {
    name: 'Priya Singh',
    designation: 'Director, Programs',
    image: 'https://placehold.co/400x400.png',
    hint: 'female leader portrait',
  },
  {
    name: 'Rohan Mehta',
    designation: 'Chief Financial Officer',
    image: 'https://placehold.co/400x400.png',
    hint: 'male professional portrait',
  },
  {
    name: 'Anika Gupta',
    designation: 'Head of Community Outreach',
    image: 'https://placehold.co/400x400.png',
    hint: 'female professional portrait',
  },
  {
    name: 'Vikram Reddy',
    designation: 'Project Manager, Healthcare',
    image: 'https://placehold.co/400x400.png',
    hint: 'male professional portrait',
  },
  {
    name: 'Saanvi Desai',
    designation: 'Lead, Education Initiatives',
    image: 'https://placehold.co/400x400.png',
    hint: 'female professional portrait',
  },
  {
    name: 'Arjun Verma',
    designation: 'Environmental Specialist',
    image: 'https://placehold.co/400x400.png',
    hint: 'male scientist portrait',
  },
  {
    name: 'Diya Patel',
    designation: 'Communications Coordinator',
    image: 'https://placehold.co/400x400.png',
    hint: 'female communications portrait',
  },
  {
    name: 'Kabir Khan',
    designation: 'IT & Operations Manager',
    image: 'https://placehold.co/400x400.png',
    hint: 'male tech portrait',
  },
  {
    name: 'Naina Joshi',
    designation: 'Volunteer Coordinator',
    image: 'https://placehold.co/400x400.png',
    hint: 'female coordinator portrait',
  },
  {
    name: 'Ravi Kumar',
    designation: 'Field Officer',
    image: 'https://placehold.co/400x400.png',
    hint: 'male field officer',
  },
  {
    name: 'Mira Kapoor',
    designation: 'Field Officer',
    image: 'https://placehold.co/400x400.png',
    hint: 'female field officer',
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
