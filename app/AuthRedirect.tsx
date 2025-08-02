
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { getUserRole } from '@/lib/firebase/getUser';

const auth = getAuth(app);

const publicPages = ['/login'];
const adminDashboard = '/admin/dashboard';
const homePage = '/';

export default function AuthRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const role = await getUserRole(user.uid);

        if (role === 'Admin') {
          // If admin is on a public page or homepage, redirect to dashboard
          if (publicPages.includes(pathname) || pathname === homePage) {
            router.push(adminDashboard);
          }
        } else {
          // If user is authenticated but not an Admin, sign them out and send to login
          await signOut(auth);
          if (pathname !== '/login') {
            router.push('/login');
          }
        }
      } else {
        // No user logged in. Protect all routes except public ones and homepage.
        const isPublic = publicPages.includes(pathname) || pathname === homePage;
        if (!isPublic && !pathname.startsWith('/admin')) {
           // Let other pages handle their own non-auth state if needed
        } else if (pathname.startsWith('/admin')) {
             router.push('/login');
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [pathname, router]);

  if (loading) {
    return null; // Don't render anything while checking auth
  }

  return null;
}
