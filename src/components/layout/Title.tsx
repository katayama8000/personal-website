import React, { FC } from 'react';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  description?: string;
  url?: string;
  pageUrl?: string;
};

export const Title: FC<Props> = ({ title, description, url, pageUrl }) => {
  const router = useRouter();
  const handleLinkClick = () => {
    if (url) {
      window.open(url);
    } else if (pageUrl) {
      router.push(pageUrl);
    }
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
