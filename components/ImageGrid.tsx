import { ImageWithSkeleton } from '@/components/ui/image-with-skeleton';
import React, { FC, useEffect, useState, useCallback } from 'react';

export type Props = {
  images: readonly string[];
  onImageClick: (url: string) => void;
  onAllImagesLoaded?: () => void;
  animateAll?: boolean;
  onImageLoaded?: (src: string) => void;
};

export const ImageGrid: FC<Props> = ({
  images,
  onImageClick,
  onAllImagesLoaded,
  animateAll,
  onImageLoaded,
}) => {
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const allLoaded = loadedCount === images.length;

  const handleLoaded = useCallback(
    (src: string) => {
      setLoadedCount((c) => c + 1);
      onImageLoaded?.(src);
    },
    [onImageLoaded]
  );

  useEffect(() => {
    if (allLoaded) onAllImagesLoaded?.();
  }, [allLoaded, onAllImagesLoaded]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {images.map((url, index) => (
        <div
          key={url}
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
