
import type { Metadata } from 'next';
import SurgiReachBlogPage from './SurgiReachBlogPage';

export const metadata: Metadata = {
  title: 'Surgery Shouldn’t Be a Luxury: The SurgiReach Story',
  description: "Learn how AIM Foundation's SurgiReach initiative provides free, life-saving surgeries to economically disadvantaged individuals, restoring health and hope.",
  alternates: {
    canonical: '/blog/surgery-shouldnt-be-a-luxury',
  },
};

export default function Page() {
  return <SurgiReachBlogPage />;
}

