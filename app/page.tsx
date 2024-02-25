import { BoardCard } from "~/src/components/board/BoardCard";
import { Button } from "~/src/components/form/Bouton";
import { prisma } from "~/src/db/prisma";
import CreateBoardForm from "./boards/new/CreateBoardForm";

interface Board {
  id: number;
  title: string;
  createdAt: Date;
}

export default async function Home() {
  const boards = await prisma.board.findMany();
  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-5xl front-bold">Boards List</h1>
        <CreateBoardForm />
        <ul className="flex flex-col justify-center gap-2">
          {boards.map((board: Board) => (
            <BoardCard key={board.id} board={board} />
          ))}
        </ul>
      </div>
    </>
  );
}
