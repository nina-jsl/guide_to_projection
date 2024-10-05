import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      id="intro"
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <div id="text-container" className="text-center mb-8">
        <h1 className="text-xl">A Guide to Projection</h1>
        <p className="text-sm">in a world of masks</p>
      </div>
      <div>
        <Link href="/workspace">
        <button
          className="text-sm text-black hover:text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-200"
        >
          Start
        </button>
        </Link>
      </div>
    </div>
  );
}
