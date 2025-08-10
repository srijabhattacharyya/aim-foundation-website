
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Loader2 } from 'lucide-react';
import AdminLayout from '../AdminLayout';

export default function AdminDashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/admin/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="ml-4 text-lg">Loading Dashboard...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold font-headline mb-8">Admin Dashboard</h1>
      <div className="bg-card p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold font-headline">Welcome, Admin!</h2>
          <p className="text-muted-foreground mt-2">
              You are logged in as {user.email}. You can now manage your application from here.
          </p>
      </div>
    </AdminLayout>
  );
}
