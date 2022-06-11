import { Image } from "@mantine/core";
import React from "react";

const about = () => {
  return (
    <div className="p-20">
      <h1 className="py-10 text-3xl font-bold text-white">About</h1>
      <div className="pb-5">I am a enginner based in Nagoya/japan.</div>
      <div>
        I have 1 years of enginnering experience in Nogoya.The programming
        languages I used at work are C and JavaScript.
        <br />
        Now, I am interested in TypeScript , Flutter and Design.
      </div>
      <h1 className="py-10 text-xl font-bold text-white">Outside of work</h1>
      <div className="pb-5">
        I got married two years ago. All I want is enjoying life with her.
        <br />
        (英語だと恥ずかしいこと言えるのなんでだろう？)
      </div>
      <div className="flex">
        <Image
          width={172}
          height={172}
          alt="with wife"
          src="https://c.files.bbci.co.uk/05C9/production/_123118410_opera.jpg"
          radius="lg"
          className="pr-8"
        />
        <Image
          width={172}
          height={172}
          alt="with wife"
          src="https://c.files.bbci.co.uk/05C9/production/_123118410_opera.jpg"
          radius="lg"
          className="pr-8"
        />
        <Image
          width={172}
          height={172}
          alt="with wife"
          src="https://c.files.bbci.co.uk/05C9/production/_123118410_opera.jpg"
          radius="lg"
          className="pr-8"
        />
        {/* <Image
          width={172}
          height={172}
          alt="with wife"
          src="https://c.files.bbci.co.uk/05C9/production/_123118410_opera.jpg"
          radius="lg"
        /> */}
      </div>
      {/* <Image src={"img/" + dog.name + ".jpg"} alt={dog.name} radius="md" /> */}
    </div>
  );
};

export default about;
