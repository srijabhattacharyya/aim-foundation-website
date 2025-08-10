
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '../../hooks/use-toast';
import { addSubscriber } from '@/app/actions/newsletterActions';
import ReCAPTCHA from 'react-google-recaptcha';

const initialState = {
  success: false,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="flex-shrink-0 w-full sm:w-auto transition-transform transform hover:scale-105" disabled={pending}>
      {pending ? 'Subscribing...' : 'Subscribe'}
    </Button>
  );
}

const Newsletter = () => {
  const [state, formAction] = useFormState(addSubscriber, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Thank you for subscribe to our Impact Mail",
        description: "We will stay connected",
      });
      formRef.current?.reset();
    } else if (state.error) {
      const errorMessage = state.error._form ? state.error._form.join(', ') : 'An unknown error occurred.';
      toast({
        variant: "destructive",
        title: 'Subscription Failed',
        description: errorMessage,
      });
    }
  }, [state, toast]);

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
          <form ref={formRef} action={formAction} className="mt-8 flex flex-col gap-4 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-grow text-base w-full sm:w-auto"
                aria-label="Email for newsletter"
              />
              <SubmitButton />
            </div>
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                name="g-recaptcha-response"
              />
            </div>
            {state.error?.email && <p className="text-sm font-medium text-destructive">{state.error.email}</p>}
            {state.error?.recaptcha && <p className="text-sm font-medium text-destructive">{state.error.recaptcha}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
