import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';
import React, { FC, useEffect, useState } from 'react';

export const ImageGrid: FC<{
  images: readonly string[];
  onImageClick: (url: string) => void;
  onAllImagesLoaded?: () => void;
  animateAll?: boolean;
  onImageLoaded?: (src: string) => void;
}> = ({
  images,
  onImageClick,
  onAllImagesLoaded,
  animateAll,
  onImageLoaded,
}) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const allLoaded = loadedCount === images.length;

  useEffect(() => {
    if (allLoaded && onAllImagesLoaded) {
      onAllImagesLoaded();
    }
  }, [allLoaded, onAllImagesLoaded]);

  const handleLoaded = (src: string) => {
    setLoadedCount((c) => c + 1);
    if (onImageLoaded) onImageLoaded(src);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {images.map((url, index) => (
        <div
          key={index}
          className="aspect-square group cursor-pointer relative"
          style={{
            opacity: allLoaded ? 1 : 0,
            pointerEvents: allLoaded ? 'auto' : 'none',
            transition: 'opacity 0.5s',
            animation:
              allLoaded && animateAll
                ? `fade-in-up 0.5s ${index * 60}ms both`
                : undefined,
          }}>
          <ImageWithSkeleton
            src={url || '/placeholder.svg'}
            alt=""
            onClick={() => onImageClick(url)}
            overlayOnHover
            onLoadingComplete={() => handleLoaded(url)}
          />
        </div>
      ))}
    </div>
  );
};
