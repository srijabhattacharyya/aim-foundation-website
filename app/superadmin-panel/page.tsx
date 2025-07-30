
'use client';
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Power } from "lucide-react";

export default function SuperAdminPanelPage() {
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
                    <h1 className="text-3xl font-bold font-headline">Super Admin Panel</h1>
                     <Button onClick={handleLogout} variant="outline">
                        <Power className="mr-2 h-4 w-4" /> Logout
                    </Button>
                </div>
                <p className="text-muted-foreground mb-8">
                   Full access to all data and settings. Use with caution.
                </p>
                 <Card>
                    <CardHeader>
                        <CardTitle>System Control</CardTitle>
                        <CardDescription>Manage all aspects of the application.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">(Super Admin controls and settings will be built here...)</p>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
