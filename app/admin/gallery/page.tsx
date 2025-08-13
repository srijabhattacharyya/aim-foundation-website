
'use client';

import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { storage, db } from '@/lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
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
import { addGalleryItem, deleteGalleryItem } from '@/app/actions/galleryActions';

const formSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  status: z.enum(['Active', 'Inactive']),
  sequence: z.coerce.number().min(0, 'Sequence must be a positive number'),
  image: z.any().refine((files) => {
    if (editingImageId) return true;
    return files && files.length > 0;
  }, 'Image is required when adding a new item.'),
});

// A variable to hold the ID of the image being edited, accessible in the module scope
let editingImageId: string | null = null;


export interface GalleryImage {
  id: string;
  description: string;
  imageUrl: string;
  status: 'Active' | 'Inactive';
  sequence: number;
}

export default function GalleryAdminPage() {
  const { toast } = useToast();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
      status: 'Active',
      sequence: 0,
      image: undefined,
    },
  });

  const fetchImages = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'gallery'), orderBy('sequence', 'asc'));
      const querySnapshot = await getDocs(q);
      const fetchedImages: GalleryImage[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as GalleryImage));
      setImages(fetchedImages);
    } catch (error) {
      console.error("Error fetching gallery items from client: ", error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to fetch gallery items. Please check permissions and network.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image);
    editingImageId = image.id; // Set the module-level variable
    form.reset({
      description: image.description,
      status: image.status,
      sequence: image.sequence,
      image: undefined, // Clear the image input for editing
    });
  };

  const handleDelete = async (id: string) => {
    const result = await deleteGalleryItem(id);
    if (result.success) {
        toast({ title: 'Success', description: 'Image deleted successfully.' });
        fetchImages();
    } else {
        toast({ variant: 'destructive', title: 'Error', description: result.error });
    }
  };

  const cancelEdit = () => {
    setEditingImage(null);
    editingImageId = null; // Clear the module-level variable
    form.reset({
      description: '',
      status: 'Active',
      sequence: 0,
      image: undefined,
    });
  };

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    setIsSubmitting(true);
    try {
      let imageUrl = editingImage ? editingImage.imageUrl : '';
      
      if (data.image && data.image.length > 0) {
        const imageFile = data.image[0];
        const storageRef = ref(storage, `gallery/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
      }
      
      const docData = {
        description: data.description,
        status: data.status,
        sequence: data.sequence,
        imageUrl: imageUrl,
      };

      const result = await addGalleryItem(docData, editingImage ? editingImage.id : null);

      if (result.success) {
        toast({ title: 'Success', description: `Image ${editingImage ? 'updated' : 'uploaded'} successfully.` });
        cancelEdit();
        fetchImages(); // Refresh the list
      } else {
         toast({ variant: 'destructive', title: 'Error', description: result.error });
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({ variant: 'destructive', title: 'Error', description: 'An unexpected client-side error occurred.' });
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
                    name="image"
                    render={({ field: { onChange, value, ...rest } }) => (
                        <FormItem>
                        <FormLabel>Image</FormLabel>
                        <FormControl>
                            <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => onChange(e.target.files)}
                            {...rest}
                            />
                        </FormControl>
                        <FormMessage />
                        {editingImage && (
                            <p className="text-sm text-muted-foreground mt-2">Leave empty to keep the existing image.</p>
                        )}
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
                    <Button type="button" variant="outline" onClick={cancelEdit}>Cancel Edit</Button>
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
                        <TableCell colSpan={5} className="text-center py-12">No images uploaded yet.</TableCell>
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
