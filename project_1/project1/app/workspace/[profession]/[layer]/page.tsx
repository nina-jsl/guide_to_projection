import React from "react";
import Image from "next/image";
import Link from "next/link";

type Profession = "doctor" | "lawyer"; // Add more professions as needed
type Layer = "layer1" | "layer2"; // Add more layers as needed

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
        "The doctor, confident and calm, strides through the hospital corridors. Their coat is spotless, reflecting a sense of purpose and control.",
      nextLayer: "/workspace/doctor/layer2",
    },
    layer2: {
      image: "/doctor_layer2.jpg",
      description:
        "The doctor’s shoulders now slump, and the once pristine coat looks wrinkled. Exhaustion shows in their eyes, the weight of endless responsibilities pressing down.",
      nextLayer: "/workspace/doctor/layer3",
    },
    layer3: {
      image: "/doctor_layer3.jpg",
      description:
        "The doctor’s shoulders now slump, and the once pristine coat looks wrinkled. Exhaustion shows in their eyes, the weight of endless responsibilities pressing down.",
      nextLayer: "/workspace/doctor/layer4",
    },
  },
  lawyer: {
    layer1: {
      image: "/lawyer_layer1.jpg",
      description:
        "The lawyer stands firm, presenting their case with conviction. Their suit is crisp and their expression determined.",
      nextLayer: "/workspace/lawyer/layer2",
    },
    layer2: {
      image: "/lawyer_layer2.jpg",
      description:
        "The lawyer is exhausted from the battle in the courtroom. Their once sharp suit now slightly crumpled.",
      nextLayer: "/workspace/lawyer/layer3",
    },
    layer3: {
      image: "/lawyer_layer3.jpg",
      description:
        "The lawyer is exhausted from the battle in the courtroom. Their once sharp suit now slightly crumpled.",
      nextLayer: "/workspace/lawyer/layer4",
    },
  },
  engineer: {
    layer1: {
      image: "/engineer_layer1.jpg",
      description:
        "The lawyer stands firm, presenting their case with conviction. Their suit is crisp and their expression determined.",
      nextLayer: "/workspace/engineer/layer2",
    },
    layer2: {
      image: "/engineer_layer2.jpg",
      description:
        "The lawyer stands firm, presenting their case with conviction. Their suit is crisp and their expression determined.",
      nextLayer: "/workspace/engineer/layer3",
    },
    layer3: {
      image: "/engineer_layer3.jpg",
      description:
        "The lawyer stands firm, presenting their case with conviction. Their suit is crisp and their expression determined.",
      nextLayer: "/workspace/engineer/layer4",
    },
  },
  banker: {
    layer1: {
      image: "/banker_layer1.jpg",
      description:
        "The lawyer stands firm, presenting their case with conviction. Their suit is crisp and their expression determined.",
      nextLayer: "/workspace/banker/layer2",
    },
    layer2: {
      image: "/banker_layer2.jpg",
      description:
        "The lawyer stands firm, presenting their case with conviction. Their suit is crisp and their expression determined.",
      nextLayer: "/workspace/banker/layer3",
    },
    layer3: {
      image: "/banker_layer3.jpg",
      description:
        "The lawyer stands firm, presenting their case with conviction. Their suit is crisp and their expression determined.",
      nextLayer: "/workspace/banker/layer4",
    },
  },
};

const LayerPage = ({ params }: LayerPageProps) => {
  const { profession, layer } = params;

  // Access content dynamically based on profession and layer
  const currentContent = content[profession]?.[layer];

  if (!currentContent) {
    return <div>Layer or profession not found!</div>;
  }

  return (
    <div
      id={`${profession}-page`}
      className="h-screen w-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-h-[90%] w-auto flex justify-center">
        <Image
          src={currentContent.image}
          className="object-contain"
          width={1600}
          height={1800}
          alt={`${profession} ${layer}`}
        />
      </div>
      <Link href={currentContent.nextLayer}>
        <p className="text-left mt-4 mx-8">{currentContent.description}</p>
      </Link>
    </div>
  );
};

export default LayerPage;
