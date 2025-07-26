
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Newsletter from "@/components/sections/Newsletter";

export default function NewsletterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-muted">
        <div className="w-full">
            <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
}
