// src/app/page.tsx
"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4 space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Meme Generator</h1>

      <p className="text-lg text-gray-600">
        Upload your own images, or use one of our popular meme templates.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/search?q="
          className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 text-center"
        >
          Start from Scratch
        </Link>

        <Link
          href="/templates"
          className="bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700 text-center"
        >
          Browse Meme Templates
        </Link>
      </div>
    </main>
  );
}