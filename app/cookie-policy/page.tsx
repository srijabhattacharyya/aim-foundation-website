
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactEmail from "@/components/layout/ContactEmail";

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
              Cookie Policy
            </h1>
            <div className="space-y-6 text-muted-foreground text-justify">
              <p>
                This Cookie Policy explains how Associated Initiative for Mankind Foundation (hereinafter referred to as "AIM Foundation"), uses cookies and similar technologies to recognise users when they visit our website: www.aimindia.org.in. It outlines what these technologies are, why we use them, and your rights to control their use.
              </p>
              <p>
                By continuing to use our website, you consent to our use of cookies in accordance with this policy.
              </p>
              
              <h2 className="text-2xl font-bold font-headline pt-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your browser or device when you visit a website. They help websites remember your actions, preferences (such as login, language, font size), and improve your user experience. Cookies may also be used to collect anonymous analytics or track user behaviour on the site.
              </p>

              <h2 className="text-2xl font-bold font-headline pt-4">2. Types of Cookies We Use</h2>
              <p>We use the following types of cookies on our website:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Essential Cookies:</strong> Necessary for the functioning of the website (e.g., page navigation, form submissions). These cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., through Google Analytics). This data is anonymised and used only for internal insights to improve website performance.</li>
                <li><strong>Functional Cookies:</strong> Enable the site to remember your choices (such as language or region) to provide enhanced features.</li>
                <li><strong>Third-Party Cookies:</strong> Some pages may contain embedded content from external platforms (e.g., YouTube, Google Maps, or social media). These services may set their own cookies, which we do not control. We recommend reviewing their respective cookie policies.</li>
              </ul>
              
              <h2 className="text-2xl font-bold font-headline pt-4">3. How We Use Cookies</h2>
              <p>Cookies are used on our website to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Maintain website functionality</li>
                <li>Improve browsing experience</li>
                <li>Analyse traffic patterns and user engagement</li>
                <li>Display embedded content or social sharing options</li>
              </ul>
              <p>We do not use cookies to collect personally identifiable information, nor do we share your browsing data with advertisers or third-party marketing agencies.</p>

              <h2 className="text-2xl font-bold font-headline pt-4">4. Managing and Controlling Cookies</h2>
              <p>You can manage or disable cookies at any time by adjusting your browser settings. Most browsers allow you to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Accept or reject all cookies</li>
                <li>Delete cookies already stored</li>
                <li>Set preferences for certain websites</li>
              </ul>
              <p>Please note that disabling essential cookies may affect your ability to use some features of our website.</p>
              <p>For browser-specific guidance, refer to the help section of:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Safari</li>
                <li>Microsoft Edge</li>
              </ul>

              <h2 className="text-2xl font-bold font-headline pt-4">5. Updates to This Policy</h2>
              <p>We may update this Cookie Policy periodically to reflect changes in legal requirements or in how we use cookies. Updates will be posted on this page with a revised effective date. We encourage you to review this policy from time to time.</p>
              
              <h2 className="text-2xl font-bold font-headline pt-4">6. Contact Us</h2>
              <p>If you have any questions or concerns about our use of cookies or this policy, feel free to contact us at:</p>
              <div className="pl-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span>📧</span> <ContactEmail />
                </div>
                <p>🏢 Address: 41, Ballygaunge Terrace, Kolkata 700029</p>
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
