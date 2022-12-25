import React from "react";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description?: string;
  url?: string;
  pageUrl?: string;
};

export const Title: React.FC<Props> = ({
  title,
  description,
  url,
  pageUrl,
}) => {
  const router = useRouter();
  const handleWindowOpen = (url: string) => {
    window.open(url);
  };

  const changePage = (pageUrl: string) => {
    router.push(pageUrl);
  };
  return (
    <div>
      <article className="py-4">
        <span
          className="cursor-pointer text-3xl font-bold text-white hover:underline"
          onClick={() => {
            if (url) {
              handleWindowOpen(url);
            } else if (pageUrl) {
              changePage(pageUrl);
            }
          }}
        >
          {title}
        </span>
        <div className="py-2">{description}</div>
      </article>
    </div>
  );
};
