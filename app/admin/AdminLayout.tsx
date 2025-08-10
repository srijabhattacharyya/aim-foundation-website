
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LayoutDashboard, LogOut, Loader2, HandHeart } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
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
        <p className="ml-4 text-lg">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-card border-r p-6">
        <h2 className="text-2xl font-bold font-headline mb-8">Admin Menu</h2>
        <nav className="space-y-4">
           <Button variant="ghost" className="w-full justify-start" asChild>
             <Link href="/admin/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
             </Link>
           </Button>
           <Button variant="ghost" className="w-full justify-start" asChild>
             <Link href="/admin/donations">
                <HandHeart className="mr-2 h-4 w-4" />
                Donations
             </Link>
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
        {children}
      </main>
    </div>
  );
}
