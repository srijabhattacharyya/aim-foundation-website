
import type { Metadata } from 'next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Films - AIM Foundation',
  description: 'Watch films that capture the stories and impact of our work at AIM Foundation.',
  alternates: {
    canonical: '/films',
  },
};

const videos = [
  {
    title: "A Glimpse into the Heart of AIM Foundation",
    description: "Watch the story of our mission, our people, and the lives we've touched.",
    imageUrl: "https://placehold.co/600x400.png",
    videoUrl: "https://www.youtube.com/watch?v=sG3BRIdRI3k",
    hint: "foundation story"
  },
  {
    title: "Bringing Lifelines to the Heart of the Sundarbans",
    description: "See how AIM Foundation is working for the healthcare of remote Sundarbans.",
    imageUrl: "/images/projects/cureline/cureline1.avif",
    videoUrl: "https://www.youtube.com/watch?v=574dd1HX2Ik",
    hint: "healthcare in sundarbans by aim foundation"
  },
  {
    title: "Restoring Hope with CureLine",
    description: "Journey with our mobile health camps to remote villages.",
    imageUrl: "https://placehold.co/600x400.png",
    videoUrl: "https://www.youtube.com/watch?v=example3",
    hint: "rural healthcare"
  },
  {
    title: "The Gift of Sight with SightHope",
    description: "Witness the joy as we help restore vision for those in need.",
    imageUrl: "https://placehold.co/600x400.png",
    videoUrl: "https://www.youtube.com/watch?v=example4",
    hint: "eye care camp"
  },
  {
    title: "Nurturing the Next Generation",
    description: "A look into our educational initiatives for underprivileged children.",
    imageUrl: "https://placehold.co/600x400.png",
    videoUrl: "https://www.youtube.com/watch?v=example5",
    hint: "children education"
  },
  {
    title: "Our Green Commitment",
    description: "Explore our efforts in environmental conservation and sustainability.",
    imageUrl: "https://placehold.co/600x400.png",
    videoUrl: "https://www.youtube.com/watch?v=example6",
    hint: "tree plantation"
  },
];

export default function FilmsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-muted">
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">
                Our Films
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Stories of change, captured on camera. Watch the impact of our work and the lives we've touched through these short films.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <CardContent className="p-0">
                        <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="block relative">
                            <Image
                                src={video.imageUrl}
                                alt={video.title}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={video.hint}
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <PlayCircle className="h-16 w-16 text-white" />
                            </div>
                        </Link>
                         <div className="p-4 bg-card">
                            <h3 className="font-bold font-headline text-lg">{video.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{video.description}</p>
                        </div>
                    </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
