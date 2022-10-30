import { BsCheck } from "react-icons/bs";
import cn from "classnames";

export const Check = ({ isCompleted }: any) => {
  return (
    <div
      className={cn(
        "w-6 h-6 mr-2 border-2 border-pink-400 rounded-lg flex items-center",
        {
          "bg-pink-400": isCompleted,
        }
      )}
    >
      {isCompleted && <BsCheck size={24} className="text-gray-900" />}
    </div>
  );
};
