import React from "react";
import Link from "next/link";
import Card from "@/components/Card";

const Workspace = () => {
  const characters = [
    {
      name: "The Doctor",
      img: "/",
      des: '"Now inhale deeply, Mrs.Saunders"',
      page: "/doctor",
    },
    {
      name: "The Lawyer",
      img: "/",
      des: '"The evidence speaks for itself"',
      page: "/lawyer",
    },
    {
      name: "The Engineer",
      img: "/",
      des: '"Run the test again"',
      page: "/engineer",
    },
    {
      name: "The Banker",
      img: "/",
      des: '"Let’s close the deal"',
      page: "/banker",
    },
  ];
  return (
    <div id="workspace" className="h-screen flex justify-center items-center">
      <div
        id="card-container"
        className="w-[640px] grid grid-cols-2 gap-8 mx-auto"
      >
        {characters.map((character, index) => (
          <Link href = {character.page} key = {index}>
            <Card
              key={index}
              name={character.name}
              img={character.img}
              des={character.des}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Workspace;
