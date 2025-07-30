
'use client';
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Power, Upload } from "lucide-react";

export default function UserDashboardPage() {
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
                    <h1 className="text-3xl font-bold font-headline">User Dashboard</h1>
                     <Button onClick={handleLogout} variant="outline">
                        <Power className="mr-2 h-4 w-4" /> Logout
                    </Button>
                </div>
                <p className="text-muted-foreground mb-8">
                    Welcome! You can upload data and view information here.
                </p>
                <Card>
                    <CardHeader>
                        <CardTitle>Upload Data</CardTitle>
                        <CardDescription>Upload images or forms for our initiatives.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg">
                        <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground mb-4">Drag and drop files here or</p>
                        <Button>
                           Choose Files
                        </Button>
                        <p className="text-xs text-muted-foreground mt-4">(File upload functionality coming soon...)</p>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
