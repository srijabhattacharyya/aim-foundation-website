
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DonationForm from "@/components/sections/DonationForm";

export default function InnocentSmilesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/2 space-y-4 text-justify">
                <h2 className="text-3xl font-bold mb-4 font-headline">Why Education Matters for Every Child</h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                    <p>
                    Education is more than just learning; it's the cornerstone of a child's future. It builds confidence and opens doors to opportunities that would otherwise be out of reach.
                    </p>
                    <p>
                    Going to school provides a safe, nurturing environment where children can grow and develop social and emotional skills. It protects them from child labor and early marriage.
                    </p>
                    <p>
                    By supporting a child's education, you're investing in a brighter future — not just for the child, but for their family and community too.
                    </p>
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                <DonationForm />
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
