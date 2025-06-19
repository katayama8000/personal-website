import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const IMAGES = [
  '/img/music/harukamirai.png',
  '/img/music/bluehearts.png',
  '/img/music/kururi.png',
  '/img/music/asikan.png',
  '/img/movie/fightclub.png',
  '/img/movie/greenbook.png',
  '/img/movie/joker.png',
  '/img/movie/goodwillhunting.png',
] as const;

const AUSTRALIA_IMAGES = [
  '/img/australia/AUS1.png',
  '/img/australia/AUS2.png',
  '/img/australia/AUS3.png',
  '/img/australia/AUS4.png',
] as const;

export default function AboutPage() {
  const currentYear = new Date().getFullYear();
  const yearsOfWorkExperience = currentYear - 2021;
  const yearsSinceMarriage = currentYear - 2020;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
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
              I got married {yearsSinceMarriage} years ago, and my main focus is
              to enjoy life with my wife. She has attracted a significant
              following on{' '}
              <a
                href="https://twitter.com/nimanimoney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2">
                Twitter
              </a>{' '}
              because of her captivating personality.
            </p>
            <p>
              We both share a passion for music and movies, which played a
              significant role in bringing us together.
            </p>
          </div>

          {/* Music and Movies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {IMAGES.map((url, index) => (
              <div key={index} className="aspect-square">
                <Image
                  src={url || '/placeholder.svg'}
                  alt=""
                  width={180}
                  height={180}
                  className="w-full h-full object-cover rounded-lg border border-gray-200"
                />
              </div>
            ))}
          </div>

          <div className="text-lg leading-relaxed mb-12 text-gray-700">
            <p>
              After finishing high school, I lived in Australia, and now
              I&apos;m eager to revisit the country.
            </p>
          </div>

          {/* Australia Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {AUSTRALIA_IMAGES.map((url, index) => (
              <div key={index} className="aspect-square">
                <Image
                  src={url || '/placeholder.svg'}
                  alt=""
                  width={180}
                  height={180}
                  className="w-full h-full object-cover rounded-lg border border-gray-200"
                />
              </div>
            ))}
          </div>

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
    </div>
  );
}
