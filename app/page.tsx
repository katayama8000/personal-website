'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  ExternalLink,
  User,
  BookOpen,
  FileText,
  StickyNote,
  X,
  GripVertical,
} from 'lucide-react';
import { LinkedinIcon } from '@/components/icons/LinkedinIcon';
import { GithubIcon } from '@/components/icons/GithubIcon';

const initialItems = [
  {
    title: 'GitHub',
    url: 'https://github.com/katayama8000',
    icon: <GithubIcon className="w-8 h-8" />,
  },
  {
    title: 'About',
    pageUrl: 'about',
    icon: <User className="w-8 h-8" />,
  },
  {
    title: 'Zenn',
    url: 'https://zenn.dev/tattu',
    icon: <BookOpen className="w-8 h-8" />,
  },
  {
    title: 'Note',
    url: 'https://note.com/katayama8000',
    icon: <FileText className="w-8 h-8" />,
  },
  {
    title: 'Scrapbox',
    url: 'https://scrapbox.io/katayama8000/',
    icon: <StickyNote className="w-8 h-8" />,
  },
  {
    title: 'X',
    url: 'https://twitter.com/katayama8000',
    icon: <X className="w-8 h-8" />,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/%E9%81%94%E6%96%87-%E7%89%87%E5%B1%B1-243689236/',
    icon: <LinkedinIcon className="w-8 h-8" />,
  },
  {
    title: 'Medium',
    url: 'https://medium.com/@tattu.0310',
    icon: <ExternalLink className="w-8 h-8" />,
  },
];

const SquareCard = ({
  title,
  icon,
  href,
  isInternal = false,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
  isInternal?: boolean;
}) => {
  const baseClass =
    'group aspect-square flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/5 shadow-2xl hover:shadow-2xl transition-all duration-300 focus:outline-none transform hover:scale-105 backdrop-blur-2xl backdrop-saturate-200';
  const titleClass =
    'text-lg font-semibold text-gray-900 mt-2 group-hover:underline transition-colors flex items-center gap-1';
  if (isInternal) {
    return (
      <Link href={href} className={baseClass}>
        <div>{icon}</div>
        <div className={titleClass}>{title}</div>
      </Link>
    );
  } else {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}>
        <div>{icon}</div>
        <div className={titleClass}>
          {title}
          <ExternalLink
            className="inline-block w-5 h-5 text-gray-400 ml-1 align-text-bottom group-hover:text-gray-600 transition-colors"
            aria-label="External link"
          />
        </div>
      </a>
    );
  }
};

const SortableSquareCard = ({ item }: { item: typeof initialItems[0] }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: item.title });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isInternal = !!item.pageUrl;
  const href = isInternal ? `/${item.pageUrl}` : item.url || '#';

  return (
    <div ref={setNodeRef} style={style} {...attributes} className="relative">
      <div
        className="absolute top-2 right-2 p-1 cursor-grab z-10"
        {...listeners}
        onClick={(e) => e.preventDefault()}
      >
        <GripVertical className="w-5 h-5 text-gray-400" />
      </div>
      <SquareCard
        title={item.title}
        icon={item.icon}
        href={href}
        isInternal={isInternal}
      />
    </div>
  );
};


const HomePage = () => {
  const [items, setItems] = useState(initialItems);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd({active, over}: DragEndEvent) {
    if (over && active.id !== over.id) {
      setItems((currentItems) => {
        const oldIndex = currentItems.findIndex(item => item.title === active.id);
        const newIndex = currentItems.findIndex(item => item.title === over.id);
        return arrayMove(currentItems, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header with Profile */}
        <header className="mb-8">
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
        {/* Navigation Links as Square Cards */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items.map(item => item.title)} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((item) => (
                <SortableSquareCard key={item.title} item={item} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default HomePage;