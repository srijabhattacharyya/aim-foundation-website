
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const programs = [
  {
    title: 'Educational Initiatives',
    description: 'Fostering learning and growth for all ages.',
    image: 'https://placehold.co/160x160.png',
    hint: 'education',
    link: '/educational-initiatives',
  },
  {
    title: 'Healthcare Initiatives',
    description: 'Ensuring access to quality medical care for communities.',
    image: 'https://placehold.co/160x160.png',
    hint: 'healthcare',
    link: '/healthcare-initiatives',
  },
  {
    title: 'Sustainability Initiatives',
    description: 'Protecting and preserving our planet for future generations.',
    image: 'https://placehold.co/160x160.png',
    hint: 'environment',
    link: '/sustainability-initiatives',
  },
  {
    title: 'Gender Equality Initiatives',
    description: 'Empowering women and girls to achieve their full potential.',
    image: 'https://placehold.co/160x160.png',
    hint: 'women empowerment',
    link: '/gender-equality-initiative',
  },
  {
    title: 'Childcare Initiatives',
    description: 'Providing safe and nurturing environments for children.',
    image: 'https://placehold.co/160x160.png',
    hint: 'childcare',
    link: '/childcare-initiatives',
  },
];

export default function Programs() {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Programs</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        We run a diverse range of programs to address the key challenges faced by underserved communities.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {programs.map((program, index) => (
                         <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 flex-grow">
                                <Image src={program.image} alt={program.title} width={80} height={80} data-ai-hint={program.hint} className="rounded-full border-2 border-primary" />
                                <h3 className="font-bold text-lg font-headline text-center">{program.title}</h3>
                                <p className="text-sm text-center text-muted-foreground flex-grow">{program.description}</p>
                                <Button asChild variant="link" className="p-0 mt-auto self-center transition-transform transform hover:scale-105">
                                    <Link href={program.link || '#'}>Learn More &rarr;</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
