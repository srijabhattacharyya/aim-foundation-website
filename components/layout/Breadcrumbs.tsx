
"use client";

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aimindia.org.in/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href ? { "item": `https://aimindia.org.in${item.href}` } : {})
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <nav aria-label="Breadcrumb" className="bg-muted/50 border-b">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li className="flex items-center">
              <Link href="/" className="hover:text-primary transition-colors flex items-center">
                <Home className="h-3.5 w-3.5 mr-1" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="h-3.5 w-3.5 mx-1 flex-shrink-0 opacity-50" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-primary transition-colors whitespace-nowrap">
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-foreground truncate max-w-[150px] sm:max-w-none">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
