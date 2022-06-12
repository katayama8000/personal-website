import { Image } from "@mantine/core";
import React from "react";
import { Button } from "src/lib/mantine";

type Props = {
  name: string;
  url: string;
  img: string;
  technologies: { tech: string; color: string }[];
};

const handleWindowOpen = (url: string) => {
  window.open(url);
};

export const App: React.FC<Props> = ({ name, url, img, technologies }) => {
  return (
    <div>
      <div className="py-2 text-xl font-semibold text-white">{name}</div>
      <Image
        src={img}
        alt={name}
        className="border-2 border-solid border-gray-500 hover:opacity-60"
        onClick={() => handleWindowOpen(url)}
      />
      <div className="flex justify-end">
        {technologies.map((tech, index) => {
          return (
            <div key={index}>
              <Button variant="outline" color={tech.color}>
                {tech.tech}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
