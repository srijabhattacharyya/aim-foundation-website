'use client';

import { Button } from "@/components/ui/button";

export function SubmitButton() {
    return (
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
            Donate
        </Button>
    );
}