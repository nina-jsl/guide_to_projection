import React from 'react'
import { FC, ReactNode } from "react";

interface StoryProps {
  storyText: string;
  backgroundClass: string;
  children?: ReactNode;
}

const Story: FC<StoryProps> = ({ storyText, backgroundClass, children }) => {
  return (
    <div className={`story-container p-4 w-[80%] ${backgroundClass}`}>
      <p className = "bg-transparent ">{storyText}</p>
      {children && <div className="mt-4 bg-transparent flex w-full justify-end">{children}</div>} {/* Render children */}
    </div>
  );
};

export default Story;
