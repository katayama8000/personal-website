import Image from 'next/image';
import React, { useState } from 'react';
import type { FC, MouseEvent } from 'react';

export type Props = {
  src: string;
  alt: string;
  isLarge?: boolean;
  onClick?: (e: MouseEvent<HTMLImageElement>) => void;
};

export const ImageWithSkeleton: FC<Props> = ({
  src,
  alt,
  isLarge = false,
  onClick,
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div
          className={`absolute inset-0 w-full h-full rounded-lg bg-gray-200 animate-pulse z-0${
            isLarge ? ' rounded-lg' : ''
          }`}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={isLarge ? 800 : 180}
        height={isLarge ? 800 : 180}
        className={`w-full h-full object-cover rounded-lg z-10${
          isLarge ? ' max-w-full max-h-[90vh] object-contain' : ''
        }`}
        onLoadingComplete={() => setLoaded(true)}
        onClick={onClick}
        priority={isLarge}
      />
    </div>
  );
};
