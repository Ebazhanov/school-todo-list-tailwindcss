import React from "react";
import { BsCheck } from "react-icons/bs";

export const Check = ({ isCompleted }: any) => {
  return (
    <div className="w-5 h-5 border-2 border-pink-400 rounded-lg">
      {isCompleted && <BsCheck size={34} className="text-gray-900" />}
    </div>
  );
};
