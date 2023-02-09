import { useEffect, useState } from "react";
import Link from "next/link";
import { Grid, Image } from "@mantine/core";
import { useMediaQuery } from "src/lib/mantine";
import { NextPage } from "next/types";

const IMAGES = [
  "img/music/harukamirai.png",
  "img/music/bluehearts.png",
  "img/music/kururi.png",
  "img/music/asikan.png",
  "img/movie/fightclub.png",
  "img/movie/greenbook.png",
  "img/movie/joker.png",
  "img/movie/goodwillhunting.png",
] as const;

const AUSTRALIA = [
  "img/australia/AUS1.png",
  "img/australia/AUS2.png",
  "img/australia/AUS3.png",
  "img/australia/AUS4.png",
] as const;

const About: NextPage = () => {
  const largerThanXs = useMediaQuery("xs");
  const [imageSize, setImageSize] = useState(172);
  useEffect(() => {
    if (!largerThanXs) {
      setImageSize(152);
    }
  }, [largerThanXs]);
  return (
    <div className="px-2 py-14  sm:p-20">
      <Link href="/" className="text-5xl">
        {" "}
        ←{" "}
      </Link>
      <h1 className="py-10 text-3xl font-bold text-white">About</h1>
      <div className="pb-5"> I am a engineer based in Nagoya/Japan.</div>
      <div>
        I have two years of enginnering experience in Nogoya. Programming
        languages I used at work are C, JavaScript, Typescript.
        <br />
        Fremework and libraries I used are React.js, Vue.js, Angular etc... .
      </div>
      <h1 className="py-10 text-xl font-bold text-white">Outside of work</h1>
      <div className="pb-10">
        I got married two years ago. All I want is enjoying life with her.
        <br />
        This is her
        <span
          onClick={() => {
            window.open("https://twitter.com/nimanimoney");
          }}
          className="cursor-pointer pl-1 underline"
        >
          Twitter account
        </span>
        . Now she has may followers. Bcause She is attractive.
        <br />
        We love music and movie. They brought us together.
      </div>
      <Grid grow>
        {IMAGES.map((url) => {
          return (
            <div key={url}>
              <Grid.Col sm={6}>
                <Image
                  width={imageSize}
                  height={imageSize}
                  alt="with wife"
                  src={url}
                  radius="lg"
                  withPlaceholder
                  className="cursor-pointer"
                />
              </Grid.Col>
            </div>
          );
        })}
      </Grid>
      <div className="pt-20 pb-10">
        I lived in Australia after I graduated from high school.
        <br />I would like to visit Australia again.
      </div>
      <Grid grow>
        {AUSTRALIA.map((url) => {
          return (
            <div key={url}>
              <Grid.Col span={3}>
                <Image
                  width={imageSize}
                  height={imageSize}
                  alt="with wife"
                  src={url}
                  radius="lg"
                  withPlaceholder
                  className="cursor-pointer"
                />
              </Grid.Col>
            </div>
          );
        })}
      </Grid>
      <h1 className="pt-20 text-xl font-bold text-white">Contact</h1>
      <div className="pt-5">Contact me at tattu.0310@gmail.com.</div>
    </div>
  );
};

export default About;
