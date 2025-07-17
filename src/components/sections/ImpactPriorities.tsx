import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HeartPulse, BookOpen, Leaf, Users, Briefcase, ShieldAlert } from "lucide-react";

const priorities = [
  {
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
    title: "Healthcare",
    description: "Providing accessible medical care, health camps, and awareness programs to underserved communities.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: "Education",
    description: "Ensuring quality education for children, supporting schools, and offering skill development for youth.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-primary" />,
    title: "Environment",
    description: "Promoting sustainability through tree plantation, waste management, and environmental awareness.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Women & Child Development",
    description: "Empowering women through self-help groups and ensuring child protection, health, and nutrition.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "Livelihood",
    description: "Creating sustainable livelihood opportunities through vocational training and support for small enterprises.",
  },
  {
    icon: <ShieldAlert className="w-10 h-10 text-primary" />,
    title: "Disaster Response",
    description: "Providing immediate relief and long-term rehabilitation to communities affected by natural disasters.",
  },
];

const ImpactPriorities = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Impact Priorities</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We focus our efforts on key areas to create deep, lasting change in the communities we serve.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priorities.map((priority, index) => (
            <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {priority.icon}
                </div>
                <CardTitle className="font-headline">{priority.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base">{priority.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactPriorities;
