import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

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

interface Item {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const Home = () => {
  const [todos, setTodos] = useState<Item[]>(data);

  const changeTodo = (id: any) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    if (current !== undefined) {
      current.isCompleted = !current.isCompleted;
    }
    setTodos(copy);
  };

  function removeTodo(id: any) {
    const newList = todos.filter((item: any) => item.id !== id);
    setTodos(newList);
  }

  return (
    <div className="w-4/5 mx-auto text-white">
      <h1 className="mb-4 font-bold text-l">Tasks - 8</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          changeTodo={changeTodo}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};
