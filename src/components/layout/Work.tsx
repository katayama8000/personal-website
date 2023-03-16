import { FC, useEffect, useState } from 'react';
import { Button, Image, MantineSize } from '@mantine/core';
import { useMediaQuery } from 'src/lib/mantine';

type Props = {
  name: string;
  url: string;
  img: string;
  technologies: { tech: string; color: string }[];
  description: string;
};

const handleWindowOpen = (url: string) => {
  window.open(url);
};

export const Work: FC<Props> = ({
  name,
  url,
  img,
  technologies,
  description,
}) => {
  const largerThanXs = useMediaQuery('xs');
  const size: MantineSize = largerThanXs ? 'sm' : 'xs';
  return (
    <div>
      <div className="py-2 text-xl font-semibold text-white">{name}</div>
      <div className="py-3">{description}</div>
      <Image
        src={img}
        alt={name}
        className="cursor-pointer shadow-md hover:opacity-60"
        onClick={() => handleWindowOpen(url)}
        radius="md"
        withPlaceholder
      />
      <div className="flex justify-end">
        {technologies.map((tech, index) => {
          return (
            <div key={index}>
              <Button variant="outline" color={tech.color} size={size}>
                {tech.tech}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
