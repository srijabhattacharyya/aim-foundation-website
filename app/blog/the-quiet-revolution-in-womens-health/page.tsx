
import type { Metadata } from 'next';
import DetectBlogPage from './DetectBlogPage';

export const metadata: Metadata = {
  title: 'The Quiet Revolution in Women’s Health: The Story of Project Detect',
  description: "Discover how AIM Foundation's Project Detect is bringing life-saving cervical cancer screenings and health education to rural women in India.",
  alternates: {
    canonical: '/blog/the-quiet-revolution-in-womens-health',
  },
};

export default function Page() {
  return <DetectBlogPage />;
}
