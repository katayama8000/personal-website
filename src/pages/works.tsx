import type { NextPage } from 'next';
import Link from 'next/link';
import { Work } from '@component/layout/Work';
import Head from 'next/head';
import { Box } from '@mantine/core';

const WORK_INFOMATION_LIST = [
  {
    name: 'Nftotaku',
    url: 'https://nftotaku.xyz/',
    img: '/img/work/nft.png',
    technologies: [
      { tech: 'React.js', color: 'default' },
      { tech: 'Next.js', color: 'gray' },
      { tech: 'TypeScript', color: 'indigo' },
      { tech: 'supabase', color: 'teal' },
    ],
    description: 'Welcome to our Nft world.',
  },
  {
    name: 'invoice',
    url: 'https://invoice-app-d6e30.web.app/',
    img: '/img/work/invoice.png',
    technologies: [
      { tech: 'Vue.js', color: 'green' },
      { tech: 'firebase', color: 'yellow' },
    ],

    description: 'web invoice app.',
  },
  {
    name: 'memory with music',
    url: 'https://memory-with-music.vercel.app/',
    img: '/img/work/music.png',
    technologies: [
      { tech: 'React.js', color: 'default' },
      { tech: 'Next.js', color: 'gray' },
      { tech: 'TypeScript', color: 'indigo' },
      { tech: 'supabase', color: 'teal' },
    ],
    description: 'music is good medicine.',
  },
  {
    name: 'snake game react',
    url: 'https://snake-game-react-lilac.vercel.app/',
    img: '/img/work/snake.png',
    technologies: [
      { tech: 'React.js', color: 'default' },
      { tech: 'Next.js', color: 'gray' },
      { tech: 'TypeScript', color: 'indigo' },
      { tech: 'canvas', color: 'red' },
    ],
    description: 'This is the first game I made.',
  },
  {
    name: 'Web-Expenses',
    url: 'https://web-expenses-reactjs.vercel.app/',
    img: '/img/work/web.png',
    technologies: [
      { tech: 'React.js', color: 'default' },
      { tech: 'Next.js', color: 'gray' },
      { tech: 'TypeScript', color: 'indigo' },
      { tech: 'supabase', color: 'teal' },
    ],
    description: 'This is not finished. I make this at another repository. Because My company use this app.',
  },
  {
    name: 'expo-push-notification-client-rust',
    url: 'https://github.com/katayama8000/expo-push-notification-client-rust',
    technologies: [
      { tech: 'Rust', color: 'orange' },
      { tech: 'expo', color: 'pink' },
    ],
    description:
      'expo push notification client for rust. There is no official client for expo push notification. So I made it.',
  },
];

const Works: NextPage = () => {
  return (
    <>
      <Head>
        <title>works</title>
      </Head>
      <div className='px-4 py-14 sm:p-20'>
        <Link href='/' className='text-5xl'>
          {' '}
          ←{' '}
        </Link>
        <h1 className='py-10 text-3xl font-bold text-white'>Works</h1>
        {WORK_INFOMATION_LIST.map(({ name, url, img, technologies, description }) => {
          return (
            <Box my={20}>
              <Work key={name} name={name} url={url} img={img} technologies={technologies} description={description} />
            </Box>
          );
        })}
      </div>
    </>
  );
};

export default Works;
