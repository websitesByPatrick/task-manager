import React from "react";
import LinkButton from "@/components/buttons/LinkButton";

const Header = () => {
  return (
    <div className="bg-yellow-500 text-gray-800 flex flex-col justify-center items-center pb-1 border-b-2 md:flex-row  md:py-4 md:px-5 md:mt-5 rounded-b-md">
      <div className="flex content-center items-start md:w-6/8">
        <h1 className="texturina font-extrabold text-xl md:text-6xl md:mb-5">Task Manager</h1>
      </div>

      <div className="flex justify-between items-center md:justify-center md:w-3/8 md:gap-4">
        <LinkButton route="/api/create" title="Create Task" />
        <LinkButton route="/auth/login" title="Login" />
      </div>
    </div>
  );
};

export default Header;
