import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Dr. Aarav Sharma',
    designation: 'Founder & President',
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
];

const Team = () => {
  return (
    <section id="team" className="py-12 md:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            The driving force behind our mission, our team is a dedicated group of professionals passionate about making a difference.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
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
  );
};

export default Team;
