
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const GeneralDonationForm = dynamic(
    () => import('./donation-forms/GeneralDonationForm'),
    { 
        ssr: false,
        loading: () => <div className="p-8"><Skeleton className="h-[500px] w-full" /></div>
    }
);

const DonateSection = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Make a Difference Today</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Your contribution can change lives. Support our initiatives and help us build a better tomorrow for communities in need. Every donation, no matter the size, makes a meaningful impact.
            </p>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="lg" className="mt-8 transition-transform transform hover:scale-105">
                        Donate Now
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-0">
                    <GeneralDonationForm />
                </DialogContent>
            </Dialog>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
