
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import DonationForm from "@/components/sections/DonationForm";

export default function InnocentSmilesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full">
          <div className="relative w-full" style={{ paddingTop: '45%' }}>
            <Image
              src="https://placehold.co/1920x864.png"
              alt="Innocent Smiles Banner"
              fill
              className="object-cover brightness-50"
              data-ai-hint="happy children drawing"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-end justify-start text-white p-8 md:p-12">
            <div className="relative z-10 text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Innocent Smiles
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-up [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Shaping Dreams with Smiles and Skills
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">YOUR SUPPORT IS CRUCIAL IN ENSURING EDUCATION FOR ALL!</h2>
            </div>
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <div className="text-lg text-muted-foreground space-y-6 text-justify">
                    <p>
                        Childhood is said to be the best part of human life – an age where we are carefree, safe and happy. But a happy childhood is not the reality for many children, who are out-of-school. There are many reasons for children to drop out of school – from challenging socio-economic circumstances, to lack of awareness in communities where education is not seen as a priority.
                    </p>
                    <p>
                        Going to school not only ensures a dignified future and a happy present for children, but also gives them a safe space to express themselves, learn, share and grow. Children who drop out often have to work as child labour, are pushed into child marriages, or even become victims of child trafficking.
                    </p>
                    <p>
                        Smile Foundation, through its ‘Shiksha Na Ruke’ initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 160,000 children in 27 states of India.
                    </p>
                    <p>
                        Our education centres are designed to enhance the holistic development of children, and provide them opportunities to grow up as not just educated, but, healthy, aware, well-rounded and responsible individuals. Besides the students, we also work with teachers, parents, caregivers and the whole community so that children have a supportive environment to thrive in.
                    </p>
                    <p>
                       Despite all the odds, these young champions have not given up and continue to dream and work hard. With your support, we can fuel their dreams with accessible and quality education. Join hands with us to ensure a happy and safe childhood for all!
                    </p>
                </div>
              </div>
              <div className="lg:col-span-2 lg:sticky lg:top-24">
                <DonationForm />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
