
'use client';

import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';
import { newsletterSchema } from '@/components/sections/donation-forms/schemas';
import { db } from '@/app/lib/firebase';
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button type="submit" size="lg" className="flex-shrink-0 w-full sm:w-auto transition-transform transform hover:scale-105" disabled={isSubmitting}>
      {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Subscribing...</> : 'Subscribe'}
    </Button>
  );
}

export default function NewsletterForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = (formData.get('email') as string).trim().toLowerCase();
    const honeypot = formData.get('honeypot') as string;

    if (honeypot) {
      setIsSubmitting(false);
      return;
    }

    try {
      newsletterSchema.parse({ email });

      // Check for existing subscriber directly in Firestore
      const subscribersRef = collection(db, 'subscribers');
      const q = query(subscribersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        throw new Error('This email is already subscribed.');
      }

      // Add new subscriber
      await addDoc(subscribersRef, {
        email,
        createdAt: serverTimestamp(),
      });

      toast({
        title: 'Thank you for subscribing!',
        description: 'We will stay connected.',
      });
      (event.target as HTMLFormElement).reset();

    } catch (error: any) {
      const errorMessage = error instanceof z.ZodError 
        ? error.errors[0].message 
        : error.message;
      
      toast({
        variant: 'destructive',
        title: 'Subscription Failed',
        description: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <div className="flex-grow w-full">
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="text-base w-full"
          aria-label="Email for newsletter"
          required
        />
      </div>
      <input type="text" name="honeypot" className="hidden" />
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
}
