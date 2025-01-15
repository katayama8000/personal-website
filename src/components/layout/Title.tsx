import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  description?: string;
  url?: string;
  pageUrl?: string;
};

export const Title: FC<Props> = ({ title, description, url, pageUrl }) => {
  const { push } = useRouter();
  const handleLinkClick = () => {
    url ? window.open(url) : pageUrl ? push(pageUrl) : null;
  };
  return (
    <article className='py-4'>
      <span className='cursor-pointer text-3xl font-bold text-white hover:underline' onClick={handleLinkClick}>
        {title}
      </span>
      <div className='py-2'>{description}</div>
    </article>
  );
};
