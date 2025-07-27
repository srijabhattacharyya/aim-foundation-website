
const facts = [
    {
      percentage: "64%",
      description: "of Indian consumers prefer to buy from socially responsible companies",
      source: "Nielsen",
      color: "text-blue-600",
    },
    {
      percentage: "72%",
      description: "of consumers are more likely to stay loyal to brands that support a cause",
      source: "IICA",
      color: "text-green-500",
    },
    {
      percentage: "60%",
      description: "of consumers feel connected to brands that support social causes",
      source: "JWT India",
      color: "text-blue-600",
    },
    {
      percentage: "29%",
      description: "Checkout donation increases AOV by upto 29%",
      source: "ShoppingGives",
      color: "text-green-500",
    },
    {
      percentage: "74%",
      description: "of Indian consumers recommend brands that support social causes",
      source: "MSL Group",
      color: "text-blue-600",
    },
];

export default function QuickFacts() {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="inline-block bg-blue-600 text-white font-bold text-2xl px-4 py-2 mb-4">
                        QUICK FACTS
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                    {facts.map((fact, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <p className={`text-5xl font-bold ${fact.color}`}>{fact.percentage}</p>
                            <p className="mt-4 text-muted-foreground">{fact.description}</p>
                            <p className="mt-2 text-sm text-muted-foreground/80">(Source: {fact.source})</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
