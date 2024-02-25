import { prisma } from "~/src/db/prisma";
import React from "react";
import { Proposition } from "~/src/components/proposition/PropositionLine";

export default async function BoardId({
  params,
}: {
  params: { boarsId: string };
}) {
  console.log(params);

  const boardId = Number(params.boarsId);
  const proposition = await prisma.proposition.findMany({
    where: {
      boardId: boardId,
    },
    select: {
      id: true,
      title: true,
      _count: { select: { vote: true } },
    },
  });

  return (
    <div>
      {proposition.map((proposition) => (
        <Proposition
          key={proposition.id}
          voteCount={proposition._count.vote}
          {...proposition}
        />
      ))}{" "}
    </div>
  );
}
