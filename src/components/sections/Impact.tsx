import { Users, Home } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      value: '50,000+',
      label: 'Lives Impacted',
      description: 'Through our health, education, and empowerment programs.',
    },
    {
      icon: <Home className="w-12 h-12 text-primary" />,
      value: '200+',
      label: 'Villages Reached',
      description: 'Providing essential services to remote communities.',
    },
  ];

  return (
    <section className="bg-muted py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase font-headline">Our Impact</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Every number tells a story of change. We are committed to creating a lasting impact, one life, one village at a time.
            </p>
        </div>
        <div className="max-w-4xl mx-auto bg-card p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {stat.icon}
                </div>
                <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                <h3 className="text-xl font-semibold mt-2 font-headline">{stat.label}</h3>
                <p className="text-muted-foreground mt-2">{stat.description}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
