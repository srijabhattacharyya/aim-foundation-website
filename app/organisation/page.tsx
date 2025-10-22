
import type { Metadata } from 'next';
import OrganisationClientPage from './OrganisationClientPage';

export const metadata: Metadata = {
    title: 'AIM Foundation | Leading NGO in Kolkata for Community Development',
    description: 'Since 2016, AIM Foundation has empowered underprivileged families in West Bengal through education, healthcare, women empowerment, and community development.',
    keywords: ['AIM Foundation', 'NGO in Kolkata', 'West Bengal NGO', 'education NGO', 'healthcare NGO', 'women empowerment NGO', 'environment NGO', 'child development NGO', 'best NGO Kolkata', 'community development NGO'],
    authors: [{ name: 'AIM Foundation' }],
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        url: 'https://aimindia.org.in/organisation',
        title: 'AIM Foundation | Leading NGO in Kolkata for Community Development',
        description: 'Since 2016, AIM Foundation has empowered underprivileged families in West Bengal through education, healthcare, women empowerment, and community development.',
        images: [
            {
                url: 'https://aimindia.org.in/home.avif',
                width: 1200,
                height: 630,
                alt: 'AIM Foundation Community Development',
            },
        ],
        siteName: 'AIM Foundation',
        locale: 'en_IN',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@aimindiango',
        title: 'AIM Foundation | Leading NGO in Kolkata for Community Development',
        description: 'Since 2016, AIM Foundation has empowered underprivileged families in West Bengal through education, healthcare, women empowerment, and community development.',
        images: ['https://aimindia.org.in/home.avif'],
    },
    alternates: {
        canonical: '/organisation',
    },
};

export default function OrganisationPage() {
    return <OrganisationClientPage />;
}
