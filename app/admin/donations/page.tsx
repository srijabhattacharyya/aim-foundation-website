
'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import AdminLayout from '../AdminLayout';

export interface Donation {
    id: string;
    createdAt: string;
    fullName: string;
    email: string;
    amount: string;
    otherAmount?: string;
    cause: string;
}

async function fetchDonationsFromClient(): Promise<{ success: boolean; data?: Donation[]; error?: string }> {
    try {
        const donationsRef = collection(db, 'donations');
        const q = query(donationsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const donations: Donation[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const createdAt = data.createdAt instanceof Timestamp 
                ? data.createdAt.toDate().toISOString()
                : new Date().toISOString();

            return {
                id: doc.id,
                createdAt: createdAt,
                fullName: data.fullName || '',
                email: data.email || '',
                amount: data.amount || '',
                otherAmount: data.otherAmount || '',
                cause: data.cause || 'N/A',
            };
        });
        
        return { success: true, data: donations };
    } catch (err: any) {
        console.error("Error fetching documents from Firestore on client: ", err);
        if (err.code === 'permission-denied') {
            return { success: false, error: "Permission denied. Please check Firestore security rules for admin access." };
        }
        return { success: false, error: "Could not retrieve donations. " + err.message };
    }
}


export default function DonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDonations() {
      setLoading(true);
      const result = await fetchDonationsFromClient();
      if (result.success && result.data) {
        setDonations(result.data);
      } else {
        setError(result.error || 'Failed to fetch donations.');
      }
      setLoading(false);
    }

    fetchDonations();
  }, []);

  return (
    <AdminLayout>
        <h1 className="text-4xl font-bold font-headline mb-8">Donations</h1>
        <Card>
            <CardHeader>
                <CardTitle>Donation Records</CardTitle>
            </CardHeader>
            <CardContent>
                {loading ? (
                    <div className="flex justify-center items-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="ml-4 text-lg">Loading donations...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-12 text-destructive">
                        <p>{error}</p>
                    </div>
                ) : donations.length === 0 ? (
                    <div className="text-center py-12">
                        <p>No donations have been recorded yet.</p>
                    </div>
                ) : (
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Cause</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {donations.map((donation) => (
                            <TableRow key={donation.id}>
                                <TableCell>{donation.createdAt ? new Date(donation.createdAt).toLocaleDateString() : 'N/A'}</TableCell>
                                <TableCell>{donation.fullName}</TableCell>
                                <TableCell>{donation.email}</TableCell>
                                <TableCell>{donation.otherAmount || donation.amount}</TableCell>
                                <TableCell>{donation.cause}</TableCell>
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
