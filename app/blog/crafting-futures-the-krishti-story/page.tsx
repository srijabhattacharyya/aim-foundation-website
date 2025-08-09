
import type { Metadata } from 'next';
import KrishtiBlogPage from './KrishtiBlogPage';

export const metadata: Metadata = {
  title: 'Crafted by Her. Backed by Krishti: The Story of Empowering Women Entrepreneurs',
  description: "Learn how AIM Foundation's Krishti initiative provides production and marketing support to transform skilled women into successful entrepreneurs.",
  alternates: {
    canonical: '/blog/crafting-futures-the-krishti-story',
  },
};

export default function Page() {
  return <KrishtiBlogPage />;
}
