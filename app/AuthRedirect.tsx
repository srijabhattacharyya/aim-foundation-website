
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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loading) return;

    const performRedirect = async () => {
        const isPublicPage = publicPages.includes(pathname);
        const isAuthPage = pathname.startsWith('/admin') || pathname.startsWith('/user-dashboard') || pathname.startsWith('/donor-dashboard') || pathname.startsWith('/superadmin-panel');

        if (user) {
            const role = await getUserRole(user.uid);
            
            if (!role) {
                if (isAuthPage || !isPublicPage) {
                    await auth.signOut();
                    router.push('/login');
                }
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

            if (isPublicPage || authenticatedGenericPages.includes(pathname)) {
                 router.push(targetDashboard);
            } else if (isAuthPage && !pathname.startsWith(`/${targetDashboard.split('/')[1]}`)) {
                 router.push(targetDashboard);
            }

        } else {
            if (isAuthPage) {
                router.push('/login');
            }
        }
    }
    
    performRedirect();

  }, [user, pathname, router, loading]);

  return null;
}
