
'use client';

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Download, Trash2 } from 'lucide-react';
import AdminLayout from '../AdminLayout';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';
import Papa from 'papaparse';
import { fetchSubscribers, deleteSubscriber } from '@/app/actions/adminActions';
import type { Subscriber } from '@/app/actions/adminActions';

export default function SubscribersPage() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { toast } = useToast();

    const getSubscribers = async () => {
        setLoading(true);
        const result = await fetchSubscribers();
        if (result.success && result.data) {
            setSubscribers(result.data);
        } else {
            setError(result.error || 'Failed to fetch subscribers.');
        }
        setLoading(false);
    }

    useEffect(() => {
        getSubscribers();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            const result = await deleteSubscriber(id);
            if (result.success) {
              const newSubscribers = subscribers.filter((subscriber) => subscriber.id !== id);
              setSubscribers(newSubscribers);
              toast({
                title: "Subscriber deleted",
                description: "The subscriber has been successfully removed.",
              });
            } else {
                 toast({
                    variant: "destructive",
                    title: "Deletion failed",
                    description: result.error || "Could not delete the subscriber.",
                });
            }
        } catch (e: any) {
            toast({
                variant: "destructive",
                title: "Deletion failed",
                description: "An unexpected error occurred.",
            });
        }
    };
    
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
                                <TableHead>Actions</TableHead>
                            </TableRow>
                            </TableHeader>
                            <TableBody>
                            {subscribers.map((subscriber) => (
                                <TableRow key={subscriber.id}>
                                    <TableCell>{subscriber.email}</TableCell>
                                    <TableCell>{new Date(subscriber.createdAt).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="destructive" size="icon">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete the subscriber record.
                                                </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDelete(subscriber.id)}>
                                                    Delete
                                                </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </TableCell>
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
