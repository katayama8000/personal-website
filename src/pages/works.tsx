import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { App } from "@component/layout/App";

const Works: NextPage = () => {
  return (
    <div className="px-4 py-14 sm:p-20">
      <Link href="/">
        <a className="text-5xl"> ← </a>
      </Link>
      <h1 className="py-10 text-3xl font-bold text-white">Works</h1>
      <App
        name="invoice"
        url="https://invoice-app-d6e30.web.app/"
        img="/img/work/invoice.png"
        technologies={[
          { tech: "Vue.js", color: "green" },
          { tech: "firebase", color: "yellow" },
        ]}
      />
      <App
        name="memory with music"
        url="https://memory-with-music.vercel.app/"
        img="/img/work/memorywithmusic.png"
        technologies={[
          { tech: "React.js", color: "default" },
          { tech: "Next.js", color: "gray" },
          { tech: "TypeScript", color: "indigo" },
          { tech: "supabase", color: "teal" },
        ]}
      />
    </div>
  );
};

export default Works;
