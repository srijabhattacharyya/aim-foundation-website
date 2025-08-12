
"use client";

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

const newsletterFormSchema = z.object({
  email: z.string().email({ message: 'A valid email is required.' }),
});

type NewsletterFormData = z.infer<typeof newsletterFormSchema>;

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema),
  });

  const onNewsletterSubmit: SubmitHandler<NewsletterFormData> = async (data) => {
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
    <form onSubmit={handleSubmit(onNewsletterSubmit)} className="flex flex-col sm:flex-row gap-2">
        <div className="flex-grow w-full">
            <Input
                {...register("email")}
                type="email"
                placeholder="your.email@example.com"
                className="text-sm w-full"
                aria-label="Email for newsletter"
            />
            {errors.email && <p className="text-xs font-medium text-destructive mt-1">{errors.email.message}</p>}
        </div>
        <Button type="submit" size="sm" className="w-full sm:w-auto" disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
        </Button>
    </form>
  );
}
