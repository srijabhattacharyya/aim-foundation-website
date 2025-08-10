
'use client';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useToast } from '../../hooks/use-toast';
import { FormEvent, useState, useRef } from 'react';
import { addSubscriber } from '@/app/actions/newsletterActions';
import ReCAPTCHA from 'react-google-recaptcha';
import dynamic from 'next/dynamic';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const DynamicReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });

const Newsletter = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [isCaptchaVisible, setIsCaptchaVisible] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  const handleInitialSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const currentEmail = formData.get('email') as string;

    if (!currentEmail || !/^\S+@\S+\.\S+$/.test(currentEmail)) {
      toast({
        variant: "destructive",
        title: 'Error',
        description: 'Please enter a valid email address.',
      });
      return;
    }
    
    setEmail(currentEmail);
    setIsCaptchaVisible(true);
  };
  
  const handleCaptchaChange = async (token: string | null) => {
    if (!token) {
      toast({
          variant: "destructive",
          title: "Verification Failed",
          description: "Please complete the reCAPTCHA to subscribe.",
      });
      setIsCaptchaVisible(false);
      return;
    }

    setIsLoading(true);
    
    const result = await addSubscriber({ email, recaptcha: token });
    
    if (result.success) {
        toast({
            title: "Thank you for subscribe to our Impact Mail",
            description: "We will stay connected",
        });
        setEmail('');
        const form = document.getElementById('newsletter-form') as HTMLFormElement;
        if(form) form.reset();
    } else {
        toast({
            variant: "destructive",
            title: 'Subscription Failed',
            description: result.error || 'An unknown error occurred.',
        });
    }

    recaptchaRef.current?.reset();
    setIsCaptchaVisible(false);
    setIsLoading(false);
  }

  return (
    <>
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
            <form id="newsletter-form" onSubmit={handleInitialSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
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

      <Dialog open={isCaptchaVisible} onOpenChange={setIsCaptchaVisible}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Verify You Are Human</DialogTitle>
            <DialogDescription>
              Please complete the challenge below to subscribe.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <DynamicReCAPTCHA
                ref={recaptchaRef}
                sitekey={recaptchaSiteKey}
                onChange={handleCaptchaChange}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Newsletter;
