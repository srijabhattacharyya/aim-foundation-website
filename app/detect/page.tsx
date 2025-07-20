
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import DetectDonationForm from "@/components/sections/donation-forms/DetectDonationForm";

export default function DetectPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' /* 1080 / 1920 = 0.5625 */ }}>
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Detect Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="cervical cancer screening"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Detect
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Detect Early. Live Fully.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Text Column */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Catching Cancer Before It Catches Her.</h2>
                <div className="text-lg text-muted-foreground space-y-4 text-justify">
                   <p>
                    Detect is a critical women’s health initiative by AIM Foundation that aims to empower rural women through increased awareness of <strong>cervical health and the early detection of cervical cancer</strong>. In partnership with the Chittaranjan National Cancer Institute and the Government of West Bengal, this initiative brings essential health education and screening services to some of the most underserved regions in the state.
                  </p>
                  <p>
                    Cervical cancer is one of the leading causes of cancer-related deaths among women in India, especially in rural areas where <strong>lack of awareness, stigma, and poor access to healthcare</strong> hinder early diagnosis. Project Detect addresses this gap through:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Community-based screening camps</strong>, especially for women with limited access to gynecological care</li>
                    <li><strong>Awareness sessions</strong> on HPV, cervical cancer symptoms, menstrual health, and preventive care</li>
                    <li><strong>Training and sensitization of ASHA and Anganwadi workers</strong> district-by-district, starting with Howrah, to ensure sustainable, local outreach</li>
                    <li>Encouraging open dialogue to break myths and cultural barriers around reproductive health</li>
                  </ul>
                  <p>
                    The initiative has already witnessed inspiring participation from women in remote villages, many of whom are learning about cervical health for the first time. These sessions not only save lives through early detection but also promote a broader sense of bodily autonomy, health literacy, and dignity.
                  </p>
                  <p>
                    By equipping both women and frontline health workers with knowledge and tools, Project Detect fosters a community-led movement for prevention, early intervention, and long-term well-being.
                  </p>
                  <h3 className="text-2xl font-bold font-headline pt-4">Help Her Live—Not Just Survive</h3>
                  <p>
                    In rural India, too many women are losing their lives to a disease that’s preventable. Your donation to Project Detect can fund life-saving cervical cancer screenings, awareness workshops, and training for frontline health workers. Just ₹500 can help screen a woman who’s never had access to gynecological care. With early detection comes hope, dignity, and a future. Stand with us to protect mothers, daughters, sisters—and ensure that no woman is left behind simply because she was unaware. Donate today and help us detect before it’s too late.
                  </p>
                </div>
              </div>

              {/* Right Sticky Form Column */}
              <div className="sticky top-24">
                <DetectDonationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
