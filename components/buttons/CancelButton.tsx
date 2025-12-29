import React from "react";
import { useRouter } from "next/navigation";

const CancelButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/")}
      className="border shadow-2xl shadow-slate-900 border-black bg-slate-400 hover:bg-slate-900 text-slate-950 hover:text-slate-300 font-bold py-2 px-4 rounded"
    >
     Cancel
    </button>
  );
};

export default CancelButton;
