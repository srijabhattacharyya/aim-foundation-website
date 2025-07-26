
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function FilmsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            Page Under Construction
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We're working on something great! Please check back later.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
