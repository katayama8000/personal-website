import type { NextPage } from "next";
import { Title } from "@component/layout/Title";
import Link from "next/link";
import { Image } from "@mantine/core";
import { useMediaQuery } from "src/lib/mantine";

const handleWindowOpen = (url: string) => {
  window.open(url);
};

const Home: NextPage = () => {
  const isPhoneSize = useMediaQuery("xs");
  console.log(isPhoneSize);
  return (
    <div className="p-20 px-4 py-2 pt-20">
      <header className="pb-10 sm:flex sm:justify-between">
        {isPhoneSize || (
          <div className="h-[100px] w-[100px] rounded-full bg-green-600"></div>
        )}
        <div>
          <div className="pt-10 text-3xl font-bold text-white">
            Tatsuhumi Katayama
          </div>
          <div className="pt-4 font-bold">
            I am a engineer based in Nagoya/Japan.
          </div>
        </div>
        {isPhoneSize && (
          <Image
            // src="data:image/jpeg;base64,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"
            alt="gollira"
            src="https://storage.googleapis.com/ttrinity/_img/product/15/15667/1417270/design_img_f_1417270_s.png"
            width="120px"
          />
        )}
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
      <Title
        title="Zenn"
        description="Teck blog"
        handleWindowOpen={() => handleWindowOpen("https://zenn.dev/tattu")}
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
      {/* <Link href="qualification">
        <a>
          <Title
            title="Qualification"
            description="Those are my Qualification"
          />
        </a>
      </Link> */}
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
          handleWindowOpen("https://twitter.com/IT_gorilla_")
        }
      />
    </div>
  );
};

export default Home;
