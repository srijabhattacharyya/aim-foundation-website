
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import ContactEmail from './ContactEmail';

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
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24} /></Link>
              <Link href="https://www.instagram.com/aimfoundation_ngo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></Link>
              <Link href="https://www.linkedin.com/in/aim-foundation-ngo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></Link>
            </div>
            <div className='mt-4'>
                <h6 className='font-semibold text-md mb-4'><Link href="/newsletter">Newsletter</Link></h6>
                <p className='text-muted-foreground'>Subscribe to our newsletter for updates.</p>
                <h6 className='font-semibold text-md mb-4 mt-2'><Link href="/annual-report">Annual Report</Link></h6>
                 <h6 className='font-semibold text-md mb-4 mt-2'><Link href="/library">Library</Link></h6>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Associated Initiative for Mankind Foundation. All Rights Reserved. | <Link href="/policies" className="hover:text-primary transition-colors">Policies</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
