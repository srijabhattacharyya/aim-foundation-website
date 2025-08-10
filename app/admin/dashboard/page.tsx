
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LayoutDashboard, LogOut, Loader2 } from 'lucide-react';

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

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="ml-4 text-lg">Loading Dashboard...</p>
      </div>
    );
  }

  if (!user) {
    // This is a fallback, but the redirect in useEffect should handle it.
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-card border-r p-6">
        <h2 className="text-2xl font-bold font-headline mb-8">Admin Menu</h2>
        <nav className="space-y-4">
           <Button variant="ghost" className="w-full justify-start">
             <LayoutDashboard className="mr-2 h-4 w-4" />
             Dashboard
           </Button>
        </nav>
        <div className="absolute bottom-6 left-6">
            <Button onClick={handleLogout} variant="outline">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
            </Button>
        </div>
      </aside>
      <main className="flex-grow p-8 bg-muted">
        <h1 className="text-4xl font-bold font-headline mb-8">Admin Dashboard</h1>
        <div className="bg-card p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold font-headline">Welcome, Admin!</h2>
            <p className="text-muted-foreground mt-2">
                You are logged in as {user.email}. You can now manage your application from here.
            </p>
        </div>
      </main>
    </div>
  );
}
