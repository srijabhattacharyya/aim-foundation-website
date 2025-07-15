import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const activities = [
  {
    title: 'Community Health Camp',
    date: 'October 26, 2023',
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'community health',
    description: 'A successful health camp providing free check-ups and medicines to over 500 people in rural areas.',
  },
  {
    title: 'Educational Material Distribution',
    date: 'October 15, 2023',
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'children education',
    description: 'We distributed books, bags, and stationery to underprivileged students to support their education.',
  },
  {
    title: 'Environmental Awareness Drive',
    date: 'September 28, 2023',
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'environmental awareness',
    description: 'Planted over 1000 saplings and conducted workshops on waste management in local communities.',
  },
];

const Activities = () => {
  return (
    <section id="events" className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Recent Activities</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are constantly working to make a positive impact. Here's a glimpse of our latest initiatives and events.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={activity.data_ai_hint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-muted-foreground mb-2">{activity.date}</p>
                <CardTitle className="mb-2 font-headline">{activity.title}</CardTitle>
                <CardDescription className="flex-grow">{activity.description}</CardDescription>
                <Button variant="link" className="p-0 mt-4 self-start">Read More &rarr;</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
