
'use client';

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import AdminLayout from '../AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Trash2, Edit } from 'lucide-react';
import Image from 'next/image';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import imageCompression from 'browser-image-compression';

const initiatives = [
    "General", "CureLine", "SurgiReach", "CareCircle", "ChildFirst", "Detect", "SightHope",
    "OralScan", "CycleSafe", "SoulCircle", "Innocent Smiles", "Inspire EduLab", "EduAccess",
    "Empower English", "DigiEmpower", "SheConnects", "Milieu", "VidyaShakti", "SuiDhaga",
    "Krishti", "GreenRoots", "TideShield", "Roots of Change", "Relief to the Underprivileged",
    "Disaster Management", "Ignite Change Initiative"
];

const imageSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  status: z.enum(['Active', 'Inactive']),
  sequence: z.coerce.number().min(0, 'Sequence must be a positive number'),
  initiative1: z.string().min(1, 'At least one initiative is required'),
  initiative2: z.string().optional(),
  image: z.any().refine(files => files?.length > 0 || typeof files === 'string', 'Image is required.'),
});

interface GalleryImage {
  id: string;
  description: string;
  imageUrl: string;
  status: 'Active' | 'Inactive';
  sequence: number;
  initiatives: string[];
}

export default function GalleryAdminPage() {
  const { toast } = useToast();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);

  const form = useForm<z.infer<typeof imageSchema>>({
    resolver: zodResolver(imageSchema),
    defaultValues: {
      description: '',
      status: 'Active',
      sequence: 0,
      initiative1: 'General',
      initiative2: '',
      image: undefined,
    },
  });

  const fetchImages = async () => {
    setLoading(true);
    const q = query(collection(db, 'gallery'), orderBy('sequence', 'asc'));
    const querySnapshot = await getDocs(q);
    const fetchedImages = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as GalleryImage));
    setImages(fetchedImages);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image);
    form.reset({
      description: image.description,
      status: image.status,
      sequence: image.sequence,
      initiative1: image.initiatives[0] || 'General',
      initiative2: image.initiatives[1] || '',
      image: image.imageUrl,
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'gallery', id));
      toast({ title: 'Success', description: 'Image deleted successfully.' });
      fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to delete image.' });
    }
  };

  const onSubmit: SubmitHandler<z.infer<typeof imageSchema>> = async (data) => {
    setIsSubmitting(true);
    try {
      let imageUrl = editingImage ? editingImage.imageUrl : '';
      if (data.image && typeof data.image !== 'string') {
        const imageFile = data.image[0];

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 600,
            useWebWorker: true,
        }
        const compressedFile = await imageCompression(imageFile, options);

        const storageRef = ref(storage, `gallery/${Date.now()}_${compressedFile.name}`);
        const snapshot = await uploadBytes(storageRef, compressedFile);
        imageUrl = await getDownloadURL(snapshot.ref);
      }
      
      const imageInitiatives = [data.initiative1];
      if (data.initiative2) {
          imageInitiatives.push(data.initiative2);
      }

      const docData = {
        description: data.description,
        status: data.status,
        sequence: data.sequence,
        initiatives: imageInitiatives,
        imageUrl: imageUrl,
        updatedAt: serverTimestamp(),
      };

      if (editingImage) {
        await updateDoc(doc(db, 'gallery', editingImage.id), docData);
        toast({ title: 'Success', description: 'Image updated successfully.' });
      } else {
        await addDoc(collection(db, 'gallery'), {
            ...docData,
            createdAt: serverTimestamp(),
        });
        toast({ title: 'Success', description: 'Image uploaded successfully.' });
      }

      form.reset({
          description: '',
          status: 'Active',
          sequence: 0,
          initiative1: 'General',
          initiative2: '',
          image: undefined,
      });
      setEditingImage(null);
      fetchImages();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to save image.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold font-headline">Manage Gallery</h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{editingImage ? 'Edit Image' : 'Add New Image'}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter a short description for the image" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="initiative1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Initiative 1 (Required)</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select first initiative" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {initiatives.map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="initiative2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Initiative 2 (Optional)</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select second initiative" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="">None</SelectItem>
                          {initiatives.map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
               
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Image (600x400 recommended)</FormLabel>
                        <FormControl>
                            <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => field.onChange(e.target.files)}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                
                 <FormField
                  control={form.control}
                  name="sequence"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sequence</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                       <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end gap-4 mt-6">
                {editingImage && (
                    <Button variant="outline" onClick={() => { setEditingImage(null); form.reset(); }}>Cancel Edit</Button>
                )}
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ''}
                  {editingImage ? 'Update' : 'Upload'} Image
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Uploaded Images</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Initiatives</TableHead>
                    <TableHead>Sequence</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {images.length > 0 ? images.map((image) => (
                    <TableRow key={image.id}>
                      <TableCell>
                        <Image src={image.imageUrl} alt={image.description} width={100} height={67} className="rounded-md object-cover" />
                      </TableCell>
                      <TableCell>{image.description}</TableCell>
                      <TableCell>{image.initiatives.join(', ')}</TableCell>
                      <TableCell>{image.sequence}</TableCell>
                      <TableCell>{image.status}</TableCell>
                      <TableCell className="space-x-2">
                        <Button variant="outline" size="icon" onClick={() => handleEdit(image)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive" size="icon">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This will permanently delete the image from the gallery.
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDelete(image.id)}>
                                    Delete
                                </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  )) : (
                     <TableRow>
                        <TableCell colSpan={6} className="text-center py-12">No images uploaded yet.</TableCell>
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

