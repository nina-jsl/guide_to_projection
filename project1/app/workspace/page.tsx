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
      page: "/workspace/doctor/layer1",
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
    <div id="workspace" className="h-screen flex justify-center items-center">
      {/* Render the Popup if showPopup is true */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

      {/* Main Content */}
      <div
        id="card-container"
        className="w-[640px] grid grid-cols-2 gap-8 mx-auto"
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
