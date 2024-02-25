import { prisma } from "~/src/db/prisma";
import React from "react";
import { Proposition } from "~/src/components/proposition/PropositionLine";
import PropositionFrom from "./propositionFrom";

export default async function BoardId({
  params,
}: {
  params: { boarsId: string };
}) {
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
      <PropositionFrom boardId={boardId} />
      <ul>
        {" "}
        {proposition.map((proposition) => (
          <Proposition
            key={proposition.id}
            voteCount={proposition._count.vote}
            {...proposition}
          />
        ))}{" "}
      </ul>
    </div>
  );
}
