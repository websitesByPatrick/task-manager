import React from "react";
import showAllRecords from "@/server-actions/showAllRecords";
import EditTaskButton from "@/components/buttons/EditTaskButton";
import DeleteTaskButton from "@/components/buttons/DeleteTaskButton";
import CompleteTaskButton from "./buttons/CompleteTaskButton";
const ShowTasks = async () => {
  const data = await showAllRecords();

  if (data === null) {
    return <div>No tasks available.</div>;
  }

  return (
    <div className="w-full flex bg-slate-300  ">
      <div className="w-full">
        {data.map((task) => (
          <div
            key={task.id}
            className="border-b border-slate-900 p-4 flex items-center justify-between hover:bg-amber-300"
          >
            <h2 className="text-slate-950 text-lg font-semibold">
              {task.title}
            </h2>
            <p className="text-slate-950">{task.content}</p>
            <div className="flex gap-3">
              <CompleteTaskButton />
              <EditTaskButton />
              <DeleteTaskButton recID={task.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
