
import type { Metadata } from 'next';
import IndividualDonationClientPage from './IndividualDonationClientPage';

export const metadata: Metadata = {
  title: 'Individual Donation - AIM Foundation',
  description: 'Become a Smile Warrior. Your contribution fuels our mission to bring healthcare, education, and hope to underserved communities.',
  alternates: {
    canonical: '/individual-donation',
  },
};

export default function IndividualDonationPage() {
  return <IndividualDonationClientPage />;
}
