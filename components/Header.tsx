import React from "react";
import LinkButton from "./buttons/LinkButton";

const Header = () => {
  return (
    <div className="w-full h-24 bg-yellow-500 text-gray-800 flex justify-between items-center">
      <div className="flex content-center items-start ml-5 mb-4">
        <h1 className="text-2xl xs:text-3xl sm:text-5xl texturina font-extrabold">Task Manager</h1>
      </div>

      <div className="pr-10 flex gap-4">
        <LinkButton route="/add-task" title="Add Task" />
        <LinkButton route="/auth/login" title="Login" />
      </div>
    </div>
  );
};

export default Header;
