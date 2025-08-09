
import type { Metadata } from 'next';
import GreenRootsBlogPage from './GreenRootsBlogPage';

export const metadata: Metadata = {
  title: 'Planting Hope, Growing Futures: The GreenRoots Journey',
  description: "Discover how AIM Foundation's GreenRoots initiative empowers communities to plant trees, foster environmental ownership, and build a sustainable future from the ground up.",
  alternates: {
    canonical: '/blog/planting-hope-growing-futures',
  },
};

export default function Page() {
  return <GreenRootsBlogPage />;
}
