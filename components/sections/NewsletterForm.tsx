'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { subscribeToNewsletter } from '@/app/actions/newsletterActions';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" className="flex-shrink-0 w-full sm:w-auto transition-transform transform hover:scale-105" disabled={pending}>
      {pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Subscribing...</> : 'Subscribe'}
    </Button>
  );
}

export default function NewsletterForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(subscribeToNewsletter, { success: false, message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Thank you for subscribing!',
          description: 'We will stay connected.',
        });
        formRef.current?.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Subscription Failed',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col sm:flex-row gap-4">
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
      <SubmitButton />
    </form>
  );
}
