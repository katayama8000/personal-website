import { Button } from '@/components/ui/button';
import {
  ExternalLink,
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
      <div className="max-w-4xl mx-auto px-6 py-8">
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
        <div className="space-y-6">
          {TITLE_INFORMATION_LIST.map((item) => (
            <div
              key={item.title}
              className="group p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {/* Icon */}
                  <div className="p-2 bg-gray-50 rounded-md group-hover:bg-gray-100 transition-colors">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="ml-6">
                  {item.pageUrl ? (
                    <Button asChild variant="outline">
                      <Link href={`/${item.pageUrl}`}>View</Link>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="ghost"
                      className="group-hover:bg-gray-50">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        Visit
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
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
