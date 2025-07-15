const ImpactStat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <p className="text-4xl md:text-5xl font-bold text-primary font-headline">{value}</p>
    <p className="text-md md:text-lg text-muted-foreground mt-2">{label}</p>
  </div>
);

const Impact = () => {
  const stats = [
    { value: '7,000,000+', label: 'Lives Impacted' },
    { value: '60,000+', label: 'Villages Reached' },
    { value: '1,500+', label: 'Projects Completed' },
    { value: '10,000+', label: 'Volunteers Engaged' },
  ];

  return (
    <section className="bg-muted py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase font-headline">Our Impact</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We measure our success by the lives we change. Our efforts have reached millions, creating lasting positive change across numerous communities.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ImpactStat key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
