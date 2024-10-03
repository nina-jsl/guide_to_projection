import React from "react";
import Card from "@/components/Card";

const Workspace = () => {
  return (
    <div id = "workspace" className = "h-screen flex justify-center items-center">
      <div id="card-container" className="w-[640px] grid grid-cols-2 gap-8 mx-auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Workspace;
