import React from "react";
import { BsCheck } from "react-icons/bs";

export const Check = ({ isCompleted }: any) => {
  console.log(isCompleted);
  return (
    <div
      className={`w-5 h-5 mr-2 border-2 ${
        isCompleted ? "bg-pink-400" : ""
      } border-pink-400 rounded-lg`}
    >
      {isCompleted && <BsCheck size={34} className="text-gray-900" />}
    </div>
  );
};
