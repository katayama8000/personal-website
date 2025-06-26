import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';
import React, { FC } from 'react';

export const ImageModal: FC<{
  image: string;
  onClose: () => void;
}> = ({ image, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity animate-fadeIn">
    <div className="relative max-w-4xl max-h-full flex items-center justify-center">
      <div
        className="group relative cursor-pointer rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
        onClick={onClose}>
        <ImageWithSkeleton
          src={image}
          alt="Enlarged image"
          isLarge
          overlayOnHover={false}
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 rounded-lg">
          Click to Close
        </span>
      </div>
    </div>
  </div>
);
