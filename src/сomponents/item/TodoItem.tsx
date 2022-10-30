import { Check } from "./Check";
import cn from "classnames";

const TodoItem = ({ todo, changeTodo }: any) => {
  return (
    <button
      className="flex items-center w-full p-4 mb-2 bg-gray-800 rounded-2xl"
      onClick={() => changeTodo(todo.id)}
    >
      <Check isCompleted={todo.isCompleted} />
      <span className={cn({ "line-through": todo.isCompleted })}>
        {todo.title}
      </span>
    </button>
  );
};

export default TodoItem;
