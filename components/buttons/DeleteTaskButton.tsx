'use client';
import deleteRecord from "@/server-actions/deleteRecord";

const DeleteTaskButton = ({ recID }: { recID: number }) => {
  
  return (
    <div>
      <button
        onClick={() => deleteRecord(recID)}
        className="bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteTaskButton;
