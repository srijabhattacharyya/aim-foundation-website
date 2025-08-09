
import type { Metadata } from 'next';
import InspireEduLabBlogPage from './InspireEduLabBlogPage';

export const metadata: Metadata = {
  title: 'Redefining Classrooms for a Digital Tomorrow: The Story of Inspire EduLab',
  description: "Discover how AIM Foundation's Inspire EduLab is transforming learning with smart, internet-enabled classrooms, bridging the digital divide for children across India.",
  alternates: {
    canonical: '/blog/redefining-classrooms-for-a-digital-tomorrow',
  },
};

export default function Page() {
  return <InspireEduLabBlogPage />;
}
