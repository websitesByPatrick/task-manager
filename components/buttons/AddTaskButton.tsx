'use client';
import Link from "next/link";

const AddTaskButton = () => {
  return (
    <div>
      <Link href="/add-task">
        <button className="bg-slate-400 hover:bg-slate-900 text-slate-600 hover:text-slate-300 font-bold py-2 px-4 rounded">
          Add Task
        </button>
      </Link>
    </div>
  );
};

export default AddTaskButton;
