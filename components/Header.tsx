import React from "react";
import AddTaskButton from "./buttons/AddTaskButton";

const Header = () => {
  return (
    <div className="w-full text-center h-20 bg-slate-700 text-slate-200 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-6xl pl-10">Task Manager</h1>
      <div className="pr-10"><AddTaskButton /></div>
    </div>
  );
};

export default Header;
