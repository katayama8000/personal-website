import { FC, useEffect, useState } from "react";
import { Button, Image, MantineSize } from "@mantine/core";
import { useMediaQuery } from "src/lib/mantine";

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

export const Work: FC<Props> = ({
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
        className="cursor-pointer shadow-md hover:opacity-60"
        onClick={() => handleWindowOpen(url)}
        radius="md"
        withPlaceholder
      />
      <div className="flex justify-end">
        {technologies.map((tech, index) => {
          return (
            <div key={index}>
              {/* <Avatar src="img/stack/vue.png" alt="it's me" /> */}
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
