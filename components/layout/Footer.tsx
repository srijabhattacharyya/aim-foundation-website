
"use client";

import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import ContactEmail from './ContactEmail';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const NewsletterForm = dynamic(
  () => import('@/components/sections/NewsletterForm'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex flex-col sm:flex-row gap-2">
        <Skeleton className="h-10 flex-grow" />
        <Skeleton className="h-10 w-24" />
      </div>
    )
  }
);


const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-4">Associated Initiative for Mankind Foundation</h2>
            <p className="text-muted-foreground">
              41, Ballygaunge Terrace,
              <br />
              Kolkata 700029,
              <br />
              India
            </p>
             <div className="text-muted-foreground mt-1">
              <strong>Email:</strong> <ContactEmail />
            </div>
            <p className="text-muted-foreground">
              <strong>Phone:</strong> +91 6290022813
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-md mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link href="/policies" className="text-muted-foreground hover:text-primary transition-colors">Policies</Link></li>
              <li><Link href="/code-of-conduct" className="text-muted-foreground hover:text-primary transition-colors">Code of Conduct</Link></li>
              <li><Link href="/grievance-redressal" className="text-muted-foreground hover:text-primary transition-colors">Grievance Redressal</Link></li>
              <li><Link href="/volunteering" className="text-muted-foreground hover:text-primary transition-colors">Volunteering</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-md mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><Link href="/join-us" className="text-muted-foreground hover:text-primary transition-colors">Join Us</Link></li>
              <li><Link href="/individual-donation" className="text-muted-foreground hover:text-primary transition-colors">Donate Now</Link></li>
              <li><Link href="/career" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/voices" className="text-muted-foreground hover:text-primary transition-colors">Voices of Change</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-md mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/aimindiango/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={24} /></Link>
              <Link href="https://x.com/aimindiango" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1200 1227" fill="currentColor">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6902H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.854V687.828Z"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/aimfoundation_ngo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></Link>
              <Link href="https://www.linkedin.com/in/aim-foundation-ngo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></Link>
              <Link href="https://www.youtube.com/@aimfoundation2604" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={24} /></Link>
            </div>
             <div className='mt-4'>
                <h6 className='font-semibold text-md mb-2'>Subscribe to our Impact Mails for updates</h6>
                <NewsletterForm />
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-muted-foreground text-sm">
           <p className="text-xs mb-4">Website developed by Srija Bhattacharyya, 3rd-year CSE student at KIIT University and dedicated AIM Foundation volunteer for over 7 years.</p>
           <p>&copy; {new Date().getFullYear()} Associated Initiative for Mankind Foundation. All Rights Reserved. | <Link href="/policies" className="hover:text-primary transition-colors">Policies</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
