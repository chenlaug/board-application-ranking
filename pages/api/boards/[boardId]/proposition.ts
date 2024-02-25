import { NextApiRequest, NextApiResponse } from "next";
import { Proposition } from "@prisma/client";
import { z } from "zod";
import { prisma } from "~/src/db/prisma";

type Data = {
  proposition: Proposition;
};

const BodySchema = z.object({
  title: z.string().min(1).max(255),
});

const QuerySchema = z.object({
  boardId: z.string().transform((id) => Number(id)),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  const query = QuerySchema.parse(req.query);
  const body = BodySchema.parse(JSON.parse(req.body));
  const proposition = await prisma.proposition.create({
    data: {
      title: body.title,
      boardId: query.boardId,
      ip: String(Math.random()),
    },
  });
  res.status(200).json({ proposition });
}
