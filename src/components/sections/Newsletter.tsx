'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { FormEvent } from 'react';

const Newsletter = () => {
  const { toast } = useToast();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    
    // Reset form
    (event.target as HTMLFormElement).reset();

    toast({
      title: 'Subscribed!',
      description: `Thank you for subscribing, ${email}!`,
    });
  };

  return (
    <section id="contact" className="bg-muted py-12 md:py-20 lg:py-24 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Subscribe to our Impact Mail</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get the latest updates on our initiatives, events, and success stories delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-grow text-base"
              aria-label="Email for newsletter"
            />
            <Button type="submit" size="lg" className="flex-shrink-0 transition-transform transform hover:scale-105">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
