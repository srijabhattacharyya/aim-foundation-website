'use client';

import { Button } from "@/components/ui/button";
import { useFormStatus } from 'react-dom';
import { Loader2 } from "lucide-react";
import { useFormContext } from "react-hook-form";

export function SubmitButton() {
    const { formState: { isSubmitting } } = useFormContext();

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
