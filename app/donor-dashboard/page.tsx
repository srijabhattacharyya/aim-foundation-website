
'use client';
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Power } from "lucide-react";

export default function DonorDashboardPage() {
    const auth = getAuth(app);
    const router = useRouter();

    const handleLogout = async () => {
        await signOut(auth);
        router.push('/login');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold font-headline">Donor Dashboard</h1>
                    <Button onClick={handleLogout} variant="outline">
                        <Power className="mr-2 h-4 w-4" /> Logout
                    </Button>
                </div>
                <p className="text-muted-foreground mb-8">
                    Here you can see how your generous donations are making an impact.
                </p>
                <Card>
                    <CardHeader>
                        <CardTitle>Your Donations</CardTitle>
                        <CardDescription>A summary of your contributions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">(Donation history feature coming soon...)</p>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
