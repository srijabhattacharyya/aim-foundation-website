
import type { Metadata } from 'next';
import DigiEmpowerClientPage from './DigiEmpowerClientPage';

export const metadata: Metadata = {
  title: 'DigiEmpower - AIM Foundation',
  description: 'Bridging the digital divide and building futures through digital literacy for underprivileged children.',
  alternates: {
    canonical: '/digiempower',
  },
};

export default function DigiEmpowerPage() {
  return <DigiEmpowerClientPage />;
}
