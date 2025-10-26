
'use client';

import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';
import { newsletterSchema } from '@/components/sections/donation-forms/schemas';

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
    const email = formData.get('email') as string;
    const honeypot = formData.get('honeypot') as string;

    // Honeypot check
    if (honeypot) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Zod validation on the client
      newsletterSchema.parse({ email });

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'An unknown error occurred.');
      }

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
      {/* Honeypot field for bot protection */}
      <input type="text" name="honeypot" className="hidden" />
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
}
