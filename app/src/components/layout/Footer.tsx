import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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
              <li><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Home</span></li>
              <li><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">About Us</span></li>
              <li><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Initiatives</span></li>
              <li><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Events</span></li>
              <li><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Connect</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-md mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Join Us</span></li>
              <li><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Donate Now</span></li>
              <li><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Careers</span></li>
              <li><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">FAQs</span></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-md mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <span aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"><Facebook size={24} /></span>
              <span aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"><Twitter size={24} /></span>
              <span aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"><Instagram size={24} /></span>
              <span aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"><Linkedin size={24} /></span>
            </div>
            <div className='mt-4'>
                <h6 className='font-semibold text-md mb-4'>Newsletter</h6>
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
