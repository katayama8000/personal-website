import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';
import React, { FC } from 'react';

export const ImageGrid: FC<{
  images: readonly string[];
  onImageClick: (url: string) => void;
}> = ({ images, onImageClick }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
    {images.map((url, index) => (
      <div
        key={index}
        className="aspect-square group cursor-pointer relative transition-transform duration-200 hover:scale-105">
        <ImageWithSkeleton
          src={url || '/placeholder.svg'}
          alt=""
          onClick={() => onImageClick(url)}
          overlayOnHover
        />
      </div>
    ))}
  </div>
);
