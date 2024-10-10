import React, { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="relative w-[30%] h-[35%] bg-red-400 bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-md p-6 flex flex-col justify-between">
        {/* Alert message */}
        <div className = "w-full h-full flex justify-center items-center bg-transparent">
          <p className="text-center bg-transparent">{message}</p>
        </div>

        {/* Action Button (Close Icon) */}
        <button className="absolute right-4 top-4" onClick={onClose}>
          <AiOutlineClose
            size={24}
            className="bg-transparent hover:text-blue-500 transition-colors"
          />
        </button>
      </div>
    </div>
  );
};

export default Alert;
