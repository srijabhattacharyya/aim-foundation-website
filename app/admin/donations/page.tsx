
'use client';

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Trash2, Filter, Download, Calendar as CalendarIcon } from 'lucide-react';
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
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import Papa from 'papaparse';
import { fetchDonations, deleteDonation } from '@/app/actions/adminActions';
import type { Donation } from '@/app/actions/adminActions';

const causes = [
    "General Fund", "CureLine", "CareCircle", "ChildFirst", "Detect", "SightHope",
    "OralScan", "CycleSafe", "SoulCircle", "Innocent Smiles", "Inspire EduLab", "EduAccess",
    "Empower English", "DigiEmpower", "SheConnects", "Milieu", "VidyaShakti", "SuiDhaga",
    "Krishti", "GreenRoots", "TideShield", "Roots of Change", "Relief to the Underprivileged",
    "Disaster Management", "Ignite Change Initiative", "Individual Donation", "Sponsor a Child"
];


export default function DonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [filteredDonations, setFilteredDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const [causeFilter, setCauseFilter] = useState<string>('all');
  const [nationalityFilter, setNationalityFilter] = useState<string>('all');
  const [countryFilter, setCountryFilter] = useState<string>('');
  const [stateFilter, setStateFilter] = useState<string>('');
  const [cityFilter, setCityFilter] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  useEffect(() => {
    async function getDonations() {
      setLoading(true);
      setError(null);
      const result = await fetchDonations();
      if (result.success && result.data) {
        setDonations(result.data);
        setFilteredDonations(result.data);
      } else {
        setError(result.error || 'Failed to fetch donations.');
      }
      setLoading(false);
    }
    getDonations();
  }, []);

  useEffect(() => {
    let result = donations;

    if (startDate) {
        const startOfDay = new Date(startDate);
        startOfDay.setHours(0, 0, 0, 0);
        result = result.filter(d => new Date(d.createdAt) >= startOfDay);
    }
    if (endDate) {
        const endOfDay = new Date(endDate);
        endOfDay.setHours(23, 59, 59, 999);
        result = result.filter(d => new Date(d.createdAt) <= endOfDay);
    }
    if (causeFilter && causeFilter !== 'all') {
        result = result.filter(d => d.cause === causeFilter);
    }
    if (nationalityFilter && nationalityFilter !== 'all') {
        result = result.filter(d => d.nationality === nationalityFilter);
    }
    if (countryFilter) {
        result = result.filter(d => d.country?.toLowerCase().includes(countryFilter.toLowerCase()));
    }
    if (stateFilter) {
        result = result.filter(d => d.state?.toLowerCase().includes(stateFilter.toLowerCase()));
    }
    if (cityFilter) {
        result = result.filter(d => d.city?.toLowerCase().includes(cityFilter.toLowerCase()));
    }

    setFilteredDonations(result);
  }, [donations, startDate, endDate, causeFilter, nationalityFilter, countryFilter, stateFilter, cityFilter]);

  const handleDelete = async (id: string) => {
    const result = await deleteDonation(id);
    if (result.success) {
      const newDonations = donations.filter((donation) => donation.id !== id);
      setDonations(newDonations);
      toast({
        title: "Donation deleted",
        description: "The donation record has been successfully removed.",
      });
    } else {
        toast({
            variant: "destructive",
            title: "Deletion failed",
            description: result.error || "Could not delete the donation.",
        });
    }
  };

  const handleDownload = () => {
    const csv = Papa.unparse(filteredDonations);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `donations-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const clearFilters = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    setCauseFilter('all');
    setNationalityFilter('all');
    setCountryFilter('');
    setStateFilter('');
    setCityFilter('');
  };


  return (
    <AdminLayout>
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold font-headline">Donations</h1>
            <div className="flex items-center gap-2">
                <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
                <Button onClick={handleDownload} disabled={filteredDonations.length === 0}>
                    <Download className="mr-2 h-4 w-4" />
                    Download CSV
                </Button>
            </div>
        </div>

        <Card className="mb-8">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Filter className="h-5 w-5" /> Filters</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Popover>
                        <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className="w-full justify-start text-left font-normal"
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {startDate ? format(startDate, "PPP") : <span>Start Date</span>}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={startDate}
                            onSelect={setStartDate}
                            toDate={new Date()}
                            initialFocus
                        />
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className="w-full justify-start text-left font-normal"
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {endDate ? format(endDate, "PPP") : <span>End Date</span>}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={endDate}
                            onSelect={setEndDate}
                            toDate={new Date()}
                            initialFocus
                        />
                        </PopoverContent>
                    </Popover>
                    <Select onValueChange={setCauseFilter} value={causeFilter}>
                        <SelectTrigger><SelectValue placeholder="Filter by Cause" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Causes</SelectItem>
                            {causes.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                    </Select>
                     <Select onValueChange={setNationalityFilter} value={nationalityFilter}>
                        <SelectTrigger><SelectValue placeholder="Filter by Nationality" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Nationalities</SelectItem>
                            <SelectItem value="Indian">Indian</SelectItem>
                            <SelectItem value="Non-Indian">Non-Indian</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input placeholder="Filter by Country..." value={countryFilter} onChange={e => setCountryFilter(e.target.value)} />
                    <Input placeholder="Filter by State..." value={stateFilter} onChange={e => setStateFilter(e.target.value)} />
                    <Input placeholder="Filter by City..." value={cityFilter} onChange={e => setCityFilter(e.target.value)} />
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Donation Records ({filteredDonations.length})</CardTitle>
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
                ) : (
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Mobile</TableHead>
                                <TableHead>DOB</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Cause</TableHead>
                                <TableHead>Nationality</TableHead>
                                <TableHead>Country</TableHead>
                                <TableHead>Address</TableHead>
                                <TableHead>City</TableHead>
                                <TableHead>State</TableHead>
                                <TableHead>Pincode</TableHead>
                                <TableHead>PAN</TableHead>
                                <TableHead>Aadhar</TableHead>
                                <TableHead>Passport</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                            </TableHeader>
                            <TableBody>
                            {filteredDonations.length > 0 ? filteredDonations.map((donation) => (
                                <TableRow key={donation.id}>
                                    <TableCell>{donation.createdAt ? new Date(donation.createdAt).toLocaleDateString() : 'N/A'}</TableCell>
                                    <TableCell>{donation.fullName}</TableCell>
                                    <TableCell>{donation.email}</TableCell>
                                    <TableCell>{donation.mobile}</TableCell>
                                    <TableCell>{donation.dob}</TableCell>
                                    <TableCell>{donation.otherAmount || donation.amount}</TableCell>
                                    <TableCell>{donation.cause}</TableCell>
                                    <TableCell>{donation.nationality}</TableCell>
                                    <TableCell>{donation.country}</TableCell>
                                    <TableCell>{donation.address}</TableCell>
                                    <TableCell>{donation.city}</TableCell>
                                    <TableCell>{donation.state}</TableCell>
                                    <TableCell>{donation.pincode}</TableCell>
                                    <TableCell>{donation.pan}</TableCell>
                                    <TableCell>{donation.aadhar}</TableCell>
                                    <TableCell>{donation.passport}</TableCell>
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
                                                    This action cannot be undone. This will permanently delete the donation record.
                                                </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDelete(donation.id)}>
                                                    Delete
                                                </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </TableCell>
                                </TableRow>
                            )) : (
                                <TableRow>
                                    <TableCell colSpan={17} className="text-center py-12">
                                        No donations match the current filters.
                                    </TableCell>
                                </TableRow>
                            )}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </CardContent>
        </Card>
    </AdminLayout>
  );
}
