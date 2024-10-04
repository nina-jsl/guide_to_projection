import React from "react";
import Image from "next/image";
import Link from "next/link";

const Layer3 = () => {
  return (
    <div
      id="doctor-page"
      className="h-screen w-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-h-[90%] w-auto flex justify-center">
        <Image
          src="/doctor_layer3.jpg"
          className="object-contain"
          width={1600}
          height={1800}
          alt="doctor layer 3"
        />
      </div>
      {/* need to change where link should be placed */}
      <Link href="/doctor/layer4">
        <p className="text-left mt-4 mx-8">
          The doctor’s face begins to fragment, their expression distant and
          unsure. The tools of their trade seem heavy and burdensome. Am I truly
          healing, or just going through motions? The cracks reveal doubt and
          inner conflict.
        </p>
      </Link>
    </div>
  );
};

export default Layer3;
