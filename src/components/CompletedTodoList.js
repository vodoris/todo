import { useState } from "react";

import Todo from "./Todo";
import {
  EyeIcon,
  EyeSlashIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

const CompletedTodoList = ({ todos, updateTodo, deleteTodo }) => {
  const [showCompleted, setShowCompleted] = useState(true);
  return (
    <div>
      <h1 className="text-5xl font-bold">Completed</h1>
      <div className="divider mb-0"></div>
      <div className="flex justify-end items-center mb-2">
        <button
          className="btn btn-ghost btn-circle btn-sm"
          onClick={() => setShowCompleted(!showCompleted)}
        >
          {showCompleted ? (
            <EyeIcon className="w-6 h-6" />
          ) : (
            <EyeSlashIcon className="w-6 h-6" />
          )}
        </button>
      </div>
      {showCompleted &&
        (todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <div className="alert alert-info shadow-lg">
            <div>
              <InformationCircleIcon className="w-4 h-4" />
              <span>Stop procrastinating...</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CompletedTodoList;
