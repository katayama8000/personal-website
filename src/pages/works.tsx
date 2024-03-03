import type { NextPage } from 'next';
import Link from 'next/link';
import { Work } from '@component/layout/Work';
import Head from 'next/head';
import { Box } from '@mantine/core';

const WORK_INFORMATION_LIST = [
  {
    name: 'Nftotaku',
    url: 'https://nftotaku.xyz/',
    img: '/img/work/nft.png',
    technologies: [
      { tech: 'React.js', color: 'indigo' },
      { tech: 'Next.js', color: 'gray' },
      { tech: 'TypeScript', color: 'violet' },
      { tech: 'supabase', color: 'teal' },
    ],
    description: 'Welcome to our NFT world.',
  },
  {
    name: 'Invoice',
    url: 'https://invoice-app-d6e30.web.app/',
    img: '/img/work/invoice.png',
    technologies: [
      { tech: 'Vue.js', color: 'green' },
      { tech: 'Firebase', color: 'yellow' },
    ],
    description: 'A web-based invoice application.',
  },
  {
    name: 'Memory with Music',
    url: 'https://memory-with-music.vercel.app/',
    img: '/img/work/music.png',
    technologies: [
      { tech: 'React.js', color: 'indigo' },
      { tech: 'Next.js', color: 'gray' },
      { tech: 'TypeScript', color: 'violet' },
      { tech: 'supabase', color: 'teal' },
    ],
    description: 'Music is good medicine.',
  },
  {
    name: 'Snake Game React',
    url: 'https://snake-game-react-lilac.vercel.app/',
    img: '/img/work/snake.png',
    technologies: [
      { tech: 'React.js', color: 'indigo' },
      { tech: 'Next.js', color: 'gray' },
      { tech: 'TypeScript', color: 'violet' },
      { tech: 'Canvas', color: 'red' },
    ],
    description: 'This is the first game I created.',
  },
  {
    name: 'Web-Expenses',
    url: 'https://web-expenses-reactjs.vercel.app/',
    img: '/img/work/web.png',
    technologies: [
      { tech: 'React.js', color: 'indigo' },
      { tech: 'Next.js', color: 'gray' },
      { tech: 'TypeScript', color: 'violet' },
      { tech: 'supabase', color: 'teal' },
    ],
    description:
      'This project is still in progress. I developed it in another repository because my company uses this app.',
  },
  {
    name: 'Expo Push Notification Client Rust',
    url: 'https://github.com/katayama8000/expo-push-notification-client-rust',
    technologies: [
      { tech: 'Rust', color: 'orange' },
      { tech: 'Expo', color: 'pink' },
    ],
    description:
      'Expo push notification client for Rust. This client is officially recognized by Expo and listed in their official documentation.',
  },
];

const Works: NextPage = () => {
  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      <div className='px-4 py-14 sm:p-20'>
        <Link href='/' className='text-5xl'>
          ←
        </Link>
        <h1 className='py-10 text-3xl font-bold text-white'>Works</h1>
        {WORK_INFORMATION_LIST.map(({ name, url, img, technologies, description }) => (
          <Box my={20} key={url}>
            <Work name={name} url={url} img={img} technologies={technologies} description={description} />
          </Box>
        ))}
      </div>
    </>
  );
};

export default Works;
