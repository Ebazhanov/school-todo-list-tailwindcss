import React from "react";
import { Check } from "./Check";

const TodoItem = ({ todo, changeTodo }: any) => {
  return (
    <button
      className="flex items-center w-full p-4 mb-2 bg-gray-800 rounded-2xl"
      onClick={() => changeTodo(todo.id)}
    >
      <Check isCompleted={todo.isCompleted} />
      {todo.title}
    </button>
  );
};

export default TodoItem;
