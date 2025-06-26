'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { ImageGrid } from '@/components/ImageGrid';
import { ImageModal } from '@/components/ImageModal';

const IMAGES = [
  '/img/cat/cat1.jpg',
  '/img/cat/cat2.jpg',
  '/img/cat/cat3.jpg',
  '/img/cat/cat4.jpg',
  '/img/cat/cat5.jpg',
  '/img/cat/cat6.jpg',
  '/img/cat/cat7.jpg',
  '/img/cat/cat8.jpg',
] as const;

const ABROAD_IMAGES = [
  '/img/abroad/1.jpg',
  '/img/abroad/2.jpg',
  '/img/abroad/3.jpg',
  '/img/abroad/4.jpg',
] as const;

const AboutPage = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfWorkExperience = currentYear - 2021;
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Button
          asChild
          variant="ghost"
          className="mb-8 -ml-4 text-2xl p-2 h-auto">
          <Link href="/">←</Link>
        </Button>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-light text-gray-900 mb-8">About</h1>

          <div className="text-lg leading-relaxed space-y-6 mb-12 text-gray-700">
            <p>
              I&apos;m an engineer based in Nagoya, Japan, with{' '}
              {yearsOfWorkExperience} years of professional experience. My work
              involves using various programming languages such as C,
              JavaScript, TypeScript, and I&apos;m currently interested in Rust.
            </p>
          </div>

          <h2 className="text-2xl font-light text-gray-900 mb-6">
            Outside of Work
          </h2>

          <div className="text-lg leading-relaxed space-y-6 mb-12 text-gray-700">
            <p>
              I have two cats named Moufu and Ikura. I work for them. These cats
              grew up in harsh environments, so they deserve to be happy for the
              rest of their lives.
            </p>
            <p>
              I used to play guitar and I love listening to music, especially
              rock music.
            </p>
          </div>

          {/* Music and Movies Grid */}
          <ImageGrid images={IMAGES} onImageClick={setEnlargedImage} />

          <div className="text-lg leading-relaxed mb-12 text-gray-700">
            <p>
              After finishing high school, I lived in Australia, and now
              I&apos;m eager to revisit the country.
            </p>
            <p>
              I love traveling abroad and I prefre to travel alone. I enjoy
              visiting places where I can experience the local culture.
            </p>
          </div>

          {/* Abroad Images Grid */}
          <ImageGrid images={ABROAD_IMAGES} onImageClick={setEnlargedImage} />

          <h2 className="text-2xl font-light text-gray-900 mb-6">Contact</h2>
          <p className="text-lg text-gray-700">
            Feel free to contact me at{' '}
            <a
              href="mailto:tattu.0310@gmail.com"
              className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2">
              tattu.0310@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Image Enlargement Modal */}
      {enlargedImage && (
        <ImageModal image={enlargedImage} onClose={closeEnlargedImage} />
      )}
    </div>
  );
};

export default AboutPage;
