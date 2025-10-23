
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrusteeEmail from "@/components/layout/TrusteeEmail";
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
                At AIM Foundation, we are a non-profit organization engaged in social development initiatives in the fields of education, health, and community welfare.
              </p>
              <p>
                We do not sell any physical goods or products through our website.
              </p>
              <p>
                All contributions made on our website (www.aimindia.org.in) — including donations, sponsorships, or membership fees — are treated as voluntary contributions to support our charitable activities and are not linked to the purchase or delivery of any tangible item.
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">1. No Physical Shipment</h2>
              <p>
                Since AIM Foundation does not sell goods or merchandise, no physical shipment, delivery, or logistics are applicable.
              </p>
              <p>
                Upon successful completion of a donation or contribution, the confirmation receipt is automatically sent to the donor via email at the registered email address.
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">2. Donation Receipts</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Digital receipts are generated immediately after successful online transactions.</li>
                <li>If you do not receive your receipt within 72 hours, please contact us at <TrusteeEmail /> with your transaction details.</li>
                <li>Receipts are issued in compliance with applicable laws and may be used for tax exemption purposes under relevant sections (if eligible).</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">3. Event or Program Participation</h2>
              <p>
                In certain cases, AIM Foundation may issue digital confirmations or invitations for participation in events, volunteering, or awareness programs. These are also delivered electronically via email only.
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">4. Contact Information</h2>
              <p>For any queries related to donations, receipts, or online contributions, please contact:</p>
              <div className="pl-4">
                <p><strong>AIM Foundation</strong></p>
                <p>Email: <TrusteeEmail /></p>
                <p>Website: <Link href="https://www.aimindia.org.in" className="text-primary hover:underline">www.aimindia.org.in</Link></p>
              </div>

              <div className="pt-6 border-t mt-6">
                <p className="text-sm italic">
                  Note: This Shipping Policy is published in accordance with the requirements of online payment service providers and applies to all online financial transactions made through AIM Foundation’s official website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
