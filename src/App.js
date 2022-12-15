import { useState } from "react";
import _ from "lodash";

import "./App.css";
import TodoList from "./components/TodoList";
import CompletedTodoList from "./components/CompletedTodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: `Take car`, completed: false },
    { id: 2, task: `Go to Mum's`, completed: false },
    { id: 3, task: "Kill Phil (sorry)", completed: false },
    { id: 4, task: "Grab Liz", completed: false },
    { id: 5, task: "Go to the Winchester", completed: false },
    { id: 6, task: "Have a nice cold pint", completed: false },
    { id: 7, task: "Wait for all of this to blow over", completed: false },
  ]);

  const addTodo = (task) => {
    const newTodo = {
      id: todos.at(-1).id + 1,
      task,
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const updateTodo = (todo) => {
    const newTodos = [...todos];
    const index = _.findIndex(newTodos, ["id", todo.id]);
    newTodos.splice(index, 1, todo);
    setTodos(newTodos);
  };

  const deleteTodo = (todo) => {
    const newTodos = [...todos];
    const index = _.findIndex(newTodos, ["id", todo.id]);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="w-80">
            <TodoList
              todos={_.filter(todos, ["completed", false])}
              addTodo={addTodo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
            <CompletedTodoList
              todos={_.filter(todos, ["completed", true])}
              addTodo={addTodo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
