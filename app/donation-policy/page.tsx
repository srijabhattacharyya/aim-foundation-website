
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DonationEmail from "@/components/layout/DonationEmail";

export default function DonationPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
              Donation Policy
            </h1>
            <div className="space-y-6 text-muted-foreground text-justify">
              <p>
                At Associated Initiative for Mankind Foundation (hereinafter referred to as "AIM Foundation"), we are deeply grateful for the generosity and trust of our donors. Your contributions play a vital role in supporting our mission to empower underprivileged communities through education, health, and social development programs.
              </p>
              <p>
                This Donation Policy outlines how we handle donations, issue receipts, and ensure transparency and compliance in all donor interactions.
              </p>
              
              <h2 className="text-2xl font-bold font-headline pt-4">Use of Donations</h2>
              <p>
                All donations received by AIM Foundation are used solely for charitable purposes in alignment with our mission and program goals. Funds may be allocated toward:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Educational and digital literacy programs</li>
                <li>Health camps and awareness drives</li>
                <li>Women and youth empowerment initiatives</li>
                <li>Program support, outreach, and capacity building</li>
                <li>Administrative and operational support for program delivery</li>
              </ul>
              <p>
                We are committed to ensuring that every rupee donated is used responsibly and effectively.
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">Modes of Donation</h2>
              <p>Donations can be made via:</p>
               <ul className="list-disc list-inside space-y-2">
                <li>Our secure online payment gateway on www.aimindia.org.in</li>
                <li>Direct bank transfer (NEFT/RTGS/IMPS)</li>
                <li>Cheques or Demand Drafts in favour of “Associated Initiative for Mankind Foundation”</li>
                <li>UPI, QR codes, or mobile wallets</li>
              </ul>
              <p>All online transactions are encrypted and processed through secure, PCI-DSS-compliant platforms.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">Tax Exemption (80G Certificate)</h2>
              <p>
                AIM Foundation is a registered not-for-profit organization under the Income Tax Act of India. Donations made to us are eligible for tax exemption under Section 80G, subject to applicable laws.
              </p>
              <p>Donors will receive:</p>
               <ul className="list-disc list-inside space-y-2">
                <li>A digital donation receipt</li>
                <li>80G certificate (if applicable)</li>
                <li>Annual summary of donations (on request)</li>
              </ul>
              <p>Please ensure correct details (PAN, address, email) are provided at the time of donation to facilitate compliance.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">Donation Refund Policy</h2>
              <p>
                Donations, once made, are non-refundable, as they are immediately allocated toward program support and implementation. We kindly request donors to carefully review the donation details before confirming the transaction. (For more information, please refer to our Refund Policy).
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">Donor Privacy</h2>
              <p>
                We respect your privacy. Personal information collected for donation processing is kept strictly confidential and is not shared, rented, or sold to any third party. (See our full Privacy Policy for more details.)
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">Donation Acknowledgment</h2>
               <p>
                All donations are acknowledged via email within 24–72 hours of receipt. For physical donations or large contributions, formal letters of acknowledgment and impact updates may also be provided.
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
