
import type { Metadata } from 'next';
import InspireEduLabClientPage from './InspireEduLabClientPage';

export const metadata: Metadata = {
  title: 'Inspire EduLab - AIM Foundation',
  description: 'Transforming Learning, Empowering Minds. Redefining classrooms for a digital tomorrow.',
  alternates: {
    canonical: '/inspire-eduLab',
  },
};

export default function InspireEduLabPage() {
  return <InspireEduLabClientPage />;
}
