
import type { Metadata } from 'next';
import CycleSafeBlogPage from './CycleSafeBlogPage';

export const metadata: Metadata = {
  title: 'From Stigma to Strength: The CycleSafe Story',
  description: "Learn how AIM Foundation's CycleSafe initiative is breaking the silence around menstrual health and empowering adolescent girls with dignity, confidence, and education.",
  alternates: {
    canonical: '/blog/from-stigma-to-strength',
  },
};

export default function Page() {
  return <CycleSafeBlogPage />;
}
