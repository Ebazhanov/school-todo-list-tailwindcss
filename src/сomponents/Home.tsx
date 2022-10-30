import React, { useState } from "react";
import TodoItem from "./item/TodoItem";

const data = [
  {
    id: 1,
    title: "Finish the essay collaboration",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Send the finished assigment",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Read next chapter of the book in Danish",
    isCompleted: true,
  },
];

interface Item {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const Home = () => {
  const [todos, setTodos] = useState<Item[]>(data);

  const changeTodo = (id: any) => {
    const items = [...todos];
    items[items.findIndex((i) => i.id === id)].isCompleted =
      !items[items.findIndex((i) => i.id === id)].isCompleted;
    setTodos(items);
  };

  console.log(todos);

  return (
    <div className="w-4/5 mx-auto text-white">
      <h1 className="mb-4 font-bold text-l">Tasks - 8</h1>
      {data.map((todo) => (
        <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} />
      ))}
    </div>
  );
};
