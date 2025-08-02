
'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { getUserRole } from '@/lib/firebase/getUser';

const auth = getAuth(app);

// Pages that don't require authentication
const publicPages = ['/login'];

// Pages that require authentication but are not role-specific dashboards
const authenticatedGenericPages = ['/']; 

export default function AuthRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      const isPublicPage = publicPages.includes(pathname);
      const isAuthPage = pathname.startsWith('/admin') || pathname.startsWith('/user-dashboard') || pathname.startsWith('/donor-dashboard') || pathname.startsWith('/superadmin-panel');

      if (user) {
        // User is logged in
        const role = await getUserRole(user.uid);
        
        if (!role && !isPublicPage) {
            // If no role, sign out and redirect to login to be safe
            await auth.signOut();
            router.push('/login');
            return;
        }

        let targetDashboard = '/'; // Default redirect
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

        // If user is on login page, or a generic authenticated page, redirect to their dashboard
        if (isPublicPage || authenticatedGenericPages.includes(pathname)) {
            router.push(targetDashboard);
        }
        // If user is on an auth page but it doesn't match their role, redirect them
        else if (isAuthPage && !pathname.startsWith(targetDashboard.split('/')[1])) {
             router.push(targetDashboard);
        }

      } else {
        // User is not logged in
        if (isAuthPage) {
          router.push('/login');
        }
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [pathname, router]);

  return null; // This component does not render anything
}
