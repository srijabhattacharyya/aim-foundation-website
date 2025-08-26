
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Initiative {
    href: string;
    label: string;
}

interface InitiativeListProps {
    title: string;
    initiatives: Initiative[];
}

const InitiativeList: React.FC<InitiativeListProps> = ({ title, initiatives }) => (
    <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <ul className="space-y-2">
                {initiatives.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </CardContent>
    </Card>
);

interface InitiativeSidebarProps {
    initiativeLists: { title: string; initiatives: Initiative[] }[];
    relatedResource?: {
        link: string;
        text: string;
        image: {
            src: string;
            alt: string;
            hint: string;
            description: string;
        };
    };
}

export default function InitiativeSidebar({ initiativeLists, relatedResource }: InitiativeSidebarProps) {
    return (
        <aside className="md:col-span-1 space-y-8">
            {relatedResource && (
                <>
                    <Card className="overflow-hidden">
                        <Image src={relatedResource.image.src} alt={relatedResource.image.alt} width={600} height={400} data-ai-hint={relatedResource.image.hint} className="w-full h-auto object-cover" />
                        {relatedResource.image.description && (
                            <div className="bg-background p-2 text-center">
                                <p className="text-muted-foreground text-sm font-semibold">{relatedResource.image.description}</p>
                            </div>
                        )}
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Related Resources</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li>
                                    <Link href={relatedResource.link} className="text-muted-foreground hover:text-primary transition-colors">
                                        {relatedResource.text}
                                    </Link>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </>
            )}
            {initiativeLists.map(list => (
                <InitiativeList key={list.title} title={list.title} initiatives={list.initiatives} />
            ))}
        </aside>
    );
}
