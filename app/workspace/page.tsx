"use client";
import React, { useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import Popup from "@/components/Popup";
import { FaLock } from "react-icons/fa";

const Workspace = () => {
  // State to control whether the popup is shown or hidden
  const [showPopup, setShowPopup] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const characters = [
    {
      name: "The Doctor",
      img: "/doctor.jpg",
      des: '"Now inhale deeply, Mrs.Saunders"',
      page: "/Doctor",
      locked: false,
    },
    {
      name: "The Lawyer",
      img: "/lawyer.jpg",
      des: '"The evidence speaks for itself"',
      page: "/workspace/lawyer/layer1",
      locked: true,
    },
    {
      name: "The Engineer",
      img: "/engineer.jpg",
      des: '"Run the test again"',
      page: "/workspace/engineer/layer1",
      locked: true,
    },
    {
      name: "The Banker",
      img: "/banker.jpg",
      des: '"Let’s close the deal"',
      page: "/workspace/banker/layer1",
      locked: true,
    },
  ];

  const handleCardClick = (locked: boolean) => {
    if (locked) {
      setShowAlert(true);
    }
  };

  return (
    <div
      id="workspace"
      className="min-h-screen flex flex-col justify-center items-center p-4"
    >
      {/* Render the Popup if showPopup is true */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      {showAlert && (
        <div
          onClick={() => setShowAlert(false)} // Close alert when clicking on the overlay
          className="absolute w-screen h-screen flex justify-center items-center bg-black bg-opacity-40 z-10"
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the popup
            className="w-[30%] h-[35%] bg-white rounded-md p-4 text-center"
          >
            <div className="w-full h-full flex justify-center items-center bg-transparent">
              <div>
                <h2 className="text-lg font-bold bg-transparent">
                  Chapter Locked
                </h2>
                <p className="mt-2 bg-transparent">
                  This chapter is currently locked. Please try again later.
                </p>
                <button
                  onClick={() => setShowAlert(false)} // Close button inside the popup
                  className="mt-10 hover:bg-blue "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Main Content */}
      <div
        id="card-container"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[640px] mx-auto justify-items-center"
      >
        {characters.map((character, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(character.locked)} // Handle click for locked cards
            className={`relative ${
              character.locked ? "cursor-not-allowed opacity-60" : ""
            }`} // Apply opacity and not-allowed cursor for locked cards
          >
            {character.locked && (
              // Show lock icon or "Locked" overlay on locked cards
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white text-lg font-bold rounded-md">
                <FaLock className="mr-2" /> Locked
              </div>
            )}
            {character.locked ? (
              // If the character is locked, render card without Link
              <Card
                name={character.name}
                img={character.img}
                des={character.des}
              />
            ) : (
              // If not locked, wrap card with Link for navigation
              <Link href={character.page}>
                <div className="transition-shadow duration-200 hover:shadow-xl hover:shadow-blue-400">
                  <Card
                    name={character.name}
                    img={character.img}
                    des={character.des}
                  />
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workspace;
