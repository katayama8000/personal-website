/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Grid, Image } from "@mantine/core";
import { useMediaQuery } from "src/lib/mantine";

const images = [
  "img/music/harukamirai.png",
  "img/music/bluehearts.png",
  "img/music/kururi.png",
  "img/music/asikan.png",
  "img/movie/fightclub.png",
  "img/movie/greenbook.png",
  "img/movie/joker.png",
  "img/movie/goodwillhunting.png",
];

const australia = [
  "img/australia/AUS1.png",
  "img/australia/AUS2.png",
  "img/australia/AUS3.png",
  "img/australia/AUS4.png",
];

const About = () => {
  const largerThanXs = useMediaQuery("xs");
  const [imageSize, setImageSize] = useState(172);
  useEffect(() => {
    if (!largerThanXs) {
      setImageSize(152);
    }
  }, [largerThanXs]);
  return (
    <div className="px-4 py-14 sm:p-20">
      <Link href="/">
        <a className="text-5xl"> ← </a>
      </Link>
      <h1 className="py-10 text-3xl font-bold text-white">About</h1>
      <div className="pb-5"> I am a engineer based in Nagoya/Japan.</div>
      <div>
        I have a year of enginnering experience in Nogoya. Programming languages
        I used at work are C and JavaScript.
        <br />
        Now, I am interested in TypeScript , Flutter and Design.
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
        . Now she is obsessed with investment.
        <br />
        We love music and movie. They brought us together.
      </div>
      <Grid grow>
        {images.map((url, index) => {
          return (
            <div key={index}>
              <Grid.Col sm={6}>
                <Image
                  width={imageSize}
                  height={imageSize}
                  alt="with wife"
                  src={url}
                  radius="lg"
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
        {australia.map((url, index) => {
          return (
            <div key={index}>
              <Grid.Col span={3}>
                <Image
                  width={imageSize}
                  height={imageSize}
                  alt="with wife"
                  src={url}
                  radius="lg"
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
