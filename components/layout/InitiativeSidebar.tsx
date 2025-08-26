
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Initiative {
    href: string;
    label: string;
}

const healthcareInitiatives: Initiative[] = [
    { href: '/cureline?from=healthcare', label: 'CureLine' },
    { href: '/carecircle?from=healthcare', label: 'CareCircle' },
    { href: '/childfirst?from=healthcare', label: 'ChildFirst' },
    { href: '/detect?from=healthcare', label: 'Detect' },
    { href: '/sighthope?from=healthcare', label: 'SightHope' },
    { href: '/oralscan?from=healthcare', label: 'OralScan' },
    { href: '/cyclesafe?from=healthcare', label: 'CycleSafe' },
    { href: '/soulcircle?from=healthcare', label: 'SoulCircle' },
];

const educationalInitiatives: Initiative[] = [
  { href: '/innocent-smiles?from=educational', label: 'Innocent Smiles' },
  { href: '/inspire-eduLab?from=educational', label: 'Inspire EduLab' },
  { href: '/eduaccess?from=educational', label: 'EduAccess' },
  { href: '/empower-english?from=educational', label: 'Empower English'},
  { href: '/digiempower?from=educational', label: 'DigiEmpower' },
  { href: '/sheconnects?from=educational', label: 'SheConnects' },
  { href: '/milieu?from=educational', label: 'Milieu' },
  { href: '/vidyashakti?from=educational', label: 'VidyaShakti' },
];

const genderEqualityInitiatives: Initiative[] = [
    { href: '/sheconnects?from=gender-equality', label: 'SheConnects' },
    { href: '/cyclesafe?from=gender-equality', label: 'CycleSafe' },
    { href: '/detect?from=gender-equality', label: 'Detect' },
    { href: '/suidhaga?from=gender-equality', label: 'SuiDhaga' },
    { href: '/krishti?from=gender-equality', label: 'Krishti' },
];

const childcareInitiatives: Initiative[] = [
  { href: '/innocent-smiles?from=childcare', label: 'Innocent Smiles' },
  { href: '/milieu?from=childcare', label: 'Milieu' },
  { href: '/childfirst?from=childcare', label: 'ChildFirst' },
];

const sustainabilityInitiatives: Initiative[] = [
    { href: '/green-roots?from=sustainability', label: 'GreenRoots' },
    { href: '/tideshield?from=sustainability', label: 'TideShield' },
    { href: '/roots-of-change?from=sustainability', label: 'Roots of Change' },
    { href: '/forest-cleaning?from=sustainability', label: 'Forest Cleaning' },
];

const ourInitiatives: Initiative[] = [
    { href: '/educational-initiatives', label: 'Educational Initiatives' },
    { href: '/healthcare-initiatives', label: 'Healthcare Initiatives' },
    { href: '/gender-equality-initiative', label: 'Gender Equality Initiatives' },
    { href: '/childcare-initiatives', label: 'Childcare Initiatives' },
    { href: '/sustainability-initiatives', label: 'Sustainability Initiatives' },
    { href: '/relief-to-the-underprivileged', label: 'Relief to the Underprivileged' },
    { href: '/disaster-management', label: 'Disaster Management' },
    { href: '/ignite-change-initiative', label: 'Ignite Change Initiative' },
];

const initiativeListsMap: { [key: string]: { title: string; initiatives: Initiative[] }[] } = {
    'educational': [{ title: "Educational Initiatives", initiatives: educationalInitiatives }],
    'healthcare': [{ title: "Healthcare Initiatives", initiatives: healthcareInitiatives }],
    'gender-equality': [{ title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives }],
    'childcare': [{ title: "Childcare Initiatives", initiatives: childcareInitiatives }],
    'sustainability': [{ title: "Sustainability Initiatives", initiatives: sustainabilityInitiatives }],
    'default': [{ title: "Our Initiatives", initiatives: ourInitiatives }],
    'multi-innocent-smiles': [{ title: "Educational Initiatives", initiatives: educationalInitiatives }, { title: "Childcare Initiatives", initiatives: childcareInitiatives }],
    'multi-milieu': [{ title: "Educational Initiatives", initiatives: educationalInitiatives }, { title: "Childcare Initiatives", initiatives: childcareInitiatives }],
    'multi-childfirst': [{ title: "Healthcare Initiatives", initiatives: healthcareInitiatives }, { title: "Childcare Initiatives", initiatives: childcareInitiatives }],
    'multi-sheconnects': [{ title: "Educational Initiatives", initiatives: educationalInitiatives }, { title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives }],
    'multi-cyclesafe': [{ title: "Healthcare Initiatives", initiatives: healthcareInitiatives }, { title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives }],
    'multi-detect': [{ title: "Healthcare Initiatives", initiatives: healthcareInitiatives }, { title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives }],
};

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
