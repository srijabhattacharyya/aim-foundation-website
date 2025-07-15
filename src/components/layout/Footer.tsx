import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-4">AIM Foundation</h2>
            <p className="text-muted-foreground">
              A-123, Street Name,
              <br />
              City, State, 123456
              <br />
              India
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Email:</strong> info@aimfoundation.org
            </p>
            <p className="text-muted-foreground">
              <strong>Phone:</strong> +91 123 456 7890
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-md mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-md mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Join as a Volunteer</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Donate Now</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-md mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={24} /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24} /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24} /></Link>
            </div>
            <div className='mt-4'>
                <h4 className='font-semibold text-md mb-4'>Newsletter</h4>
                <p className='text-muted-foreground'>Subscribe to our newsletter for updates.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} AIM Foundation Hub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
