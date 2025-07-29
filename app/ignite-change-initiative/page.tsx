
import type { Metadata } from 'next';
import IgniteChangeInitiativeClientPage from './IgniteChangeInitiativeClientPage';

export const metadata: Metadata = {
    title: 'Ignite Change Initiative - AIM Foundation',
    description: 'Sparking Action, Inspiring Hope. Mobilizing communities for proactive social responsibility.',
    alternates: {
        canonical: '/ignite-change-initiative',
    },
};

export default function IgniteChangeInitiativePage() {
  return <IgniteChangeInitiativeClientPage />;
}
