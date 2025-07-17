import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Eye, Target, HeartHandshake } from 'lucide-react';

const identityItems = [
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
    icon: <HeartHandshake className="w-10 h-10 text-primary" />,
    title: 'Our Values',
    description: 'Guided by compassion, integrity, and collaboration, we work to create sustainable solutions and build trust with the communities we serve.',
  },
];

const Ethos = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ethos</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our mission, vision, and values are the bedrock of our foundation, guiding every action we take.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {identityItems.map((item, index) => (
            <Card key={index} className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {item.icon}
                </div>
                <CardTitle className="font-headline">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ethos;
