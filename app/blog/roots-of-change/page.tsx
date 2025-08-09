
import type { Metadata } from 'next';
import RootsOfChangeBlogPage from './RootsOfChangeBlogPage';

export const metadata: Metadata = {
  title: 'Roots of Change: Planting Awareness, Growing a Greener Tomorrow',
  description: 'Discover how the Roots of Change initiative is cultivating environmental awareness and inspiring sustainable action from the ground up.',
  alternates: {
    canonical: '/blog/roots-of-change',
  },
};

export default function Page() {
  return <RootsOfChangeBlogPage />;
}
