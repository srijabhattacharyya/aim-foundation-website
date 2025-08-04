
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LayoutDashboard, LogOut } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admin Dashboard - AIM Foundation',
};

export default function AdminDashboardPage() {
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
            <Button asChild variant="outline">
                <Link href="/admin/login">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Link>
            </Button>
        </div>
      </aside>
      <main className="flex-grow p-8 bg-muted">
        <h1 className="text-4xl font-bold font-headline mb-8">Admin Dashboard</h1>
        <div className="bg-card p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold font-headline">Welcome, Admin!</h2>
            <p className="text-muted-foreground mt-2">
                This is a placeholder for your admin panel content. You can manage your application from here.
            </p>
        </div>
      </main>
    </div>
  );
}
