import { notFound } from "next/navigation";
import { prisma } from "~/src/db/prisma";

export default async function RootLayout({
  params,
  children,
}: {
  params: { boarsId: string };
  children: React.ReactNode;
}) {
  const boarsId = Number(params.boarsId);

  if (isNaN(boarsId)) {
    return notFound();
  }
  
  try {
    const board = await prisma.board.findUniqueOrThrow({
      where: {
        id: boarsId,
      },
    });

    return (
      <>
        <h1>{board.title}</h1>
        {children}
      </>
    );
  } catch (error) {
    return notFound();
  }
}
