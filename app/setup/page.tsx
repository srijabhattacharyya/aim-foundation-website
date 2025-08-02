
'use client';

import { useState, useEffect } from 'react';
import { setupAdminUser } from '@/lib/firebase/setupAdmin';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function SetupPage() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const adminEmail = 'tech@aimindia.org.in';

  const handleSetup = async () => {
    setLoading(true);
    setMessage('');
    const result = await setupAdminUser(adminEmail);
    setMessage(result.message);
    setLoading(false);
    setIsDone(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-muted p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Admin User Setup</CardTitle>
                    <CardDescription>
                        Click the button below to assign the 'Admin' role to the user <span className="font-mono bg-muted-foreground/10 px-1 py-0.5 rounded">{adminEmail}</span>.
                        This only needs to be done once.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <Button onClick={handleSetup} disabled={loading || isDone}>
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {loading ? 'Assigning Role...' : isDone ? 'Role Assigned' : 'Assign Admin Role'}
                        </Button>
                        {message && (
                            <div className={`mt-4 p-4 rounded-md text-sm ${message.includes('Success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {message}
                            </div>
                        )}
                        {isDone && (
                            <Button asChild variant="outline">
                                <Link href="/login">Go to Login Page</Link>
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </main>
        <Footer />
    </div>
  );
}
