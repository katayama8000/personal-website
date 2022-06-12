import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Chip, Image } from "@mantine/core";
import { Button } from "src/lib/mantine";

const handleWindowOpen = (url: string) => {
  window.open(url);
};

const works: NextPage = () => {
  return (
    <div className="px-20 py-10">
      <Link href="/">
        <a className="text-5xl"> ← </a>
      </Link>
      <h1 className="py-10 text-3xl font-bold text-white">Works</h1>
      <div
        onClick={() => handleWindowOpen("https://invoice-app-d6e30.web.app/")}
        className="py-2 text-xl font-semibold text-white"
      >
        invoice
      </div>
      <Image
        src="/img/work/invoice.png"
        alt={"invoice"}
        className="border-2 border-solid border-gray-500"
      />
      <div className="flex justify-end">
        <Button variant="outline" color="green">
          Vue.js
        </Button>
        <Button variant="outline" color="yellow">
          firebase
        </Button>
      </div>
      <div
        onClick={() =>
          handleWindowOpen("https://memory-with-music.vercel.app/")
        }
        className="py-2 text-xl font-semibold text-white"
      >
        memory with music
      </div>
      <Image
        src="/img/work/memorywithmusic.png"
        alt={"memorywithmusic"}
        className="border-2 border-solid border-gray-500"
      />
      <div className="flex justify-end">
        <Button variant="outline">React.js</Button>
        <Button variant="outline" color="gray">
          Next.js
        </Button>
        <Button variant="outline" color="indigo">
          TypeScript
        </Button>
        <Button variant="outline" color="teal">
          supabase
        </Button>
      </div>
    </div>
  );
};

export default works;
