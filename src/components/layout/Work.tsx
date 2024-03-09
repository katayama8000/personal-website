import { FC } from 'react';
import { Button, Image, MantineSize } from '@mantine/core';
import { useMediaQuery } from 'src/lib/mantine';

type Props = {
  name: string;
  url?: string;
  img: string;
  technologies: { tech: string; color: string }[];
  description: string;
};

const handleWindowOpen = (url: string): void => {
  window.open(url);
};

export const Work: FC<Props> = ({ name, url, img, technologies, description }) => {
  const size: MantineSize = useMediaQuery('xs') ? 'sm' : 'xs';
  return (
    <div>
      <div className='py-2 text-xl font-semibold text-white'>{name}</div>
      <div className='py-3'>{description}</div>
      <Image
        src={img}
        alt={name}
        className={url && 'cursor-pointer shadow-md hover:opacity-60'}
        onClick={() => {
          if (url) handleWindowOpen(url);
        }}
        radius='md'
      />
      <div className='flex justify-end'>
        {technologies.map((tech, index) => {
          return (
            <div key={index}>
              <Button variant='outline' color={tech.color} size={size}>
                {tech.tech}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
