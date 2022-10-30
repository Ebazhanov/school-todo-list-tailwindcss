import React from "react";
import TodoItem from "./item/TodoItem";

const data = [
  {
    id: 1,
    title: "Finish the essay collaboration",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Send the finished assigment",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Read next chapter of the book in Danish",
    isCompleted: false,
  },
];

export const Home = () => {
  return (
    <div className="w-4/5 mx-auto text-white">
      {data.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
