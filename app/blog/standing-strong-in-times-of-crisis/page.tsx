
import type { Metadata } from 'next';
import DisasterReliefBlogPage from './DisasterReliefBlogPage';

export const metadata: Metadata = {
  title: 'From Despair to Recovery: Rebuilding Lives After Disaster',
  description: "Learn how AIM Foundation's Disaster Relief Program provides swift, compassionate, and effective assistance to communities affected by natural calamities.",
  alternates: {
    canonical: '/blog/standing-strong-in-times-of-crisis',
  },
};

export default function Page() {
  return <DisasterReliefBlogPage />;
}
