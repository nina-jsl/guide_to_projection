import React from "react";
import Image from "next/image";
import Link from "next/link";

const layer2 = () => {
  return (
    <div
      id="doctor-page"
      className="h-screen w-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-h-[90%] w-auto flex justify-center">
        <Image
          src="/doctor_layer2.jpg"
          className="object-contain"
          width={1600}
          height={1800}
          alt="doctor layer 2"
        />
      </div>
      {/* need to change where link should be placed */}
      <Link href="/doctor/layer3">
        <p className="text-left mt-4 mx-8">
          The doctor’s shoulders now slump, and the once pristine coat looks
          wrinkled. Exhaustion shows in their eyes, the weight of endless
          responsibilities pressing down. Behind the calm exterior lies the toll
          of constant care.
        </p>
      </Link>
    </div>
  );
};

export default layer2;
