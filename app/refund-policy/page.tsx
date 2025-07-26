
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DonationEmail from "@/components/layout/DonationEmail";

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
              Refund Policy
            </h1>
            <div className="space-y-6 text-muted-foreground text-justify">
              <p>
                At Associated Initiative for Mankind Foundation (hereinafter referred to as "AIM Foundation"), we deeply value the generosity and trust of all our donors. Your contributions go directly toward supporting our mission to uplift underprivileged communities through education, health, and empowerment initiatives.
              </p>
              
              <p>
                As a not-for-profit organization, all donations made to AIM Foundation are used immediately to fund ongoing programs and outreach activities. Therefore, we regret to inform you that we are unable to offer refunds on any donations once they have been processed.
              </p>
              
              <p>
                We sincerely request all donors to carefully review the donation details before confirming the transaction.
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">Contact Us</h2>
               <div className="text-muted-foreground space-y-2">
                <p>For queries related to donations, receipts, or compliance, please contact:</p>
                <div className="flex items-center gap-2">
                    <span>📧</span> <DonationEmail />
                </div>
                <p>📞 Phone: +91 6290022813</p>
                <p>🏢 Address: 41, Ballygaunge Terrace, Kolkata - 700029</p>
              </div>

              <div className="pt-6 text-center">
                <p>We thank you wholeheartedly for your support and understanding. Your kindness helps us continue creating meaningful change.</p>
                <p className="mt-2">— Team AIM Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
