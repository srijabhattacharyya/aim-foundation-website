"use client";

import { useEffect, useState } from 'react';

export default function ContactEmail() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const user = 'info';
    const domain = 'aimindia.org.in';
    setEmail(`${user}@${domain}`);
  }, []);

  return (
    <div className="text-muted-foreground mt-4">
      {email && (
        <>
            <strong>Email:</strong>{' '}
            <a
            href={`mailto:${email}`}
            className="hover:text-primary transition-colors"
            >
            {email}
            </a>
        </>
      )}
    </div>
  );
}
