
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
            <h1 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
              Innocent Smiles
            </h1>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2 text-lg text-muted-foreground space-y-6 text-justify">
                 <p>
                  Childhood is said to be the best part of human life – an age where we are carefree, safe and happy. But a happy childhood is not the reality for many children, who are out-of-school. There are many reasons for children to drop out of school – from challenging socio-economic circumstances, to lack of awareness in communities where education is not seen as a priority.
                </p>
                <p>
                  Going to school not only ensures a dignified future and a happy present for children, but also gives them a safe space to express themselves, learn, share and grow. Children who drop out often have to work as child labour, are pushed into child marriages, or even become victims of child trafficking.
                </p>
                <p>
                  Smile Foundation, through its ‘Shiksha Na Ruke’ initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 160,000 children in 27 states of India.
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
