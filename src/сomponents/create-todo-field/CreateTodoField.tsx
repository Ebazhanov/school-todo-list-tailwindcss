import React, { useState } from "react";

const CreateTodoField = ({ setTodos }: any) => {
  const [title, setTitle] = useState("");

  const addTodo = (title: string) => {
    setTodos((prev: any) => [
      {
        _id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };

  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 mt-20 max-w-2xl">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
        className="bg-transparent w-full border-none outline-none"
        placeholder="Add a task"
      />
    </div>
  );
};

export default CreateTodoField;
