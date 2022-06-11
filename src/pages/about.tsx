/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { Grid, Image } from "@mantine/core";

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

const about = () => {
  return (
    <div className="px-20 py-10">
      <Link href="/">
        <a className="text-5xl"> ← </a>
      </Link>
      <h1 className="py-10 text-3xl font-bold text-white">About</h1>
      <div className="pb-5">I am a enginner based in Nagoya/japan.</div>
      <div>
        I have 1 years of enginnering experience in Nogoya. Programming
        languages I used at work are C and JavaScript.
        <br />
        Now, I am interested in TypeScript , Flutter and Design.
      </div>
      <h1 className="py-10 text-xl font-bold text-white">Outside of work</h1>
      <div className="pb-10">
        I got married two years ago. All I want is enjoying life with her.
        <br />
        This is her
        <a href="https://twitter.com/nimanimoney" className="pl-1 underline">
          Twitter account
        </a>
        . Now she is obsessed with investment.
        <br />
        We have a common hobby and that are music and movie. They brought us
        together.
      </div>
      <Grid grow>
        {images.map((url, index) => {
          return (
            <div key={index}>
              <Grid.Col span={3}>
                <Image
                  width={172}
                  height={172}
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
                  width={172}
                  height={172}
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

export default about;
