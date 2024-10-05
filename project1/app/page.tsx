import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div
      id="intro"
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <div id="text-container" className="text-center mb-8">
        <h1 className="text-2xl">A Guide to Projection</h1>
        <p className="text-base">in a world of masks</p>
      </div>
      <div>
        <Link href="/workspace">
          <Button text="Start" />
        </Link>
      </div>
    </div>
  );
}
