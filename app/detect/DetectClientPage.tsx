'use client';

import Image from 'next/image';

export default function DetectClientPage() {
  return (
    <main className="px-4 md:px-20 py-10 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Detect Cervical Health
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Detect by AIM Foundation empowers rural women with cervical cancer screenings, awareness, 
          and training for frontline workers to save lives through early detection.
        </p>
        <div className="mt-6">
          <Image
            src="https://aimindia.org.in/home.avif"
            alt="Detect Cervical Health"
            width={1200}
            height={630}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          How Our Program Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Screening Camps</h3>
            <p className="text-gray-600">
              Organizing cervical cancer screening camps in rural areas for early detection.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Awareness Workshops</h3>
            <p className="text-gray-600">
              Educating women and communities about cervical cancer prevention and hygiene.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Frontline Training</h3>
            <p className="text-gray-600">
              Training local health workers to identify early signs and provide support.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-blue-50 p-10 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Our Cause</h2>
        <p className="text-gray-600 mb-6">
          Support rural women’s health and empower communities through early detection.
        </p>
        <a
          href="/join-us"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Become a Volunteer
        </a>
      </section>
    </main>
  );
}
