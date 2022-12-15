import React from "react";

import Todo from "./Todo";
import AddTodo from "./AddTodo";

const TodoList = ({ todos, addTodo, updateTodo, deleteTodo }) => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Todo</h1>
      <div className="divider"></div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <AddTodo addTodo={addTodo} />
      <div className="divider"></div>
    </div>
  );
};

export default TodoList;
