import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getPatrons } from "@/lib/firebase/patrons";
import PatronUploader from "./PatronUploader";

export const revalidate = 0; // Revalidate this page on every request

export default async function PatronsPage() {
    const patrons = await getPatrons();

    return (
        <div className="grid gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Manage Patrons</CardTitle>
                    <CardDescription>Upload, view, and delete patron logos that appear on your homepage.</CardDescription>
                </CardHeader>
                <CardContent>
                    <PatronUploader patrons={patrons} />
                </CardContent>
            </Card>
        </div>
    );
}
