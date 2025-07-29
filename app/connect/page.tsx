
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import ContactEmail from "@/components/layout/ContactEmail";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ConnectPage() {
  return (
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
                      <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                        +91 123 456 7890
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
  );
}
