
'use client';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '../../hooks/use-toast';
import { FormEvent, useState } from 'react';
import { db } from '@/lib/firebase';
import { doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore';

const Newsletter = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    
    if (!email) {
      toast({
        variant: "destructive",
        title: 'Error',
        description: 'Please enter a valid email address.',
      });
      setIsLoading(false);
      return;
    }

    try {
        const subscriberRef = doc(db, 'subscribers', email);
        const docSnap = await getDoc(subscriberRef);

        if (docSnap.exists()) {
            toast({
                variant: "destructive",
                title: 'Already Subscribed',
                description: 'This email address is already on our list.',
            });
        } else {
            await setDoc(subscriberRef, {
                email: email,
                createdAt: serverTimestamp(),
            });
            toast({
                title: "Thank you for subscribe to our Impact Mail",
                description: "We will stay connected",
            });
            (event.target as HTMLFormElement).reset();
        }
    } catch (error) {
        console.error("Error adding subscriber to Firestore: ", error);
        toast({
            variant: "destructive",
            title: 'Subscription Failed',
            description: 'Could not subscribe. Please try again.',
        });
    }
    
    setIsLoading(false);
  };

  return (
    <section id="contact" className="bg-muted py-12 md:py-20 lg:py-24 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Subscribe to our Impact Mail</h2>
          <div className="mt-4 text-lg text-muted-foreground space-y-2">
            <p>
              Receive inspiring stories, updates on our initiatives, and heartwarming glimpses of the lives we’re changing — all delivered straight to your inbox.
            </p>
            <p>
              <em className="italic">Let every update remind you that</em> <strong className="italic">together, we’re making a difference.</strong>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-grow text-base w-full sm:w-auto"
              aria-label="Email for newsletter"
              disabled={isLoading}
            />
            <Button type="submit" size="lg" className="flex-shrink-0 w-full sm:w-auto transition-transform transform hover:scale-105" disabled={isLoading}>
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
