
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { getUserRole } from '@/lib/firebase/getUser';

const auth = getAuth(app);

const publicPages = ['/login'];
// Routes that are authenticated but don't have a role-specific dashboard.
const genericAuthenticatedRoutes = ['/']; 

export default function AuthRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const role = await getUserRole(user.uid);

        if (!role) {
          // If a user is authenticated but has no role, they are unauthorized.
          // This prevents them from getting stuck in a redirect loop.
          await signOut(auth);
          router.push('/login');
          setLoading(false);
          return;
        }

        let targetDashboard = '/'; // Default for safety
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

        // Redirect if on a public page or if on a protected page that doesn't match their role.
        if (publicPages.includes(pathname) || !pathname.startsWith(targetDashboard.split('/')[1])) {
           if (pathname !== targetDashboard) {
                router.push(targetDashboard);
           }
        }
      } else {
        // No user logged in. Protect all routes except public ones.
        const isPublic = publicPages.includes(pathname) || genericAuthenticatedRoutes.includes(pathname);
        if (!isPublic) {
            router.push('/login');
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [pathname, router]);

  if (loading) {
    // While checking auth, don't render anything to avoid flashes of content.
    return null; 
  }

  // This component handles redirects and does not render UI itself.
  return null;
}
