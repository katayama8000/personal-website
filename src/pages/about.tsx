import Link from 'next/link';
import { Container, Image, Text, Title, SimpleGrid } from '@mantine/core';
import { NextPage } from 'next/types';
import Head from 'next/head';
import dayjs from 'dayjs';

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

const AUSTRALIA_IMAGES = [
  'img/australia/AUS1.png',
  'img/australia/AUS2.png',
  'img/australia/AUS3.png',
  'img/australia/AUS4.png',
] as const;

const About: NextPage = () => {
  const marriageDate = dayjs('2020-12-1');
  const startDateOfWork = dayjs('2021-4-1');
  const currentDate = dayjs();

  const yearsOfWorkExperience = Math.round(currentDate.diff(startDateOfWork, 'year', true));
  const yearsSinceMarriage = Math.round(currentDate.diff(marriageDate, 'year', true));

  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Container className='px-2 py-14 sm:p-20'>
        <Link href='/' className='text-5xl'>
          ←
        </Link>
        <Title order={1} my={30} size={30}>
          About
        </Title>
        <Text>
          I'm an engineer based in Nagoya, Japan, with {yearsOfWorkExperience} years of professional experience. My work
          involves using various programming languages such as C, JavaScript, TypeScript, and I'm currently interested
          in Rust.
        </Text>
        <Title order={2} my={30} size={24}>
          Outside of Work
        </Title>
        <Text className='pb-10'>
          I got married {yearsSinceMarriage} years ago, and my main focus is to enjoy life with my wife. She has
          attracted a significant following on{' '}
          <span
            onClick={() => {
              window.open('https://twitter.com/nimanimoney');
            }}
            className='cursor-pointer px-1 underline'
          >
            Twitter
          </span>
          because of her captivating personality.
          <br />
          We both share a passion for music and movies, which played a significant role in bringing us together.
        </Text>
        <SimpleGrid cols={{ base: 2, xs: 3, sm: 4 }} verticalSpacing='lg'>
          {IMAGES.map((url) => (
            <div key={url}>
              <Image radius='lg' w={180} h={180} alt='' src={url} />
            </div>
          ))}
        </SimpleGrid>
        <Text mt={80} mb={40}>
          After finishing high school, I lived in Australia, and now I'm eager to revisit the country.
        </Text>
        <SimpleGrid cols={{ base: 2, xs: 3, sm: 4 }}>
          {AUSTRALIA_IMAGES.map((url) => (
            <div key={url}>
              <Image w={180} h={180} alt='' src={url} radius='lg' />
            </div>
          ))}
        </SimpleGrid>
        <Title order={2} mt={40} size={24}>
          Contact
        </Title>
        <Text mt={4}>Feel free to contact me at tattu.0310@gmail.com.</Text>
      </Container>
    </>
  );
};

export default About;
