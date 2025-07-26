
"use client";

import { useEffect, useState } from 'react';

export default function TrusteeEmail() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const user = 'trustee';
    const domain = 'aimindia.org.in';
    setEmail(`${user}@${domain}`);
  }, []);

  if (!email) {
    return null;
  }

  return (
    <a
      href={`mailto:${email}`}
      className="hover:text-primary transition-colors"
    >
      {email}
    </a>
  );
}
