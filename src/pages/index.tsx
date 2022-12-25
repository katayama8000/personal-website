import type { NextPage } from "next";
import { Title } from "@component/layout/Title";

const TitleInfomationList = [
  {
    title: "About",
    description: "Brief introduction about me",
    pageUrl: "about",
  },
  {
    title: "Note",
    description: "Anything blog",
    url: "https://note.com/with_wife",
  },
  {
    title: "Qiita",
    description: "Teck blog",
    url: "https://qiita.com/t_109609akg",
  },
  {
    title: "Zenn",
    description: "Teck blog",
    url: "https://zenn.dev/tattu",
  },
  {
    title: "Works",
    description: "What I have build",
    pageUrl: "works",
  },
  {
    title: "Git hub",
    description: "I try to write code everyday",
    url: "https://github.com/katayama8000",
  },
  {
    title: "My Comunity",
    description: "I created a community on LINE",
    url: "https://line.me/ti/g2/qe5B4jkfc1Uf1IxhB1DsgSD6-ez5aSAlGEEpTg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
  },
  {
    title: "Contact",
    description: "Contact me on Twitter",
    url: "https://twitter.com/IT_gorilla_",
  },
];
const Home: NextPage = () => {
  return (
    <div className="px-4 py-14 sm:p-20">
      <header className="pb-10">
        <div className="h-[100px] w-[100px] rounded-full bg-green-600"></div>
        <div className="pt-10 text-3xl font-bold text-white">
          Tatsuhumi Katayama
        </div>
        <div className="pt-4 font-bold">
          I am a engineer based in Nagoya/Japan.
        </div>
      </header>
      <hr className="py-10" />
      {TitleInfomationList.map((titleInfomation) => (
        <Title
          key={titleInfomation.title}
          title={titleInfomation.title}
          description={titleInfomation.description}
          url={titleInfomation.url}
          pageUrl={titleInfomation.pageUrl}
        />
      ))}
    </div>
  );
};

export default Home;
