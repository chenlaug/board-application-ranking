"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "~/src/components/form/Bouton";
import { Input } from "~/src/components/form/Input";

type PropositionFromProps = {
  boardId: number;
};

export default function PropositionFrom({ boardId }: PropositionFromProps) {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = form.get("title");
    fetch(`/api/boards/${boardId}/proposition`, {
      method: "POST",
      body: JSON.stringify({ title }),
    })
      .then((res) => res.json())
      .then(() => {
        router.refresh();
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h1> Create a new board</h1>
      <Input label="Title" name="title" />
      <Button type="submit">Create</Button>
    </form>
  );
}
