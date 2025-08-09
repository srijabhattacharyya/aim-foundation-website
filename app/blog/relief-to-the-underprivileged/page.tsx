
import type { Metadata } from 'next';
import ReliefBlogPage from './ReliefBlogPage';

export const metadata: Metadata = {
  title: 'Relief to the Underprivileged – AIM Foundation’s Lifeline of Hope',
  description: "Learn how AIM Foundation provides a lifeline of hope, delivering immediate and compassionate aid to those facing extreme hardship.",
  alternates: {
    canonical: '/blog/relief-to-the-underprivileged',
  },
};

export default function Page() {
  return <ReliefBlogPage />;
}

