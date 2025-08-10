
'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Download } from 'lucide-react';
import AdminLayout from '../AdminLayout';
import { Button } from '@/components/ui/button';
import Papa from 'papaparse';

interface Subscriber {
    id: string;
    email: string;
    createdAt: string;
}

async function fetchSubscribers(): Promise<{ success: boolean; data?: Subscriber[]; error?: string }> {
    try {
        const subscribersRef = collection(db, 'subscribers');
        const q = query(subscribersRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const subscribers: Subscriber[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const createdAt = data.createdAt instanceof Timestamp 
                ? data.createdAt.toDate().toISOString()
                : new Date().toISOString();

            return {
                id: doc.id,
                email: data.email || 'N/A',
                createdAt: createdAt,
            };
        });
        
        return { success: true, data: subscribers };
    } catch (err: any) {
        console.error("Error fetching subscribers from Firestore: ", err);
        let errorMessage = "Could not retrieve subscribers.";
        if (err.code === 'permission-denied') {
            errorMessage = "Permission denied. Please check your Firestore security rules.";
        }
        return { success: false, error: errorMessage };
    }
}

export default function SubscribersPage() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getSubscribers() {
            setLoading(true);
            const result = await fetchSubscribers();
            if (result.success && result.data) {
                setSubscribers(result.data);
            } else {
                setError(result.error || 'Failed to fetch subscribers.');
            }
            setLoading(false);
        }
        getSubscribers();
    }, []);
    
    const handleDownload = () => {
        const csv = Papa.unparse(subscribers.map(s => ({ email: s.email, subscribed_at: s.createdAt })));
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `subscribers-${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold font-headline">Newsletter Subscribers</h1>
                <Button onClick={handleDownload} disabled={subscribers.length === 0}>
                    <Download className="mr-2 h-4 w-4" />
                    Download CSV
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Subscriber List</CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="flex justify-center items-center py-12">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                            <p className="ml-4 text-lg">Loading subscribers...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-12 text-destructive">
                            <p>{error}</p>
                        </div>
                    ) : subscribers.length === 0 ? (
                        <div className="text-center py-12">
                            <p>No subscribers yet.</p>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                            <TableRow>
                                <TableHead>Email</TableHead>
                                <TableHead>Subscription Date</TableHead>
                            </TableRow>
                            </TableHeader>
                            <TableBody>
                            {subscribers.map((subscriber) => (
                                <TableRow key={subscriber.id}>
                                    <TableCell>{subscriber.email}</TableCell>
                                    <TableCell>{new Date(subscriber.createdAt).toLocaleDateString()}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
