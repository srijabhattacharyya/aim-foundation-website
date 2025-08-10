
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: 'A valid email is required.' }),
});

type FormData = z.infer<typeof formSchema>;

export default function Newsletter() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    const { email } = data;

    try {
      const subscriberRef = doc(db, 'subscribers', email);
      const docSnap = await getDoc(subscriberRef);

      if (docSnap.exists()) {
        toast({
          variant: "destructive",
          title: 'Subscription Failed',
          description: "This email is already subscribed.",
        });
        setLoading(false);
        return;
      }

      await setDoc(subscriberRef, {
        email: email,
        createdAt: serverTimestamp(),
      });

      toast({
        title: "Thank you for subscribing!",
        description: "We will stay connected.",
      });
      reset();
    } catch (e: any) {
      console.error("Error subscribing:", e);
      toast({
        variant: "destructive",
        title: 'Subscription Failed',
        description: "Could not subscribe. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
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
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-grow w-full">
              <Input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="text-base w-full"
                aria-label="Email for newsletter"
              />
              {errors.email && <p className="text-sm font-medium text-destructive mt-2">{errors.email.message}</p>}
            </div>
            <Button type="submit" size="lg" className="flex-shrink-0 w-full sm:w-auto transition-transform transform hover:scale-105" disabled={loading}>
              {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Subscribing...</> : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
