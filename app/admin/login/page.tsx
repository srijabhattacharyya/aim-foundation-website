
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Shield, Loader2 } from 'lucide-react';
import Cookies from 'js-cookie';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

async function signInWithEmail(email: string, password: string): Promise<{ success: boolean; token?: string; error?: string }> {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, returnSecureToken: true }),
        });

        const data = await response.json();

        if (!response.ok) {
            return { success: false, error: data.error.message };
        }

        return { success: true, token: data.idToken };
    } catch (error) {
        return { success: false, error: 'An unexpected error occurred.' };
    }
}


export default function AdminLoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = Cookies.get('firebaseAuthToken');
    if (token) {
      router.push('/admin/dashboard');
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const result = await signInWithEmail(values.email, values.password);

    if (result.success && result.token) {
        Cookies.set('firebaseAuthToken', result.token, { expires: 1 }); // Expires in 1 day
        Cookies.set('firebaseUserEmail', values.email, { expires: 1 });
        toast({
            title: 'Login Successful',
            description: 'Redirecting to dashboard...',
        });
        router.push('/admin/dashboard');
    } else {
        let errorMessage = 'An unexpected error occurred.';
        if(result.error) {
             switch (result.error) {
                case 'INVALID_LOGIN_CREDENTIALS':
                case 'INVALID_PASSWORD':
                case 'USER_NOT_FOUND':
                    errorMessage = 'Invalid email or password.';
                    break;
                case 'INVALID_EMAIL':
                    errorMessage = 'Please enter a valid email address.';
                    break;
                default:
                    errorMessage = 'Login failed. Please try again.';
            }
        }
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: errorMessage,
      });
      setLoading(false);
    }
  }

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="ml-4 text-lg">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold font-headline">Admin Panel</CardTitle>
          <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="admin@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging in...</> : 'Login'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
