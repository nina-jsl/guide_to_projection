"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
type Profession = "doctor" | "lawyer" | "engineer" | "banker";
type Layer = "layer1" | "layer2" | "layer3";

interface LayerPageProps {
  params: {
    profession: Profession;
    layer: Layer;
  };
}

const content = {
  doctor: {
    layer1: {
      image: "/doctor_layer1.jpg",
      description:
        "The doctor stands over a table with medical tools, calm and composed. A framed “Healer” hangs on the wall, symbolizing their role as a trusted caregiver.",
      nextLayer: "/workspace/doctor/layer2",
      interpretations: [],
    },
    layer2: {
      image: "/doctor_layer2.jpg",
      description:
        "Chaos begins to surround the doctor, with floating objects and a waiting patient in the background. The once composed healer now shows signs of strain.",
      nextLayer: "/workspace/doctor/layer3",
      interpretations: [],
    },
    layer3: {
      image: "/doctor_layer3.jpg",
      description:
        "The doctor’s face is now fragmented, their tools distorted. Doubt and uncertainty creep in, questioning if they are truly healing or merely managing endless tasks.",
      nextLayer: "/workspace/doctor/layer4",
      interpretations: [
        "Doctors are viewed as the ultimate protectors of health, yet they are often bogged down by bureaucracy and a healthcare system that prioritizes efficiency over personal care. Are they healers, or are they cogs in a machine?",
        "Doctors are seen as tireless caregivers, but many are overwhelmed by the physical and emotional toll of their profession. Are they champions of care, or do they bear the weight of exhaustion and stress, struggling to keep going?",
        "Doctors are celebrated as lifesavers, but they are also witnesses to death and failure. Do they heal the body, or do they simply prolong the inevitable while managing the grief of their patients.",
      ],
    },
  },
  lawyer: {
    layer1: {
      image: "/lawyer_layer1.jpg",
      description:
        "The lawyer sits calmly at their desk, pen in hand, surrounded by neatly stacked papers and orderly books. Everything is precise, controlled. Their gaze is steady, but distant—lost in the routine.",
      nextLayer: "/workspace/lawyer/layer2",
      interpretations: [],
    },
    layer2: {
      image: "/lawyer_layer2.jpg",
      description:
        "Papers now swirl chaotically around the lawyer. The once calm atmosphere is broken, yet they remain still. Eyes heavy, the pen hesitates. The chaos rises, but the lawyer holds their ground—barely.",
      nextLayer: "/workspace/lawyer/layer3",
      interpretations: [],
    },
    layer3: {
      image: "/lawyer_layer3.jpg",
      description:
        "The lawyer is now caught in the endless grind, reduced to a cog in a larger system.",
      nextLayer: "/workspace/lawyer/layer4",
      interpretations: [
        "Lawyers are often seen as defenders of justice, yet they are also instruments for those in power. Are they fighting for the common good, or simply ensuring that the powerful maintain their control?",
        "Lawyers are trusted to uncover the truth, but they are equally skilled in twisting facts to serve a narrative. Are they truth-seekers, or manipulators of the system, bending reality to win a case?",
        "Lawyers serve the law, but in doing so, they can become trapped by it—bound by rigid rules and procedures. Are they liberators through legal knowledge, or are they shackled by the very system they work within?",
      ],
    },
  },
  engineer: {
    layer1: {
      image: "/engineer_layer1.jpg",
      description:
        "The engineer stands confidently, surrounded by smoothly running machines and precise lines, representing control and progress. They appear as the problem-solver, effortlessly building the future.",
      nextLayer: "/workspace/engineer/layer2",
      interpretations: [],
    },
    layer2: {
      image: "/engineer_layer2.jpg",
      description:
        "Error messages fill the scene, and the once-pristine machines start to break down. The engineer, now weary, struggles under the constant pressure of troubleshooting and failures.",
      nextLayer: "/workspace/engineer/layer3",
      interpretations: [],
    },
    layer3: {
      image: "/engineer_layer3.jpg",
      description:
        "The engineer and their machines begin to fragment. The systems they created are malfunctioning, raising questions about whether their work benefits or harms society.",
      nextLayer: "/workspace/engineer/layer4",
      interpretations: [
        "Engineers are lauded for their innovations, but their creations can have unintended consequences. Are they builders of progress, or do they inadvertently contribute to the world's growing ethical and environmental dilemmas?",
        "Engineers are celebrated for their precise problem-solving, but this pursuit of perfection can trap them in endless cycles of revision and correction. Are they true innovators, or are they bound by their own impossible standards?",
        "Engineers shape the future with their innovations, but in doing so, they may dismantle long-standing practices and values. Are they visionaries leading the charge for progress, or disruptors erasing what once was?",
      ],
    },
  },
  banker: {
    layer1: {
      image: "/banker_layer1.jpg",
      description:
        "The banker sits confidently behind their desk, charts on the wall, exuding control and authority. They represent the image of a master of the financial world.",
      nextLayer: "/workspace/banker/layer2",
      interpretations: [],
    },
    layer2: {
      image: "/banker_layer2.jpg",
      description:
        "Chaos surrounds the banker—financial crises, missed deadlines, and market downturns. The once-confident figure now appears overwhelmed by the weight of responsibility.",
      nextLayer: "/workspace/banker/layer3",
      interpretations: [],
    },
    layer3: {
      image: "/banker_layer3.jpg",
      description:
        "The banker’s face is fragmented, and their surroundings are distorted. Ethical dilemmas now cloud their actions—wealth creation versus exploitation.",
      nextLayer: "/workspace/banker/layer4",
      interpretations: [
        "Investment bankers are seen as architects of wealth creation, but they also contribute to the widening gap between the rich and the poor. Are they building prosperity, or are they amplifying economic inequality?",
        "Investment bankers are praised for their ability to manage financial risk, but at times they gamble with the livelihoods of others for personal or institutional gain. Are they experts in calculated risks, or reckless gamblers of economic futures?",
        "Bankers are trusted to fuel economic growth, yet their deals often favor the wealthy and exploit the vulnerable. Do they truly generate prosperity, or are they enablers of exploitation?",
      ],
    },
  },
};

const fixedPositions = [
  { top: "20%", left: "30%" }, // First spiral's fixed position
  { top: "50%", left: "60%" }, // Second spiral's fixed position
  { top: "70%", left: "30%" }, // Third spiral's fixed position
];

const LayerPage = ({ params }: LayerPageProps) => {
  const { profession, layer } = params;
  const currentContent = content[profession]?.[layer];
  const [revealed, setRevealed] = useState<Array<number>>([]); // Track which spirals have been clicked
  const [showEndPopup, setShowEndPopup] = useState(false); // Track end of the game popup

  if (!currentContent) {
    return <div>Layer or profession not found!</div>;
  }

  const handleSpiralClick = (index: number) => {
    if (revealed.includes(index)) {
      setRevealed(revealed.filter((i) => i !== index)); // Hide interpretation if clicked again
    } else {
      setRevealed([...revealed, index]); // Show interpretation if not revealed yet
    }
  };

  const handleImageClick = () => {
    if (layer === "layer3") {
      setShowEndPopup(true); // Show popup on image click in layer 3
    }
  };

  const closePopup = () => {
    setShowEndPopup(false); // Close popup when user clicks 'OK' or outside
  };

  return (
    <div
      id={`${profession}-page`}
      className="h-screen w-screen relative flex flex-col justify-center items-center overflow-hidden"
    >
      {/* For Layer 1 and Layer 2, wrap the image with Link for navigation */}
      <div className="max-h-[90%] w-auto flex justify-center">
        {layer !== "layer3" ? (
          <Link href={currentContent.nextLayer}>
            <Image
              src={currentContent.image}
              className="object-contain cursor-pointer"
              alt={`${profession} ${layer}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        ) : (
          <div onClick={handleImageClick}>
            <Image
              src={currentContent.image}
              className="object-contain cursor-pointer"
              alt={`${profession} ${layer}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>

      {/* Display description */}
      <p className="text-left mx-8">{currentContent.description}</p>

      {/* Only show spirals on Layer 3 */}
      {layer === "layer3" &&
        currentContent.interpretations &&
        fixedPositions.map((position, index) => (
          <div key={index} className="absolute" style={{ ...position }}>
            {/* Spiral image */}
            <Image
              src="/spiral.png"
              alt="spiral"
              className="w-15 h-15 cursor-pointer"
              width={40}
              height={40}
              onClick={() => handleSpiralClick(index)}
            />

            {/* Show interpretation when clicked */}
            {revealed.includes(index) && (
              <div className="absolute w-[300px] top-full left-0 mt-2 p-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 text-black text-sm max-w-xs rounded-lg shadow-lg">
                {currentContent.interpretations[index]}
              </div>
            )}
          </div>
        ))}

      {/* Popup to ask if this is the end of the game */}
      {showEndPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">End of the Game</h2>
            <p className="mb-4">
              This is the end of this character&apos;s story.
            </p>
            <div className="flex gap-3">
              <Link href="/workspace">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={closePopup}
                >
                  Ok
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayerPage;