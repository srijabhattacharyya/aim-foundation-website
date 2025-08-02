
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, Users, HeartHandshake, ListChecks } from "lucide-react";
import { getCollectionCount } from "@/lib/firebase/firestore";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AdminDashboard() {
  const initiativesCount = await getCollectionCount('initiatives');
  const teamMembersCount = await getCollectionCount('teamMembers');
  // Placeholder for donation count until collection is ready
  const donationsCount = 573; 

  return (
    <div className="flex flex-col gap-8">
        <header>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">An overview of your foundation's activities and content.</p>
        </header>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Initiatives</CardTitle>
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{initiativesCount}</div>
                    <p className="text-xs text-muted-foreground mb-4">
                        Manage your ongoing projects and campaigns.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                        <Link href="#">Manage Initiatives</Link>
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{teamMembersCount}</div>
                    <p className="text-xs text-muted-foreground mb-4">
                        Add or update team member profiles.
                    </p>
                     <Button variant="outline" size="sm" asChild>
                        <Link href="#">Manage Team</Link>
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                    <HeartHandshake className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">+{donationsCount}</div>
                    <p className="text-xs text-muted-foreground mb-4">
                        A summary of all contributions received.
                    </p>
                     <Button variant="outline" size="sm" asChild>
                        <Link href="#">View Donations</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>

        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ListChecks className="h-5 w-5" />
                        Recent Activity
                    </CardTitle>
                    <CardDescription>A log of recent changes made in the admin panel.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="text-sm text-muted-foreground">10:45 AM</div>
                            <div className="font-medium">New team member "Anika Sharma" was added.</div>
                        </div>
                         <div className="flex items-center gap-4">
                            <div className="text-sm text-muted-foreground">Yesterday</div>
                            <div className="font-medium">Initiative "SurgiReach" page was updated.</div>
                        </div>
                         <div className="flex items-center gap-4">
                            <div className="text-sm text-muted-foreground">Oct 28, 2023</div>
                            <div className="font-medium">Donation of ₹5,000 received.</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
