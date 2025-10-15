'use client';

import React from 'react';

export default function DetectClientPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Detect Cervical Health
      </h1>
      <p className="text-lg mb-6 text-center">
        Empowering rural women with cervical cancer screenings, awareness, and training for frontline workers.
      </p>

      {/* Example UI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="font-semibold text-xl mb-2">Screenings</h2>
          <p>Early detection saves lives. Join our screening programs.</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="font-semibold text-xl mb-2">Awareness</h2>
          <p>Learn about cervical health and preventive measures.</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="font-semibold text-xl mb-2">Training</h2>
          <p>We train frontline health workers to serve communities better.</p>
        </div>
      </div>
    </div>
  );
}
