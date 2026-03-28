
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/sections/Newsletter";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function NewsletterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted">
        <Breadcrumbs items={[{ label: 'Newsletter' }]} />
        <div className="flex items-center justify-center py-12 md:py-20">
            <div className="w-full">
                <Newsletter />
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
