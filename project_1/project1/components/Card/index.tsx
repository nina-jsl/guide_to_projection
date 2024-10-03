import React from "react";
import Image from "next/image";

const Card = ({ name = "name holder", img_url = "", des = "des holder", page_url="" }) => {
  return (
    <div className="w-[300px] h-96 bg-slate-300 rounded-md">
      <div className="h-full mx-4 flex flex-col justify-center items-center">
        {/* replace this with image later */}
        <div className="w-full h-1/3 bg-emerald-100"></div>
        {/* description section */}
        <div className="w-full flex gap-2">
            {/* character name section */}
          <div className = "border-r-2 border-black">
            <p className = "mx-4">{name}</p>
          </div>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
