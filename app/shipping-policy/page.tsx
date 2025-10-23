
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactEmail from "@/components/layout/ContactEmail";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shipping Policy - AIM Foundation',
  description: 'Our Shipping Policy clarifies that AIM Foundation is a non-profit and does not sell or ship physical goods. All contributions are voluntary, and receipts are delivered electronically.',
  robots: 'index, follow',
  alternates: {
    canonical: '/shipping-policy',
  },
};

export default function ShippingPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
              Shipping Policy
            </h1>
            <div className="space-y-6 text-muted-foreground text-justify">
              <p>
                For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within Not Applicable or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. ASSOCIATED INITIATIVE FOR MANKIND FOUNDATION is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within Not Applicable from the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on <a href="tel:+916290022813" className="text-primary hover:underline">6290022813</a> or <ContactEmail />.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
