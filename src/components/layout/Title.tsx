import React from "react";

type Props = {
  title: string;
  description?: string;
};

export const Title: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <div className="py-4">
        <div className="text-3xl font-bold text-white">{title}</div>
        <div className="py-2">{description}</div>
      </div>
    </div>
  );
};
