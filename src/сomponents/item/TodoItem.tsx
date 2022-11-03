import React from "react";
import cn from "classnames";
import { BsTrash } from "react-icons/bs";
import { Check } from "./Check";

const TodoItem = ({ todo, changeTodo, removeTodo }: any) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 max-w-2xl">
      <button className="flex items-center" onClick={() => changeTodo(todo.id)}>
        <Check isCompleted={todo.isCompleted} />
        <span
          className={cn({
            "line-through": todo.isCompleted,
          })}
        >
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash
          size={22}
          className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  );
};

export default TodoItem;
