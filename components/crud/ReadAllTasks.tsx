import React from "react";
import showAllRecords from "@/serverActions/readAllTasks";
import EditTaskButton from "@/components/buttons/EditTaskButton";
import DeleteTaskButton from "@/components/buttons/DeleteTaskButton";
import CompleteTaskButton from "../buttons/CompleteTaskButton";
const ReadAllTasks = async () => {
  const data = await showAllRecords();

  if (data === null) {
    return <div>No tasks available.</div>;
  }

  return (
    <div className="bg-orange-100 min-h-screen p-4 rounded-lg shadow md:my-2">
      {data.map((task) => (
        <div
          key={task.id}
          className="border border-gray-900 shadow-2xl hover:bg-orange-200 p-4 mb-5 rounded-lg cursor-pointer group"
        >
          <h2 className="text-gray-950 text-md font-extrabold roboto text-left pl-1">
            {task.title}
          </h2>

          <p className="text-slate-950 roboto text-sm font-bold pl-2">
            {task.content}
          </p>

          <div className="hidden gap-3 group-hover:flex">
            <CompleteTaskButton />
            <EditTaskButton />
            <DeleteTaskButton recID={task.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadAllTasks;
