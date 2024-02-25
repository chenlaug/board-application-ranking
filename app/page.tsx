import { BoardCard } from "~/src/components/board/BoardCard";
import { Bouton, Button } from "~/src/components/form/Bouton";
import { prisma } from "~/src/db/prisma";

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
        <Button as="a" href="boards/new" className="self-end">
          Create Board
        </Button>
        <ul className="flex flex-col justify-center gap-2">
          {boards.map((board: Board) => (
            <BoardCard key={board.id} board={board} />
          ))}
        </ul>
      </div>
    </>
  );
}
