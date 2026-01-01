"use client";
import Link from "next/link";

type LinkButtonProps = {
  route: string;
  title: string;
};

const LinkButton = ({ route, title }: LinkButtonProps) => {
  return (
    <div>
      <Link href={route}>
        <button className="bg-gray-800 text-gray-100 texturina text-sm px-2 pb-1 mt-1  rounded-full border md:text-lg md:px-3 md:pb-3 md:pt-2 hover:bg-gray-300 hover:text-gray-900 transition duration-300">
          {title}
        </button>
      </Link>
    </div>
  );
};

export default LinkButton;
