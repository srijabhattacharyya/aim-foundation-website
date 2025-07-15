import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sunita Devi',
    role: 'Beneficiary',
    testimonial: 'The skills I learned through the AIM Foundation have empowered me to start my own small business. I am forever grateful for their support.',
    image: 'https://placehold.co/100x100.png',
    data_ai_hint: 'indian woman',
  },
  {
    name: 'Rohan Verma',
    role: 'Volunteer',
    testimonial: 'Volunteering with the AIM Foundation has been a life-changing experience. Seeing the direct impact of our work is incredibly rewarding.',
    image: 'https://placehold.co/100x100.png',
    data_ai_hint: 'indian man',
  },
  {
    name: 'Prakash Iyer',
    role: 'Donor',
    testimonial: 'I trust AIM Foundation with my contributions because of their transparency and the real, tangible results they deliver in communities.',
    image: 'https://placehold.co/100x100.png',
    data_ai_hint: 'senior man',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What People Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from the individuals and communities we've had the privilege to work with.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-lg flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                </div>
                <blockquote className="text-muted-foreground mb-6 flex-grow">"{testimonial.testimonial}"</blockquote>
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.data_ai_hint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
