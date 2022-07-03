import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const qualification: NextPage = () => {
  return (
    <div className="px-4 py-14 sm:p-20">
      <Link href="/">
        <a className="text-5xl"> ← </a>
      </Link>
    </div>
  );
};

export default qualification;
