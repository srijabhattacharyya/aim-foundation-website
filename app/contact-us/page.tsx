import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import ContactEmail from "@/components/layout/ContactEmail";
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | AIM Foundation',
  description: 'Get in touch with AIM Foundation. We would love to hear from you.',
  keywords: ['AIM Foundation contact', 'contact AIM Foundation', 'NGO contact Kolkata', 'volunteer contact NGO', 'donation contact AIM Foundation'],
  robots: 'index, follow',
  authors: [{ name: 'AIM Foundation' }],
  openGraph: {
    type: 'website',
    url: 'https://aimindia.org.in/contact-us',
    title: 'Contact Us | AIM Foundation',
    description: 'Get in touch with AIM Foundation. We would love to hear from you.',
    images: [
      {
        url: 'https://aimindia.org.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'AIM Foundation Logo',
      },
    ],
    siteName: 'AIM Foundation',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aimindiango',
    title: 'Contact Us | AIM Foundation',
    description: 'Get in touch with AIM Foundation. We would love to hear from you.',
    images: ['https://aimindia.org.in/logo.png'],
  },
  alternates: {
    canonical: '/contact-us',
  },
};

export default function ContactUsPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AIM Foundation",
    "url": "https://www.aimindia.org.in/",
    "logo": "https://www.aimindia.org.in/logo.png",
    "sameAs": [
      "https://www.facebook.com/aimindiango/",
      "https://x.com/aimindiango",
      "https://www.instagram.com/aimfoundation_ngo/",
      "https://www.linkedin.com/in/aim-foundation-ngo/",
      "https://www.youtube.com/@aimfoundation2604"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 6290022813",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "email": "mailto:info@aimindia.org.in"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="org-schema-contact"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-muted">
          <section className="py-12 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Get In Touch</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  We'd love to hear from you. Whether you have a question, a suggestion, or just want to say hello, feel free to reach out.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="bg-card p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold font-headline mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
                <div className="flex flex-col justify-center space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-headline">Our Office</h3>
                      <p className="text-muted-foreground mt-1">
                          41, Ballygaunge Terrace,
                          <br />
                          Kolkata 700029,
                          <br />
                          India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-headline">Email Us</h3>
                      <ContactEmail />
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-headline">Call Us</h3>
                      <p className="text-muted-foreground mt-1">
                        <a href="tel:+916290022813" className="hover:text-primary transition-colors">
                          +91 6290022813
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
