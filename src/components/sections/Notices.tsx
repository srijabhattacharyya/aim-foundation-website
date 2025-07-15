import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Bell } from 'lucide-react';

const notices = [
  {
    title: 'Foundation\'s 10th Anniversary',
    description: 'Join us in celebrating a decade of service and impact on our foundation day.',
    date: 'Dec 1, 2023',
  },
  {
    title: 'Annual General Meeting',
    description: 'All members are invited to attend the AGM to discuss our future roadmap.',
    date: 'Nov 25, 2023',
  },
  {
    title: 'Winter Clothes Donation Drive',
    description: 'We are collecting warm clothes for the underprivileged. Drop-off points are now open.',
    date: 'Nov 10, 2023',
  },
];

const Notices = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Latest Notices & Announcements</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our upcoming events, important dates, and special announcements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notices.map((notice, index) => (
            <Card key={index} className="bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Bell className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-headline">{notice.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{notice.date}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{notice.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notices;
