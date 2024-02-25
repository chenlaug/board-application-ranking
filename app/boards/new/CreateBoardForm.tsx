import React from "react";
import { Button } from "~/src/components/form/Bouton";
import { Input } from "~/src/components/form/Input";

export default function CreateBoardForm() {
  return (
    <form className="flex flex-col gap-4">
      <h1> Create a new board</h1>
      <Input label="Title" name="title" />
      <Button type="submit">Create</Button>
    </form>
  );
}
