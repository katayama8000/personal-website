import type { NextPage } from "next";
import Link from "next/link";
import { Work } from "@component/layout/Work";

const Works: NextPage = () => {
  const WorkInfomationList = [
    {
      name: "Nftotaku",
      url: "https://nftotaku.xyz/",
      img: "/img/work/nft.png",
      technologies: [
        { tech: "React.js", color: "default" },
        { tech: "Next.js", color: "gray" },
        { tech: "TypeScript", color: "indigo" },
        { tech: "supabase", color: "teal" },
      ],
      description: "Welcome to our Nft world.",
    },
    {
      name: "invoice",
      url: "https://invoice-app-d6e30.web.app/",
      img: "/img/work/invoice.png",
      technologies: [
        { tech: "Vue.js", color: "green" },
        { tech: "firebase", color: "yellow" },
      ],

      description: "web invoice app.",
    },
    {
      name: "memory with music",
      url: "https://memory-with-music.vercel.app/",
      img: "/img/work/music.png",
      technologies: [
        { tech: "React.js", color: "default" },
        { tech: "Next.js", color: "gray" },
        { tech: "TypeScript", color: "indigo" },
        { tech: "supabase", color: "teal" },
      ],
      description: "music is good medicine.",
    },
    {
      name: "snake game react",
      url: "https://snake-game-react.vercel.app/",
      img: "/img/work/snake.png",
      technologies: [
        { tech: "React.js", color: "default" },
        { tech: "Next.js", color: "gray" },
        { tech: "TypeScript", color: "indigo" },
        { tech: "canvas", color: "red" },
      ],
      description: "This is the first game I made.",
    },
    {
      name: "Web-Expenses",
      url: "https://web-expenses-reactjs.vercel.app/",
      img: "/img/work/web.png",
      technologies: [
        { tech: "React.js", color: "default" },
        { tech: "Next.js", color: "gray" },
        { tech: "TypeScript", color: "indigo" },
        { tech: "supabase", color: "teal" },
      ],
      description:
        "This is not finished. I make this at another repository. Because My company use this app.",
    },
  ];
  return (
    <div className="px-4 py-14 sm:p-20">
      <Link href="/" className="text-5xl">
        {" "}
        ←{" "}
      </Link>
      <h1 className="py-10 text-3xl font-bold text-white">Works</h1>
      {WorkInfomationList.map((work) => {
        return (
          <Work
            key={work.name}
            name={work.name}
            url={work.url}
            img={work.img}
            technologies={work.technologies}
            description={work.description}
          />
        );
      })}
    </div>
  );
};

export default Works;
