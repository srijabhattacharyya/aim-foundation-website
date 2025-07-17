import { CheckCircle } from 'lucide-react';

const recognitions = [
    { text: "Registered under the Indian Trusts Act, 1882" },
    { text: "Registered with the Income Tax Department u/s 12A" },
    { text: "Registered with the Income Tax Department u/s 80G" },
    { text: "Registered with the NITI Aayog" },
    { text: "Registered with Ministry of Corporate Affairs (CSR 1)" },
    { text: "Registered in Foreign Contribution Regulation Act (FCRA)" },
];

const LegalRecognitions = () => {
  return (
    <section id="legal-recognitions" className="py-12 md:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">Legal Recognitions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            Associated Initiative for Mankind Foundation is a Public Charitable Trust.
            </p>
            <div className="mt-8 bg-card p-8 rounded-lg shadow-md">
                <ul className="space-y-4">
                    {recognitions.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                            <span className="text-lg text-muted-foreground">{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LegalRecognitions;