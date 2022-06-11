import type { NextPage } from "next";
import { Title } from "@component/layout/Title";

const Home: NextPage = () => {
  const handleWindowOpen = (url: string) => {
    window.open(url);
  };

  return (
    <div className="p-20">
      <header className="pb-10">
        <div className="h-[100px] w-[100px] rounded-full bg-green-600"></div>
        <div className="pt-10 text-3xl font-bold text-white">
          tatsuhumi katayama
        </div>
        <div className="pt-4 font-bold">I am a enginner based in japan.</div>
      </header>
      <hr className="py-10" />
      <Title title="About" description="Brief introduction about me" />
      <div
        className="cursor-pointer"
        onClick={() => handleWindowOpen("https://note.com/with_wife")}
      >
        <Title title="Note" description="anything blog" />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => handleWindowOpen("https://qiita.com/t_109609akg")}
      >
        <Title title="Qiita" description="Teck blog" />
      </div>
      <Title title="works" description="What I have build" />
      <div
        className="cursor-pointer"
        onClick={() => handleWindowOpen("https://github.com/katayama8000")}
      >
        <Title title="git hub" description="I try to write code everyday" />
      </div>
    </div>
  );
};

export default Home;
