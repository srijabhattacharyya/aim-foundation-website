
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const healthcareInitiatives = [
    { href: '/cureline?from=healthcare', label: 'CureLine' },
    { href: '/surgireach?from=healthcare', label: 'SurgiReach' },
    { href: '/carecircle?from=healthcare', label: 'CareCircle' },
    { href: '/childfirst?from=healthcare', label: 'ChildFirst' },
    { href: '/detect?from=healthcare', label: 'Detect' },
    { href: '/sighthope?from=healthcare', label: 'SightHope' },
    { href: '/oralscan?from=healthcare', label: 'OralScan' },
    { href: '/cyclesafe?from=healthcare', label: 'CycleSafe' },
    { href: '/soulcircle?from=healthcare', label: 'SoulCircle' },
];

const educationalInitiatives = [
  { href: '/innocent-smiles?from=educational', label: 'Innocent Smiles' },
  { href: '/inspire-eduLab?from=educational', label: 'Inspire EduLab' },
  { href: '/eduaccess?from=educational', label: 'EduAccess' },
  { href: '/empower-english?from=educational', label: 'Empower English'},
  { href: '/digiempower?from=educational', label: 'DigiEmpower' },
  { href: '/sheconnects?from=educational', label: 'SheConnects' },
  { href: '/milieu?from=educational', label: 'Milieu' },
  { href: '/vidyashakti?from=educational', label: 'VidyaShakti' },
];

const genderEqualityInitiatives = [
    { href: '/sheconnects?from=gender-equality', label: 'SheConnects' },
    { href: '/cyclesafe?from=gender-equality', label: 'CycleSafe' },
    { href: '/detect?from=gender-equality', label: 'Detect' },
    { href: '/suidhaga?from=gender-equality', label: 'SuiDhaga' },
    { href: '/krishti?from=gender-equality', label: 'Krishti' },
];

const childcareInitiatives = [
  { href: '/innocent-smiles?from=childcare', label: 'Innocent Smiles' },
  { href: '/milieu?from=childcare', label: 'Milieu' },
  { href: '/childfirst?from=childcare', label: 'ChildFirst' },
];

const sustainabilityInitiatives = [
    { href: '/green-roots?from=sustainability', label: 'GreenRoots' },
    { href: '/tideshield?from=sustainability', label: 'TideShield' },
    { href: '/roots-of-change?from=sustainability', label: 'Roots of Change' },
];

const otherInitiatives = [
    { href: '/educational-initiatives', label: 'Educational Initiatives' },
    { href: '/healthcare-initiatives', label: 'Healthcare Initiatives' },
    { href: '/gender-equality-initiative', label: 'Gender Equality Initiatives' },
    { href: '/childcare-initiatives', label: 'Childcare Initiatives' },
    { href: '/sustainability-initiatives', label: 'Sustainability Initiatives' },
    { href: '/relief-to-the-underprivileged', label: 'Relief to the Underprivileged' },
    { href: '/disaster-management', label: 'Disaster Management' },
    { href: '/ignite-change-initiative', label: 'Ignite Change Initiative' },
];

interface InitiativeSidebarProps {
    from: string;
}

export default function InitiativeSidebar({ from }: InitiativeSidebarProps) {
    const pathname = usePathname();
    let mainInitiatives;
    let title;

    switch (from) {
        case 'educational':
            mainInitiatives = educationalInitiatives;
            title = "Educational Initiatives";
            break;
        case 'gender-equality':
            mainInitiatives = genderEqualityInitiatives;
            title = "Gender Equality";
            break;
        case 'childcare':
            mainInitiatives = childcareInitiatives;
            title = "Childcare Initiatives";
            break;
        case 'sustainability':
            mainInitiatives = sustainabilityInitiatives;
            title = "Sustainability Initiatives";
            break;
        default:
            mainInitiatives = healthcareInitiatives;
            title = "Healthcare Initiatives";
    }

    const isDetectPage = pathname.includes('/detect');

    return (
        <aside className="md:col-span-1 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                    {mainInitiatives.map((item) => (
                        <li key={item.href}>
                        <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {item.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Related Resources</CardTitle>
                </CardHeader>
                <CardContent>
                    {isDetectPage && (
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog/the-quiet-revolution-in-womens-health" className="text-muted-foreground hover:text-primary transition-colors">
                                The Quiet Revolution in Women’s Health
                                </Link>
                            </li>
                        </ul>
                    )}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Other Initiatives</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {otherInitiatives.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </aside>
    );
}
