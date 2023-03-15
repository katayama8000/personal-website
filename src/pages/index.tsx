import type { NextPage } from 'next';
import Image from 'next/image';
import { Title } from '@component/layout/Title';
import { RingProgress } from '@mantine/core';

const TITLE_INFOMATION_LIST = [
  {
    title: 'About',
    description: 'Brief introduction about me',
    pageUrl: 'about',
  },
  {
    title: 'GohanDAO',
    description: 'I created a DAO on discord',
    url: 'https://discord.com/invite/CCwTrB2k6r',
  },
  {
    title: 'Line Community',
    description: 'I created a React community on LINE',
    url: 'https://line.me/ti/g2/qe5B4jkfc1Uf1IxhB1DsgSD6-ez5aSAlGEEpTg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default',
  },
  // {
  //   title: 'Qiita',
  //   description: 'Teck blog',
  //   url: 'https://qiita.com/t_109609akg',
  // },
  {
    title: 'Zenn',
    description: 'Teck blog',
    url: 'https://zenn.dev/tattu',
  },
  {
    title: 'Note',
    description: 'Anything blog',
    url: 'https://note.com/with_wife',
  },
  {
    title: 'FamilyBlog',
    description: 'My family blog',
    url: 'https://nimanimoney.com',
  },
  {
    title: 'Works',
    description: 'What I have build',
    pageUrl: 'works',
  },
  {
    title: 'Git hub',
    description: 'I try to write code everyday',
    url: 'https://github.com/katayama8000',
  },
  {
    title: 'Contact',
    description: 'Contact me on Twitter',
    url: 'https://twitter.com/katayama8000',
  },
];

const Home: NextPage = () => {
  return (
    <div className="px-4 py-14 sm:p-20">
      <header className="pb-10">
        <RingProgress
          sections={[{ value: 100, color: 'cyan' }]}
          size={180}
          label={
            <Image
              src={`/img/icon/icon0.png`}
              alt="Picture of the author"
              width={150}
              height={150}
              className="animate-rotate-center rounded-full"
            />
          }
        />
        <div className="pt-10 text-3xl font-bold text-white">
          Tatsuhumi Katayama
        </div>
        <div className="pt-4 font-bold">
          I am a engineer based in Nagoya/Japan.
        </div>
      </header>
      <hr className="py-10" />
      {TITLE_INFOMATION_LIST.map(({ title, description, url, pageUrl }) => (
        <Title
          key={title}
          title={title}
          description={description}
          url={url}
          pageUrl={pageUrl}
        />
      ))}
    </div>
  );
};

export default Home;
