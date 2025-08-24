
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { cn } from "@/lib/utils";

const healthcareInitiatives = [
    { href: '/cureline?from=healthcare', label: 'CureLine' },
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
    { href: '/forest-cleaning?from=sustainability', label: 'Forest Cleaning' },
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
        'relief': { title: "Our Initiatives", initiatives: ourInitiatives },
        'disaster-management': { title: "Our Initiatives", initiatives: ourInitiatives },
        'ignite-change': { title: "Our Initiatives", initiatives: ourInitiatives },
    };
    
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
        return <InitiativeList title="Our Initiatives" initiatives={ourInitiatives} />;
    }

    const getRelatedResource = () => {
        let content = null;
        let image = { src: "https://placehold.co/600x400.png", alt: "Related resource image", hint: "community", description: "" };

        if (pathname.includes('/detect')) {
            content = (
                <Link href="/blog/the-quiet-revolution-in-womens-health" className="text-muted-foreground hover:text-primary transition-colors">
                    The Quiet Revolution in Women’s Health
                </Link>
            );
            image = { src: "/images/projects/detect/detect3.avif", alt: "Detect initiative", hint: "women health rural", description: "Cervical Cancer Awareness."};
        } else if (pathname.includes('/milieu')) {
            content = (
                <Link href="/blog/nurturing-a-kinder-tomorrow-the-story-of-milieu" className="text-muted-foreground hover:text-primary transition-colors">
                    Nurturing a Kinder Tomorrow: The Story of Milieu
                </Link>
            );
            image = { src: "/images/projects/milieu/milieu1.avif", alt: "Milieu initiative", hint: "children collaboration", description: "Children from diverse backgrounds learning together"};
        } else if (pathname.includes('/suidhaga')) {
            content = (
                <Link href="/blog/threading-changes-the-suidhaga-story" className="text-muted-foreground hover:text-primary transition-colors">
                    Threading Changes: The SuiDhaga Story
                </Link>
            );
            image = { src: "/images/projects/suidhaga/suidhaga1.avif", alt: "SuiDhaga initiative", hint: "women tailoring", description: "Women learning new skills at a SuiDhaga center"};
        } else if (pathname.includes('/inspire-eduLab')) {
            content = (
                <Link href="/blog/redefining-classrooms-for-a-digital-tomorrow" className="text-muted-foreground hover:text-primary transition-colors">
                    Redefining Classrooms for a Digital Tomorrow
                </Link>
            );
            image = { src: "/images/projects/edulab/edulab1.avif", alt: "Inspire EduLab initiative", hint: "smart classroom children", description: "Smart Classroom"};
        } else if (pathname.includes('/eduaccess')) {
             content = (
                <Link href="/blog/teaching-beyond-boundaries" className="text-muted-foreground hover:text-primary transition-colors">
                    Teaching Beyond Boundaries
                </Link>
            );
            image = { src: "/images/projects/eduaccess/eduaccess2.avif", alt: "EduAccess initiative", hint: "online learning rural", description: "Rural students accessing online education"};
        } else if (pathname.includes('/krishti')) {
            content = (
                <Link href="/blog/crafting-futures-the-krishti-story" className="text-muted-foreground hover:text-primary transition-colors">
                    Crafted by Her. Backed by Krishti.
                </Link>
            );
             image = { src: "https://placehold.co/600x400.png", alt: "Krishti initiative", hint: "women entrepreneurship", description: "An empowered woman showcasing her handcrafted products"};
        } else if (pathname.includes('/oralscan')) {
            content = (
                <Link href="/blog/screening-today-for-a-healthier-tomorrow" className="text-muted-foreground hover:text-primary transition-colors">
                    Screening Today for a Healthier Tomorrow
                </Link>
            );
            image = { src: "/images/projects/oralscan/oranscan2.avif", alt: "OralScan initiative", hint: "oral cancer screening", description: "Oral Cancer Screening in association with Narayana Health."};
        } else if (pathname.includes('/green-roots')) {
            content = (
                <Link href="/blog/planting-hope-growing-futures" className="text-muted-foreground hover:text-primary transition-colors">
                    Planting Hope, Growing Futures
                </Link>
            );
            image = { src: "/images/projects/sustainability/sustainability5.avif", alt: "GreenRoots initiative", hint: "community planting trees", description: "Sapling Distribution to community members"};
        } else if (pathname.includes('/empower-english')) {
            content = (
                <Link href="/blog/empower-english-story" className="text-muted-foreground hover:text-primary transition-colors">
                    Confidence Begins with Conversation
                </Link>
            );
            image = { src: "/images/projects/empower-english/empower-english.avif", alt: "Empower English initiative", hint: "english speaking class", description: "Underprivileged students getting health drink during English classes"};
        } else if (pathname.includes('/sighthope')) {
             content = (
                <Link href="/blog/restoring-sight-rekindling-dreams" className="text-muted-foreground hover:text-primary transition-colors">
                    Restoring Sight, Rekindling Dreams
                </Link>
            );
            image = { src: "/images/projects/sighthope/spectacles-distribution.avif", alt: "SightHope initiative", hint: "spectacles distribution", description: "Free Spectacles Distribution"};
        } else if (pathname.includes('/relief-to-the-underprivileged')) {
            content = (
                <Link href="/blog/relief-to-the-underprivileged" className="text-muted-foreground hover:text-primary transition-colors">
                    Relief to the Underprivileged – AIM Foundation’s Lifeline of Hope
                </Link>
            );
            image = { src: "https://placehold.co/600x400.png", alt: "Relief initiative", hint: "community relief support", description: "Distributing essential supplies to families in need"};
        } else if (pathname.includes('/roots-of-change')) {
            content = (
                <Link href="/blog/roots-of-change" className="text-muted-foreground hover:text-primary transition-colors">
                    Roots of Change: Planting Awareness, Growing a Greener Tomorrow
                </Link>
            );
            image = { src: "/images/projects/sustainability/sustainability3.avif", alt: "Roots of Change initiative", hint: "environmental awareness education", description: "An interactive session on environmental conservation"};
        } else if (pathname.includes('/sheconnects')) {
            content = (
                <Link href="/blog/project-sheconnects" className="text-muted-foreground hover:text-primary transition-colors">
                    Project SheConnects: Empowering Women Through Technology
                </Link>
            );
            image = { src: "https://placehold.co/600x400.png", alt: "SheConnects initiative", hint: "women technology", description: "Women learning digital skills in a SheConnects workshop"};
        } else if (pathname.includes('/cyclesafe')) {
            content = (
                <Link href="/blog/from-stigma-to-strength" className="text-muted-foreground hover:text-primary transition-colors">
                    From Stigma to Strength: The CycleSafe Story
                </Link>
            );
            image = { src: "https://placehold.co/600x400.png", alt: "CycleSafe initiative", hint: "menstrual health awareness", description: "Adolescent girls at a menstrual health workshop"};
        } else if (pathname.includes('/disaster-management')) {
            content = (
                <Link href="/blog/from-despair-to-recovery-rebuilding-lives-after-disaster" className="text-muted-foreground hover:text-primary transition-colors">
                    From Despair to Recovery: Rebuilding Lives After Disaster
                </Link>
            );
            image = { src: "/images/projects/relief/relief4.avif", alt: "Disaster relief efforts", hint: "disaster relief team", description: "Relief distribution in Sundarbans."};
        } else if (pathname.includes('/ignite-change-initiative')) {
            content = (
                <Link href="/blog/igniting-change-transforming-communities" className="text-muted-foreground hover:text-primary transition-colors">
                    Igniting Change: How Grassroots Action Transforms Communities
                </Link>
            );
            image = { src: "https://placehold.co/600x400.png", alt: "Ignite Change initiative", hint: "community action group", description: "A group of volunteers working on a community project"};
        } else if (pathname.includes('/digiempower')) {
            content = (
                <Link href="/blog/no-child-left-offline" className="text-muted-foreground hover:text-primary transition-colors">
                    No Child Left Offline: How DigiEmpower is Bridging the Digital Divide
                </Link>
            );
            image = { src: "https://placehold.co/1920x580.png", alt: "DigiEmpower initiative", hint: "digital literacy children", description: "Children learning to use computers"};
        } else if (pathname.includes('/cureline')) {
            content = (
                <Link href="/blog/cureline-bringing-healthcare-to-the-last-mile" className="text-muted-foreground hover:text-primary transition-colors">
                    CureLine: Bringing Healthcare to the Last Mile
                </Link>
            );
            image = { src: "/images/projects/cureline/cureline2.avif", alt: "CureLine initiative", hint: "rural healthcare camp", description: "Health Camp at Bali Island, Sundarbans"};
        } else if (pathname.includes('/tideshield')) {
            content = (
                <Link href="/blog/tideshield-restoring-mangroves" className="text-muted-foreground hover:text-primary transition-colors">
                    TideShield: Restoring the Mangrove Heartbeat of the Sundarbans
                </Link>
            );
            image = { src: "https://placehold.co/600x400.png", alt: "TideShield initiative", hint: "mangrove restoration", description: "Volunteers planting mangrove saplings"};
        } else if (pathname.includes('/childfirst')) {
            content = (
                <Link href="/blog/childfirst-health-hope-dignity" className="text-muted-foreground hover:text-primary transition-colors">
                    ChildFirst: Bringing Health, Hope, and Dignity
                </Link>
            );
            image = { src: "/images/projects/childfirst/childfirst3.avif", alt: "ChildFirst initiative", hint: "paediatric camp", description: "Specialised Paediatric Camp at Kolkata."};
        } else if (pathname.includes('/carecircle')) {
            content = (
                <Link href="/blog/carecircle-bringing-healing-to-the-city" className="text-muted-foreground hover:text-primary transition-colors">
                    CareCircle: Bringing Healing to the Heart of the City
                </Link>
            );
            image = { src: "/images/projects/carecircle/carecircle1.webp", alt: "Health camp in Kolkata", hint: "urban health camp", description: "Health camp in Kolkata"};
        } else if (pathname.includes('/vidyashakti')) {
            content = (
                <Link href="/blog/vidyashakti-ai-learning" className="text-muted-foreground hover:text-primary transition-colors">
                    VidyaShakti: AI-Powered Learning for Rural Classrooms
                </Link>
            );
            image = { src: "/images/projects/vidyashakti/vidyashakti2.avif", alt: "VidyaShakti initiative", hint: "learning app student", description: "A student engaging with the VidyaShakti learning app"};
        } else if (pathname.includes('/soulcircle')) {
            content = (
                 <Link href="/blog/soulcircle-24-7-mental-health-support" className="text-muted-foreground hover:text-primary transition-colors">
                    SoulCircle: 24/7 Compassionate Mental Health Support
                </Link>
            );
            image = { src: "/images/projects/soulcircle/soulcircle1.avif", alt: "SoulCircle initiative", hint: "mental health peace", description: "Finding peace and support with SoulCircle"};
        } else if (pathname.includes('/forest-cleaning')) {
            content = (
                 <Link href="/blog/forest-cleaning-restoring-natural-habitats" className="text-muted-foreground hover:text-primary transition-colors">
                    Restoring Natural Habitats with Forest Cleaning
                </Link>
            );
            image = { src: "/images/projects/forest-cleaning/forest-cleaning1.avif", alt: "Forest Cleaning initiative", hint: "forest cleanup", description: "Volunteers cleaning up a forest area"};
        } else if (pathname.includes('/innocent-smiles')) {
            content = (
                 <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Read more about Innocent Smiles
                </Link>
            );
            image = { src: "/images/projects/innocent-smiles/innocent-smiles1.avif", alt: "Innocent Smiles initiative", hint: "children art class", description: "Children participating in an art class."};
        }


        return { content, image };
    }

    const { content, image } = getRelatedResource();

    const showOverlay = !['/vidyashakti', '/digiempower', '/sighthope', '/oralscan'].some(p => pathname.includes(p));

    return (
        <aside className="md:col-span-1 space-y-8">
            <Card className="overflow-hidden relative">
                 <Image src={image.src} alt={image.alt} width={600} height={400} data-ai-hint={image.hint} className="w-full h-auto object-cover" />
                 {image.description && (
                    <div className={cn(
                        "absolute inset-0 flex items-end justify-center p-4",
                        showOverlay && "bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                    )}>
                        <p className={cn(
                            "text-center text-sm font-semibold",
                            showOverlay ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]" : "text-gray-900 bg-white/70 p-1 rounded"
                        )}>
                            {image.description}
                        </p>
                    </div>
                )}
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Related Resources</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        <li>{content ? content : <p className="text-muted-foreground text-sm">No related resources for this initiative.</p>}</li>
                    </ul>
                </CardContent>
            </Card>
            {renderMainLists()}
        </aside>
    );
}
