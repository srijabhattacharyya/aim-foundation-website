
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { getUserRole } from '@/lib/firebase/getUser';

const auth = getAuth(app);

const publicPages = ['/login'];
// The homepage is now considered a protected route destination for logged-in users before role check
const authenticatedGenericPages = ['/']; 

export default function AuthRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true); // Start loading when auth state changes

      const isPublicPage = publicPages.includes(pathname);
      const isProtectedRoute = !isPublicPage && !authenticatedGenericPages.includes(pathname);

      if (user) {
        const role = await getUserRole(user.uid);

        if (!role) {
          // If user exists but has no role, log them out.
          await auth.signOut();
          router.push('/login');
          setLoading(false);
          return;
        }

        let targetDashboard = '/';
        switch (role) {
            case 'Super Admin':
                targetDashboard = '/superadmin-panel';
                break;
            case 'Admin':
                targetDashboard = '/admin/dashboard';
                break;
            case 'User':
                targetDashboard = '/user-dashboard';
                break;
            case 'Donor':
                targetDashboard = '/donor-dashboard';
                break;
        }

        // If user is on a public page or the homepage, redirect to their dashboard
        if (isPublicPage || authenticatedGenericPages.includes(pathname)) {
            router.push(targetDashboard);
        } else {
            // If user is on a protected page, check if it's the correct one
            const currentDashboardPrefix = `/${pathname.split('/')[1]}`;
            const targetDashboardPrefix = `/${targetDashboard.split('/')[1]}`;
            if (currentDashboardPrefix !== targetDashboardPrefix) {
                router.push(targetDashboard);
            }
        }
      } else {
        // No user is logged in
        if (isProtectedRoute) {
          router.push('/login');
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [pathname, router]); // Dependency on pathname is important to re-check on navigation

  return null; // This component does not render anything
}
