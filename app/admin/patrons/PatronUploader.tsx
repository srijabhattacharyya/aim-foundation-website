
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import imageCompression from 'browser-image-compression';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Trash2 } from 'lucide-react';
import { deletePatron, Patron } from '@/lib/firebase/patrons';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Patron name must be at least 2 characters.' }),
  logo: z.instanceof(File).refine(file => file.size > 0, 'Logo image is required.'),
});

interface PatronUploaderProps {
  patrons: Patron[];
}

export default function PatronUploader({ patrons: initialPatrons }: PatronUploaderProps) {
  const [loading, setLoading] = useState(false);
  const [patrons, setPatrons] = useState(initialPatrons);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      logo: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    try {
      const logoFile = values.logo;
      let fileToUpload = logoFile;

      if (logoFile.size > 200 * 1024) {
        const options = {
          maxSizeMB: 0.2,
          maxWidthOrHeight: 800,
          useWebWorker: true,
        };
        fileToUpload = await imageCompression(logoFile, options);
      }

      const logoPath = `patrons/${Date.now()}-${fileToUpload.name.replace(/\s/g, '_')}`;
      const storageRef = ref(storage, logoPath);
      
      const uploadResult = await uploadBytes(storageRef, fileToUpload);
      const logoUrl = await getDownloadURL(uploadResult.ref);

      const docRef = await addDoc(collection(db, 'patrons'), {
        name: values.name,
        logoUrl,
        logoPath,
        createdAt: Timestamp.now(),
      });

      const newPatron: Patron = {
        id: docRef.id,
        name: values.name,
        logoUrl,
        logoPath,
        createdAt: Timestamp.now() as any, 
      };

      toast({ title: 'Success', description: 'Patron added successfully.' });
      setPatrons(prev => [newPatron, ...prev]);
      form.reset();
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if(fileInput) fileInput.value = '';
      router.refresh();

    } catch (error: any) {
      console.error("Error adding patron:", error);
      toast({
        title: 'Error',
        description: error.message || 'An error occurred while adding the patron.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (patronId: string, logoPath: string) => {
    if (!confirm('Are you sure you want to delete this patron? This action cannot be undone.')) {
      return;
    }
    try {
      await deletePatron(patronId, logoPath);
      toast({ title: 'Success', description: 'Patron deleted successfully.' });
      setPatrons(prev => prev.filter(p => p.id !== patronId));
      router.refresh();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete patron.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <h3 className="text-lg font-medium mb-4">Add New Patron</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patron Name</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., Google" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="logo"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Patron Logo</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/png, image/jpeg, image/gif, image/svg+xml, image/webp"
                      onChange={(e) => onChange(e.target.files ? e.target.files[0] : null)}
                      {...rest}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Uploading...' : 'Add Patron'}
            </Button>
          </form>
        </Form>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4">Current Patrons</h3>
         <ScrollArea className="h-[500px] pr-4">
            {patrons.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {patrons.map((patron) => (
                <Card key={patron.id} className="group relative">
                    <CardContent className="p-4 flex items-center justify-center aspect-video">
                    <Image src={patron.logoUrl} alt={patron.name} width={150} height={70} className="object-contain" />
                    </CardContent>
                    <CardFooter className="p-2 justify-between items-center bg-muted/50">
                        <p className="text-sm font-medium truncate">{patron.name}</p>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive opacity-50 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleDelete(patron.id, patron.logoPath)}
                        >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                        </Button>
                    </CardFooter>
                </Card>
                ))}
            </div>
            ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
                <p>No patrons have been added yet.</p>
            </div>
            )}
        </ScrollArea>
      </div>
    </div>
  );
}
