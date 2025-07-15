import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Mr. Tarun K. Chatterjee',
    designation: 'Founder & Chairman',
    image: '/images/logo.png',
  },
  {
    name: 'Mrs. Priya Sharma',
    designation: 'Chief Executive Officer',
    image: '/images/logo.png',
  },
  {
    name: 'Mr. Rajesh Kumar',
    designation: 'Head of Operations',
    image: '/images/logo.png',
  },
  {
    name: 'Ms. Anjali Mehta',
    designation: 'Lead, Community Outreach',
    image: '/images/logo.png',
  },
];

const Team = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our dedicated team is the driving force behind our mission.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-none hover:bg-muted transition-colors duration-300">
              <CardContent className="flex flex-col items-center">
                <Avatar className="w-32 h-32 mb-4 border-4 border-primary/20">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold font-headline">{member.name}</h3>
                <p className="text-primary">{member.designation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
