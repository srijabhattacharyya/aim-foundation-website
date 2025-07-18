
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DonationForm from "@/components/sections/DonationForm";

export default function InnocentSmilesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2 text-lg text-muted-foreground space-y-6 text-justify">
                 <h1 className="text-3xl md:text-4xl font-bold font-headline text-card-foreground mb-6">
                  Why Education Matters for Every Child
                </h1>
                <p>
                  Education is more than just learning; it's the cornerstone of a child's future. It unlocks their potential, builds confidence, and provides the tools they need to navigate the world. For children in underserved communities, a quality education can break the cycle of poverty and open doors to opportunities that would otherwise be out of reach.
                </p>
                <p>
                  Going to school provides a safe, nurturing environment where children can grow, express themselves, and develop crucial social skills. It protects them from the dangers of child labor and early marriage, allowing them to experience the joy of a happy, healthy childhood.
                </p>
                <p>
                  By supporting a child's education, you are not just giving them books and a uniform; you are investing in a brighter future for them, their family, and their entire community.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="lg:sticky lg:top-24">
                    <DonationForm />
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
