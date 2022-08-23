import type { NextPage } from "next";
import Link from "next/link";
import { Work } from "@component/layout/Work";

const Works: NextPage = () => {
  return (
    <div className="px-4 py-14 sm:p-20">
      <Link href="/">
        <a className="text-5xl"> ← </a>
      </Link>
      <h1 className="py-10 text-3xl font-bold text-white">Works</h1>
      <Work
        name="invoice"
        url="https://invoice-app-d6e30.web.app/"
        img="/img/work/invoice.png"
        technologies={[
          { tech: "Vue.js", color: "green" },
          { tech: "firebase", color: "yellow" },
        ]}
        description="This app is for my family. My dad runs a small company. But He doesn't use this. Because He is japanse."
      />
      <Work
        name="memory with music"
        url="https://memory-with-music.vercel.app/"
        img="/img/work/memorywithmusic.png"
        technologies={[
          { tech: "React.js", color: "default" },
          { tech: "Next.js", color: "gray" },
          { tech: "TypeScript", color: "indigo" },
          { tech: "supabase", color: "teal" },
        ]}
        description="I develop this app nowdays. I will make this app SNS"
      />
      <Work
        name="snake game react"
        url="https://snake-game-react-pgp9dpqo3-katayama8000.vercel.app/"
        img="/img/work/snakegamereact.png"
        technologies={[
          { tech: "React.js", color: "default" },
          { tech: "Next.js", color: "gray" },
          { tech: "TypeScript", color: "indigo" },
          { tech: "canvas", color: "red" },
        ]}
        description="This is the first game I made. I wanna make this more complex."
      />
    </div>
  );
};

export default Works;
