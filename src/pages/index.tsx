import type { NextPage } from "next";
import { Title } from "@component/layout/Title";
import Link from "next/link";

const handleWindowOpen = (url: string) => {
  window.open(url);
};

const Home: NextPage = () => {
  return (
    <div className="p-20">
      <header className="pb-10">
        <div className="h-[100px] w-[100px] rounded-full bg-green-600"></div>
        <div className="pt-10 text-3xl font-bold text-white">
          Tatsuhumi Katayama
        </div>
        <div className="pt-4 font-bold">
          I am a enginner based in Nagoya/japan.
        </div>
      </header>
      <hr className="py-10" />
      <Link href="about">
        <a>
          <Title title="About" description="Brief introduction about me" />
        </a>
      </Link>
      <Title
        title="Note"
        description="Anything blog"
        handleWindowOpen={() => handleWindowOpen("https://note.com/with_wife")}
      />
      <Title
        title="Qiita"
        description="Teck blog"
        handleWindowOpen={() =>
          handleWindowOpen("https://qiita.com/t_109609akg")
        }
      />
      <Link href="works">
        <a>
          <Title title="Works" description="What I have build" />
        </a>
      </Link>
      <Title
        title="Git hub"
        description="I try to write code everyday"
        handleWindowOpen={() =>
          handleWindowOpen("https://github.com/katayama8000")
        }
      />
      <Title
        title="My Comunity"
        description="I created a community on LINE"
        handleWindowOpen={() =>
          handleWindowOpen(
            "https://line.me/ti/g2/qe5B4jkfc1Uf1IxhB1DsgSD6-ez5aSAlGEEpTg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
          )
        }
      />

      <Title
        title="Contact"
        description="Contact me on Twitter"
        handleWindowOpen={() =>
          handleWindowOpen("https://twitter.com/uCrnP01w7Wp3atY")
        }
      />
    </div>
  );
};

export default Home;
