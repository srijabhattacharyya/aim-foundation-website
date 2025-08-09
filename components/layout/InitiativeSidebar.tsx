
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

const ourInitiatives = [
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

const InitiativeList: React.FC<{ title: string; initiatives: { href: string; label: string }[] }> = ({ title, initiatives }) => (
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

export default function InitiativeSidebar({ from }: InitiativeSidebarProps) {
    const pathname = usePathname();
    
    const pageConfig: { [key: string]: { from: string[]; lists: {title: string, initiatives: any[]}[] } } = {
        '/innocent-smiles': { from: ['educational', 'childcare'], lists: [{title: "Educational Initiatives", initiatives: educationalInitiatives}, {title: "Childcare Initiatives", initiatives: childcareInitiatives}] },
        '/milieu': { from: ['educational', 'childcare'], lists: [{title: "Educational Initiatives", initiatives: educationalInitiatives}, {title: "Childcare Initiatives", initiatives: childcareInitiatives}] },
        '/childfirst': { from: ['childcare', 'healthcare'], lists: [{title: "Childcare Initiatives", initiatives: childcareInitiatives}, {title: "Healthcare Initiatives", initiatives: healthcareInitiatives}] },
        '/sheconnects': { from: ['educational', 'gender-equality'], lists: [{title: "Educational Initiatives", initiatives: educationalInitiatives}, {title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives}] },
        '/cyclesafe': { from: ['gender-equality', 'healthcare'], lists: [{title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives}, {title: "Healthcare Initiatives", initiatives: healthcareInitiatives}] },
        '/detect': { from: ['gender-equality', 'healthcare'], lists: [{title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives}, {title: "Healthcare Initiatives", initiatives: healthcareInitiatives}] },
    };

    const singleCategoryPages: { [key: string]: { title: string, initiatives: any[]} } = {
        'educational': { title: "Educational Initiatives", initiatives: educationalInitiatives },
        'gender-equality': { title: "Gender Equality Initiatives", initiatives: genderEqualityInitiatives },
        'childcare': { title: "Childcare Initiatives", initiatives: childcareInitiatives },
        'sustainability': { title: "Sustainability Initiatives", initiatives: sustainabilityInitiatives },
        'healthcare': { title: "Healthcare Initiatives", initiatives: healthcareInitiatives },
    };

    const isDetectPage = pathname.includes('/detect');
    const isMilieuPage = pathname.includes('/milieu');
    const isSuiDhagaPage = pathname.includes('/suidhaga');
    const isInspireEduLabPage = pathname.includes('/inspire-eduLab');
    const isEduAccessPage = pathname.includes('/eduaccess');

    const renderMainLists = () => {
        const currentPageConfig = pageConfig[pathname];
        if (currentPageConfig && currentPageConfig.from.includes(from)) {
            return currentPageConfig.lists.map(list => (
                <InitiativeList key={list.title} title={list.title} initiatives={list.initiatives} />
            ));
        }
        
        const singleCatConfig = singleCategoryPages[from];
        if(singleCatConfig) {
            return <InitiativeList title={singleCatConfig.title} initiatives={singleCatConfig.initiatives} />;
        }

        // Fallback for pages not in the config or with a 'from' not in the list
        return <InitiativeList title="Healthcare Initiatives" initiatives={healthcareInitiatives} />;
    }

    return (
        <aside className="md:col-span-1 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Related Resources</CardTitle>
                </CardHeader>
                <CardContent>
                    {isDetectPage ? (
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog/the-quiet-revolution-in-womens-health" className="text-muted-foreground hover:text-primary transition-colors">
                                The Quiet Revolution in Women’s Health
                                </Link>
                            </li>
                        </ul>
                    ) : isMilieuPage ? (
                         <ul className="space-y-2">
                            <li>
                                <Link href="/blog/nurturing-a-kinder-tomorrow-the-story-of-milieu" className="text-muted-foreground hover:text-primary transition-colors">
                                Nurturing a Kinder Tomorrow: The Story of Milieu
                                </Link>
                            </li>
                        </ul>
                    ) : isSuiDhagaPage ? (
                         <ul className="space-y-2">
                            <li>
                                <Link href="/blog/threading-changes-the-suidhaga-story" className="text-muted-foreground hover:text-primary transition-colors">
                                Threading Changes: The SuiDhaga Story
                                </Link>
                            </li>
                        </ul>
                    ) : isInspireEduLabPage ? (
                        <ul className="space-y-2">
                           <li>
                               <Link href="/blog/redefining-classrooms-for-a-digital-tomorrow" className="text-muted-foreground hover:text-primary transition-colors">
                               Redefining Classrooms for a Digital Tomorrow
                               </Link>
                           </li>
                       </ul>
                   ) : isEduAccessPage ? (
                        <ul className="space-y-2">
                           <li>
                               <Link href="/blog/teaching-beyond-boundaries" className="text-muted-foreground hover:text-primary transition-colors">
                               Teaching Beyond Boundaries
                               </Link>
                           </li>
                       </ul>
                   ) : (
                        <p className="text-muted-foreground text-sm">No related resources for this initiative.</p>
                    )}
                </CardContent>
            </Card>

            {renderMainLists()}
            
            <InitiativeList title="Our Initiatives" initiatives={ourInitiatives} />
        </aside>
    );
}
