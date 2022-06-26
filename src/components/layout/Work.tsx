import React, { useEffect, useState } from "react";
import { Image, MantineSize } from "@mantine/core";
import { Button, useMediaQuery } from "src/lib/mantine";

type Props = {
  name: string;
  url: string;
  img: string;
  technologies: { tech: string; color: string }[];
  description: string;
};

const handleWindowOpen = (url: string) => {
  window.open(url);
};

export const Work: React.FC<Props> = ({
  name,
  url,
  img,
  technologies,
  description,
}) => {
  const largerThanXs = useMediaQuery("xs");
  const [buttonSize, setButtonSize] = useState<MantineSize | undefined>("sm");
  useEffect(() => {
    if (!largerThanXs) {
      setButtonSize("xs");
    }
  }, [largerThanXs]);
  return (
    <div>
      <div className="py-2 text-xl font-semibold text-white">{name}</div>
      <div className="py-3">{description}</div>
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
              <Button variant="outline" color={tech.color} size={buttonSize}>
                {tech.tech}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
