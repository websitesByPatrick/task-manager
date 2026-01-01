import React from "react";
type ActionButtonProps = {
  title: string;

  type?: "button" | "submit" | "reset";
};
const ActionButton = ({ title, type }: ActionButtonProps) => {
  return (
    <div>
      <button
        type={type}
        className="bg-gray-800 text-gray-100 texturina text-sm px-2 pb-1 mt-1 rounded-full border md:text-lg md:px-3 md:pb-3 md:pt-2 hover:bg-gray-300 hover:text-gray-900 transition duration-300"
      >
        {title}
      </button>
    </div>
  );
};

export default ActionButton;
