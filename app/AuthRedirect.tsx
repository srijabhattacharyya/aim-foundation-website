
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { getUserRole } from '@/lib/firebase/getUser';

const auth = getAuth(app);

const publicPages = ['/login'];
const authenticatedGenericPages = ['/'];

export default function AuthRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const isPublicPage = publicPages.includes(pathname);
      const isProtectedRoute = !isPublicPage && !authenticatedGenericPages.includes(pathname);

      if (user) {
        // User is logged in, now check their role.
        const role = await getUserRole(user.uid);

        if (!role) {
          // If user exists but has no role in Firestore, they are unauthorized.
          // Log them out to prevent access and stop the loop.
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
        
        // If user is on a public page (like /login) or the generic homepage,
        // redirect them to their specific dashboard.
        if (isPublicPage || authenticatedGenericPages.includes(pathname)) {
          router.push(targetDashboard);
        } else {
            // User is already on a protected page. Check if it's the right one.
            const currentBase = `/${pathname.split('/')[1]}`;
            const targetBase = `/${targetDashboard.split('/')[1]}`;
            if (currentBase !== targetBase) {
                router.push(targetDashboard);
            }
        }
      } else {
        // No user is logged in.
        if (isProtectedRoute) {
          // If they are trying to access a protected route, send them to login.
          router.push('/login');
        }
      }
      // Finished all checks, stop loading.
      setLoading(false);
    });

    return () => unsubscribe();
  }, [pathname, router]);

  // Render nothing while loading to prevent premature redirects or content flashing.
  if (loading) {
    return null;
  }

  // This component handles redirects and does not render any UI itself.
  return null;
}
