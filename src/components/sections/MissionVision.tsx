import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Target, Briefcase } from 'lucide-react';

const MissionVision = () => {
  const items = [
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: 'Our Mission',
      description: 'To empower underprivileged communities by providing access to education, healthcare, and sustainable livelihood opportunities, fostering a society where everyone can thrive.',
    },
    {
      icon: <Eye className="w-10 h-10 text-primary" />,
      title: 'Our Vision',
      description: 'We envision a world of equality and dignity, where every individual has the power to reach their full potential and contribute to a just and compassionate global community.',
    },
    {
      icon: <Briefcase className="w-10 h-10 text-primary" />,
      title: 'Our Projects',
      description: 'From building schools in remote villages to running mobile health clinics, our projects are designed to create sustainable, long-term impact where it is needed most.',
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="text-center p-6 shadow-lg hover:bg-muted transition-colors duration-300">
              <CardHeader className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {item.icon}
                </div>
                <CardTitle className="font-headline">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">{item.description}</CardDescription>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
