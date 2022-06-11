import React from "react";

type Props = {
  title: string;
  description?: string;
  handleWindowOpen?: (url: string) => void;
};

export const Title: React.FC<Props> = ({
  title,
  description,
  handleWindowOpen,
}) => {
  return (
    <div>
      <div className="py-4">
        <span
          className="cursor-pointer text-3xl font-bold text-white hover:underline"
          onClick={() => {
            if (handleWindowOpen) {
              handleWindowOpen!("https://note.com/with_wife");
            }
          }}
        >
          {title}
        </span>
        <div className="py-2">{description}</div>
      </div>
    </div>
  );
};
