
'use client';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '../../hooks/use-toast';
import { FormEvent, useState, useRef } from 'react';
import { addSubscriber } from '@/app/actions/newsletterActions';
import ReCAPTCHA from 'react-google-recaptcha';
import dynamic from 'next/dynamic';

const DynamicReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });

const Newsletter = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";


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

    recaptchaRef.current?.execute();
  };
  
  const onReCAPTCHAChange = async (token: string | null) => {
    if (!token) {
        toast({
            variant: "destructive",
            title: "Verification Failed",
            description: "Please complete the reCAPTCHA to subscribe.",
        });
        setIsLoading(false);
        return;
    }

    const email = emailInputRef.current?.value || '';
    const result = await addSubscriber(email, token);

    if (result.success) {
        toast({
            title: "Thank you for subscribe to our Impact Mail",
            description: "We will stay connected",
        });
        if(emailInputRef.current) emailInputRef.current.value = "";
    } else {
        toast({
            variant: "destructive",
            title: 'Subscription Failed',
            description: result.error || 'An unknown error occurred.',
        });
    }
    
    recaptchaRef.current?.reset();
    setIsLoading(false);
  }

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
              ref={emailInputRef}
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-grow text-base w-full sm:w-auto"
              aria-label="Email for newsletter"
              disabled={isLoading}
            />
            <Button type="submit" size="lg" className="flex-shrink-0 w-full sm:w-auto transition-transform transform hover:scale-105" disabled={isLoading}>
              {isLoading ? 'Verifying...' : 'Subscribe'}
            </Button>
          </form>
           <div className="flex justify-center mt-4">
              <DynamicReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={recaptchaSiteKey}
                onChange={onReCAPTCHAChange}
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
