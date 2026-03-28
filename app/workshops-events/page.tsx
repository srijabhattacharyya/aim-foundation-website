
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function WorkshopsEventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted">
        <Breadcrumbs items={[{ label: 'Resources' }, { label: 'Workshops & Events' }]} />
        <div className="flex items-center justify-center py-24 md:py-32">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">
              Page Under Construction
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              We're working on something great! Please check back later.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
