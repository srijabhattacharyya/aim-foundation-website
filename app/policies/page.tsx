
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PoliciesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted">
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8 text-center">
                Our Policies
              </h1>
              <div className="space-y-12">
                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h2 className="text-3xl font-bold font-headline mb-6">Privacy Policy</h2>
                  <div className="space-y-4 text-muted-foreground text-justify">
                    <p>
                      Associated Initiative for Mankind Foundation (hereinafter referred to as "AIM Foundation") is committed to protecting the privacy and confidentiality of all visitors, donors, and supporters who engage with us through our website: www.aimindia.org.in.
                    </p>
                    <p>
                      We value your trust and are dedicated to handling your personal information with the utmost care, transparency, and responsibility.
                    </p>
                    <h3 className="text-xl font-semibold font-headline pt-4">Collection and Use of Personal Information</h3>
                    <p>
                      When you choose to engage with AIM Foundation—by making a donation, subscribing to updates, or participating in our programs—you may be asked to provide personal details such as your name, email address, phone number, mailing address, and payment information.
                    </p>
                    <p>
                      Please be assured that:
                    </p>
                    <ul className="list-disc list-inside pl-4 space-y-2">
                        <li>This information is collected only with your knowledge and consent, and</li>
                        <li>It is used solely for the purpose of processing donations, issuing receipts, providing updates, and responding to your queries or requests.</li>
                    </ul>
                    <p>
                      Only authorised internal personnel have access to this information, and it is handled with the highest degree of confidentiality.
                    </p>
                    <h3 className="text-xl font-semibold font-headline pt-4">Browsing Information</h3>
                    <p>
                      You may browse our website without revealing any personal data. Basic non-personal information, such as IP address, date and time of access, browser type, and general location, may be automatically collected for analytics purposes. This information helps us improve website performance and user experience, but it does not identify individual users.
                    </p>
                    <p>
                      We do not share, sell, rent, or trade any personal or browsing data with third parties.
                    </p>
                    <h3 className="text-xl font-semibold font-headline pt-4">Third-Party Links</h3>
                    <p>
                      Our website may contain links to external websites for additional information or convenience. Please note that AIM Foundation is not responsible for the content, security, or privacy practices of such third-party sites. We strongly encourage users to review the privacy policies of these external websites before sharing any personal information.
                    </p>
                     <h3 className="text-xl font-semibold font-headline pt-4">Data Security</h3>
                     <p>
                      We take all reasonable precautions to ensure that your personal data is secure. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
                    </p>
                    <h3 className="text-xl font-semibold font-headline pt-4">Changes to This Policy</h3>
                    <p>
                      AIM Foundation reserves the right to update or modify this Privacy Policy at any time, in accordance with legal requirements or changes in our data practices. Any such changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically.
                    </p>
                  </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h2 className="text-3xl font-bold font-headline mb-6">Refund Policy</h2>
                   <div className="space-y-4 text-muted-foreground text-justify">
                    <p>
                      At Associated Initiative for Mankind Foundation (AIM Foundation), we deeply value the generosity and trust of all our donors. Your contributions go directly toward supporting our mission to uplift underprivileged communities through education, health, and empowerment initiatives.
                    </p>
                    <p>
                      As a not-for-profit organization, all donations made to AIM Foundation are used immediately to fund ongoing programs and outreach activities. Therefore, we regret to inform you that we are unable to offer refunds on any donations once they have been processed.
                    </p>
                    <p>
                      We sincerely request all donors to carefully review the donation details before confirming the transaction.
                    </p>
                  </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-md">
                   <div className="space-y-4 text-muted-foreground text-justify">
                    <p>
                      We thank you wholeheartedly for your support and understanding. Your kindness helps us continue creating meaningful change.
                    </p>
                    <p className="pt-4">
                      <strong>Warm regards,</strong><br />
                      Team AIM Foundation
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
