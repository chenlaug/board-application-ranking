import { Board } from "@prisma/client";
import Link from "next/link";

type BoardCardProps = {
  board: Board;
};

export const BoardCard = ({ board }: BoardCardProps) => {
  return (
    <Link
      href={`/boards/${board.id}`}
      className="block w-fit p-6 border rounded-lg shadow bg-[#171625] border-[#473876] hover:bg-[#33255B]"
    >
      <h5 className="text-2xl font-bold tracking-tight text-[#BAA7FF]">
        {board.title}
      </h5>
    </Link>
  );
};
