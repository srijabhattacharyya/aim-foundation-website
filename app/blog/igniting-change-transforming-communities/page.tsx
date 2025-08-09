
import type { Metadata } from 'next';
import IgniteChangeBlogPage from './IgniteChangeBlogPage';

export const metadata: Metadata = {
  title: 'Igniting Change: How Grassroots Action Transforms Communities',
  description: "Discover how AIM Foundation's Ignite Change initiative empowers local communities to create sustainable solutions and drive their own transformation.",
  alternates: {
    canonical: '/blog/igniting-change-transforming-communities',
  },
};

export default function Page() {
  return <IgniteChangeBlogPage />;
}

