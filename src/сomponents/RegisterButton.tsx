import React from "react";

type RegisterButtonPropsType = {
  onClick?: () => void;
};

export const RegisterButton = ({ onClick }: RegisterButtonPropsType) => {
  return (
    <div className="mt-6">
      <button
        className="w-full px-4 py-2 font-bold tracking-wide text-white transition-colors duration-200 transform rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        style={{ backgroundColor: "#435185" }}
        onClick={onClick}
      >
        Register
      </button>
    </div>
  );
};
