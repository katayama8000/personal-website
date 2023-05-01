import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Grid, Image } from '@mantine/core';
import { useMediaQuery } from 'src/lib/mantine';
import { NextPage } from 'next/types';
import Head from 'next/head';

const IMAGES = [
  'img/music/harukamirai.png',
  'img/music/bluehearts.png',
  'img/music/kururi.png',
  'img/music/asikan.png',
  'img/movie/fightclub.png',
  'img/movie/greenbook.png',
  'img/movie/joker.png',
  'img/movie/goodwillhunting.png',
] as const;

const AUSTRALIA = [
  'img/australia/AUS1.png',
  'img/australia/AUS2.png',
  'img/australia/AUS3.png',
  'img/australia/AUS4.png',
] as const;

const About: NextPage = () => {
  const largerThanXs = useMediaQuery('xs');
  const [imageSize, setImageSize] = useState(172);
  useEffect(() => {
    if (!largerThanXs) {
      setImageSize(152);
    }
  }, [largerThanXs]);
  return (
    <>
      <Head>
        <title>this is about me</title>
      </Head>
      <div className='px-2 py-14  sm:p-20'>
        <Link href='/' className='text-5xl'>
          ←
        </Link>
        <h1 className='py-10 text-3xl font-bold text-white'>About</h1>
        <div>
          I am an engineer based in Nagoya, Japan with two years of engineering experience. The programming languages I
          have used at work include C, JavaScript, and TypeScript.
          <br />
          Additionally, I have experience with various frameworks and libraries such as React.js, Vue.js, and Angular.
        </div>
        <h1 className='py-10 text-xl font-bold text-white'>Outside of work</h1>
        <div className='pb-10'>
          I got married two years ago, and all I want is to enjoy life with my wife. She has gained many followers on
          <span
            onClick={() => {
              window.open('https://twitter.com/nimanimoney');
            }}
            className='cursor-pointer px-1 underline'
          >
            Twitter
          </span>
          due to her attractive personality.
          <br />
          We both love music and movies, which brought us together.
        </div>
        <Grid grow>
          {IMAGES.map((url) => {
            return (
              <Grid.Col span={3} key={url}>
                <Image
                  width={imageSize}
                  height={imageSize}
                  alt='with wife'
                  src={url}
                  radius='lg'
                  withPlaceholder
                  className='cursor-pointer'
                />
              </Grid.Col>
            );
          })}
        </Grid>
        <div className='pt-20 pb-10'>
          After graduating from high school, I lived in Australia and now I would like to visit the country again.
        </div>
        <Grid grow>
          {AUSTRALIA.map((url) => {
            return (
              <Grid.Col span={3} key={url}>
                <Image
                  width={imageSize}
                  height={imageSize}
                  alt='with wife'
                  src={url}
                  radius='lg'
                  withPlaceholder
                  className='cursor-pointer'
                />
              </Grid.Col>
            );
          })}
        </Grid>
        <h1 className='pt-20 text-xl font-bold text-white'>Contact</h1>
        <div className='pt-5'>Contact me at tattu.0310@gmail.com.</div>
      </div>
    </>
  );
};

export default About;
