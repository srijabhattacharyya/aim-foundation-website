
import type { Metadata } from 'next';
import ForestCleaningBlogPage from './ForestCleaningBlogPage';

export const metadata: Metadata = {
  title: 'Restoring Natural Habitats: The Forest Cleaning Initiative',
  description: "Learn how AIM Foundation's Forest Cleaning initiative mobilizes volunteers to remove waste and restore the health of our forests.",
  alternates: {
    canonical: '/blog/forest-cleaning-restoring-natural-habitats',
  },
};

export default function Page() {
  return <ForestCleaningBlogPage />;
}
