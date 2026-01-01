import React from "react";
import { useRouter } from "next/navigation";

const CancelButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push("/")}
      className="bg-gray-800 text-gray-100 texturina text-sm px-2 pb-1 mt-1  rounded-full border md:text-lg md:px-3 md:pb-3 md:pt-2 hover:bg-gray-300 hover:text-gray-900 transition duration-300"
    >
      Cancel
    </button>
  );
};

export default CancelButton;
