
import type { Metadata } from 'next';
import SuiDhagaBlogPage from './SuiDhagaBlogPage';

export const metadata: Metadata = {
  title: 'Threading Changes: The SuiDhaga Story by AIM Foundation',
  description: "Discover how AIM Foundation's SuiDhaga initiative is empowering women, stitching dignity into livelihoods, and creating new patterns of possibility through tailoring and embroidery skills.",
  alternates: {
    canonical: '/blog/threading-changes-the-suidhaga-story',
  },
};

export default function Page() {
  return <SuiDhagaBlogPage />;
}

