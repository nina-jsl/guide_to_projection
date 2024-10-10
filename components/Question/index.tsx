import React, { FC, useState } from "react";

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
        <div className = "flex flex-col gap-4">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border-b border-black p-2"
            placeholder="Enter your response here..."
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Question;
