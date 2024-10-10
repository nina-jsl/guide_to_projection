"use client";
import React, { useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import Popup from "@/components/Popup";


const Workspace = () => {
  // State to control whether the popup is shown or hidden
  const [showPopup, setShowPopup] = useState(true);

  const characters = [
    {
      name: "The Doctor",
      img: "/doctor.jpg",
      des: '"Now inhale deeply, Mrs.Saunders"',
      page: "/Doctor",
    },
    {
      name: "The Lawyer",
      img: "/lawyer.jpg",
      des: '"The evidence speaks for itself"',
      page: "/workspace/lawyer/layer1",
    },
    {
      name: "The Engineer",
      img: "/engineer.jpg",
      des: '"Run the test again"',
      page: "/workspace/engineer/layer1",
    },
    {
      name: "The Banker",
      img: "/banker.jpg",
      des: '"Let’s close the deal"',
      page: "/workspace/banker/layer1",
    },
  ];

  return (
    <div id="workspace" className="min-h-screen flex flex-col justify-center items-center p-4">
      {/* Render the Popup if showPopup is true */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

      {/* Main Content */}
      <div
        id="card-container"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[640px] mx-auto justify-items-center"
      >
        {characters.map((character, index) => (
          <Link href={character.page} key={index}>
            <Card
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

