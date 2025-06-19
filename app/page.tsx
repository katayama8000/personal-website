import {
  User,
  Github,
  MessageCircle,
  BookOpen,
  FileText,
  StickyNote,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const TITLE_INFORMATION_LIST = [
  {
    title: 'GitHub',
    description: 'I try to write code everyday',
    url: 'https://github.com/katayama8000',
    icon: <Github className="h-5 w-5" />,
  },
  {
    title: 'About',
    description: 'Brief introduction about me',
    pageUrl: 'about',
    icon: <User className="h-5 w-5" />,
  },
  {
    title: 'GohanDAO',
    description: 'I created a DAO on discord',
    url: 'https://discord.com/invite/CCwTrB2k6r',
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    title: 'Line Community',
    description: 'I created a React community on LINE',
    url: 'https://line.me/ti/g2/qe5B4jkfc1Uf1IxhB1DsgSD6-ez5aSAlGEEpTg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default',
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    title: 'Zenn',
    description: 'Tech blog',
    url: 'https://zenn.dev/tattu',
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: 'Note',
    description: 'Anything blog',
    url: 'https://note.com/katayama8000',
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: 'Scrapbox',
    description: 'Daily note',
    url: 'https://scrapbox.io/katayama8000/',
    icon: <StickyNote className="h-5 w-5" />,
  },
  {
    title: 'Contact',
    description: 'Contact me on Twitter',
    url: 'https://twitter.com/katayama8000',
    icon: <Twitter className="h-5 w-5" />,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header with Profile */}
        <header className="mb-8">
          {/* Profile Image with Text */}
          <div className="flex items-center gap-6 mb-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-white p-2">
                <Image
                  src="/img/icon/icon0.png"
                  alt="Tatsufumi Katayama"
                  width={100}
                  height={100}
                  className="w-full h-full rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-light text-gray-900 mb-2">
                Tatsufumi Katayama
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                I am an engineer based in Nagoya, Japan.
              </p>
            </div>
          </div>
        </header>

        {/* Navigation Links */}
        <div className="space-y-8">
          {TITLE_INFORMATION_LIST.map((item) => (
            <div key={item.title} className="group py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {/* Icon */}
                  <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-black transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="ml-6">
                  {item.pageUrl ? (
                    <Link
                      href={`/${item.pageUrl}`}
                      className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-medium">
                      View →
                    </Link>
                  ) : (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-medium">
                      Visit →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
