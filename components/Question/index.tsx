import React, { FC, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface QuestionProps {
  questionText: string;
  onSubmitAnswer: (answer: string) => void;
}

const Question: FC<QuestionProps> = ({ questionText, onSubmitAnswer }) => {
  const [answer, setAnswer] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitAnswer(answer);
    setAnswer("");
  };
  return (
    <div className="question-container p-4 bg-white w-[80%]">
      <p>{questionText}</p>
      <form
        onSubmit={handleSubmit}
        className="w-full flex justify-center items-center"
      >
        <div className="flex flex-row w-1/2 mt-10 border-b border-black">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="p-2 outline-none font-mono w-full"
            placeholder="Enter here..."
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center justify-center bg-transparent"
            >
              <FaArrowRight className="text hover:text-blue-500 bg-transparent" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Question;
