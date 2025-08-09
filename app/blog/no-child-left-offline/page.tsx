
import type { Metadata } from 'next';
import NoChildLeftOfflineBlogPage from './NoChildLeftOfflineBlogPage';

export const metadata: Metadata = {
  title: 'No Child Left Offline: How DigiEmpower is Bridging the Digital Divide',
  description: "Discover how AIM Foundation's DigiEmpower initiative is bridging the digital divide for underprivileged and Adivasi children in West Bengal.",
  alternates: {
    canonical: '/blog/no-child-left-offline',
  },
};

export default function Page() {
  return <NoChildLeftOfflineBlogPage />;
}

