
'use client';

import { Button } from "@/components/ui/button";
import { useFormStatus } from 'react-dom';
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
    isSubmitting: boolean;
}

export function SubmitButton({ isSubmitting }: SubmitButtonProps) {
    return (
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                </>
            ) : (
                'Donate'
            )}
        </Button>
    );
}
