'use client';
import Link from "next/link";

type LinkButtonProps = {
  route: string;
  title: string;
};

const LinkButton = ({ route, title }: LinkButtonProps) => {
  return (
    <div>
      <Link href={route}>
        <button className="bg-gray-800 text-gray-100 text-xl texturina font-bold pt-1 pb-2 px-4 rounded-full border">
          {title}
        </button>
      </Link>
    </div>
  );
};

export default LinkButton;
