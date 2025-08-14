
'use client';

import Image from 'next/image';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  {
    id: '43',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'community event'
  },
  {
    id: '44',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'volunteer work'
  },
  {
    id: '45',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'children smiling'
  },
  {
    id: '46',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'health camp'
  },
  {
    id: '47',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'education program'
  },
  {
    id: '48',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'sustainability project'
  },
  {
    id: '37',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'community event'
  },
  {
    id: '38',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'volunteer work'
  },
  {
    id: '39',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'children smiling'
  },
  {
    id: '40',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'health camp'
  },
  {
    id: '41',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'education program'
  },
  {
    id: '42',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'sustainability project'
  },
  {
    id: '31',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'community event'
  },
  {
    id: '32',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'volunteer work'
  },
  {
    id: '33',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'children smiling'
  },
  {
    id: '34',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'A new gallery image placeholder.',
    hint: 'health camp'
  },
  {
    id: '26',
    imageUrl: '/images/projects/sustainability/sustainability5.avif',
    description: 'Sapling Distribution at Ranaghat, Nadia, West Bengal.',
    hint: 'sapling distribution'
  },
  {
    id: '25',
    imageUrl: '/images/projects/sustainability/sustainablity4.avif',
    description: 'Community members planting saplings',
    hint: 'sustainability project'
  },
  {
    id: '24',
    imageUrl: '/images/projects/innocent-smiles/innocent-smiles1.avif',
    description: 'Drawing Class for the underprivileged children at Sarala Punyashram, Kolkata.',
    hint: 'drawing class'
  },
  {
    id: '23',
    imageUrl: '/images/projects/digiempower/digiempower2.avif',
    description: 'Computer Classes at Dakshin Dhupjhora, Jalpaiguri, West Bengal.',
    hint: 'computer centre'
  },
  {
    id: '22',
    imageUrl: '/images/projects/oralscan/oranscan2.avif',
    description: 'Oral Cancer Detection Camp.',
    hint: 'oral cancer screening'
  },
  {
    id: '21',
    imageUrl: '/images/projects/relief/relief3.avif',
    description: 'Blanket Distribution to Adivasi people of Shalboni, West Bengal in association with Muthoot Finance.',
    hint: 'blanket distribution'
  },
  {
    id: '20',
    imageUrl: '/images/projects/sustainability/sustainability3.avif',
    description: 'Environment Awareness Programme.',
    hint: 'environment awareness programme'
  },
  {
    id: '19',
    imageUrl: '/images/projects/sighthope/sighthope1.avif',
    description: 'Eye Camp at Sarala Punyashram, Kolkata in association with Susrut Eye Foundation.',
    hint: 'eye camp'
  },
  {
    id: '18',
    imageUrl: '/images/projects/detect/detect1.avif',
    description: 'Cervical Cancer Screening Camp in association with Chittaranjan National Cancer Institute.',
    hint: 'cervical cancer screening'
  },
  {
    id: '17',
    imageUrl: '/images/projects/eduaccess/eduaccess1.avif',
    description: 'Online Class from Kolkata for the students of Sundarbans.',
    hint: 'online classes'
  },
  {
    id: '16',
    imageUrl: '/images/projects/carecircle/carecircle2.avif',
    description: 'Medical Camp at Mallickpur, near Kolkata.',
    hint: 'medical camp'
  },
  {
    id: '15',
    imageUrl: '/images/projects/digiempower/digiempower1.avif',
    description: 'Digital Literacy Class at Rangakhila village, East Bardhaman District of West Bengal',
    hint: 'health camp'
  },
  {
    id: '14',
    imageUrl: '/images/projects/carecircle/carecircle1.webp',
    description: 'Health Camp at Sarala Punyashram, Kolkata, in association with bhagirathi Neotia Women and Childcare Centre.',
    hint: 'health Camp'
  },
  {
    id: '13',
    imageUrl: '/images/projects/sustainability/sustainability1.avif',
    description: 'Mangrove Plantation in Sundarbans.',
    hint: 'mangrove plantation'
  },
  {
    id: '12',
    imageUrl: '/images/projects/detect/detect2.avif',
    description: 'A cervical cancer awareness session for rural women.',
    hint: 'cervical cancer awareness'
  },
  {
    id: '11',
    imageUrl: '/images/projects/childfirst/childfirst1.avif',
    description: 'A doctor providing care to a young child.',
    hint: 'child health'
  },
  {
    id: '10',
    imageUrl: '/images/projects/edulab/edulab1.avif',
    description: 'Smart Classroom',
    hint: 'smart classroom'
  },
  {
    id: '9',
    imageUrl: '/images/projects/forest-cleaning/forest-cleaning1.avif',
    description: 'Cleaning of Garumara National Park.',
    hint: 'forest cleaning'
  },
  {
    id: '8',
    imageUrl: '/images/projects/milieu/milieu1.avif',
    description: 'Children from diverse backgrounds learning together.',
    hint: 'women entrepreneurship'
  },
  {
    id: '7',
    imageUrl: '/images/projects/oralscan/oralscan1.avif',
    description: 'Oral Cancer Screening in association with Narayana Health.',
    hint: 'oral cancer screening'
  },
  {
    id: '6',
    imageUrl: '/images/projects/cyclesafe/cyclesafe1.avif',
    description: 'Menstrual Hygiene Awareness Camp for the adolescent girls.',
    hint: 'menstrual hygiene awareness '
  },
  {
    id: '5',
    imageUrl: '/images/projects/relief/relief2.avif',
    description: 'Distributing blankets to footpath dwellers during winter.',
    hint: 'winter relief'
  },
  {
    id: '4',
    imageUrl: '/images/projects/sustainability/sustainability2.avif',
    description: 'Community members participating in a tree plantation drive.',
    hint: 'tree plantation'
  },
  {
    id: '3',
    imageUrl: '/images/projects/suidhaga/suidhaga1.avif',
    description: 'Empowering women through our skill development programs.',
    hint: 'women empowerment'
  },
  {
    id: '2',
    imageUrl: '/images/projects/cureline/cureline1.avif',
    description: 'Our dedicated doctor providing healthcare services in a remote village.',
    hint: 'healthcare camp'
  },
  {
    id: '1',
    imageUrl: '/images/projects/book/book-distribution.avif',
    description: 'Book diistribution to underprivileged children.',
    hint: 'children learning'
  }
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-20 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Gallery</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Moments of impact, stories of change. Explore our journey through these images.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((image) => (
                <Card key={image.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardContent className="relative aspect-[3/2] w-full p-0 overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      data-ai-hint={image.hint}
                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="p-4 absolute bottom-0 text-white">
                            <p className="font-semibold text-sm">{image.description}</p>
                        </div>
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
