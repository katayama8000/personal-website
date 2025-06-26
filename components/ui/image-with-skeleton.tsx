import Image from 'next/image';
import React, { useState } from 'react';
import type { FC, MouseEvent } from 'react';

export type Props = {
  src: string;
  alt: string;
  isLarge?: boolean;
  onClick?: (e: MouseEvent<HTMLImageElement>) => void;
  onLoadingComplete?: () => void;
  overlayOnHover?: boolean;
};

export const ImageWithSkeleton: FC<Props> = ({
  src,
  alt,
  isLarge = false,
  onClick,
  onLoadingComplete,
  overlayOnHover = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = () => {
    setLoaded(true);
    if (onLoadingComplete) onLoadingComplete();
  };
  return (
    <div
      className={`relative w-full h-full transition-all duration-700 ${
        loaded ? 'animate-fade-in-up' : ''
      }`}>
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
        onLoadingComplete={handleLoaded}
        onClick={onClick}
        priority={isLarge}
      />
      {overlayOnHover && (
        <div className="absolute inset-0 rounded-lg bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-20">
          <span className="text-white text-2xl font-bold drop-shadow">
            Click to Enlarge
          </span>
        </div>
      )}
    </div>
  );
};
