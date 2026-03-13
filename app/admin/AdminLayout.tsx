
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LayoutDashboard, LogOut, HandHeart, Mail, GalleryHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { auth } from '@/app/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Cookies from 'js-cookie';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push('/admin/login');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    Cookies.remove('firebaseAuthToken');
    Cookies.remove('firebaseUserEmail');
    router.push('/admin/login');
  };

  if (loading) {
    return null;
  }

  if (!isAuthenticated) {
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
            <Button variant="ghost" className="w-full justify-start" asChild>
             <Link href="/admin/subscribers">
                <Mail className="mr-2 h-4 w-4" />
                Subscribers
             </Link>
           </Button>
           <Button variant="ghost" className="w-full justify-start" asChild>
             <Link href="/admin/gallery">
                <GalleryHorizontal className="mr-2 h-4 w-4" />
                Gallery
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
