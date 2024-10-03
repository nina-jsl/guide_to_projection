import React from "react";
import Image from "next/image";

const Card = ({
  name = "name holder",
  img = "",
  des = "des holder",
}) => {
  return (
    <div className="w-[300px] h-96 rounded-md border-2 border-black">
      <div className="h-full mx-4 flex flex-col justify-center items-center">
        {/* replace this with image later */}
        <div className="w-full h-[200px] border-2 mb-4 border-black rounded-md"></div>
        {/* description section */}
        <div className="w-full h-[100px] flex gap-2">
          {/* character name section */}
          <div className="border-r-2 border-black flex flex-col justify-between h-full">
            <div></div>
            <p className="mx-4 ">{name}</p>
          </div>
          <div className="flex h-full justify-center items-center">
            <p className="pl-4">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
