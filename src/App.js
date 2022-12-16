import { useState, useEffect } from "react";
import _ from "lodash";

import { getTodos } from "./services/todos.service";

import "./App.css";
import TodoList from "./components/TodoList";
import CompletedTodoList from "./components/CompletedTodoList";

const App = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getTodos();
        setTodos(data.todos);
      } catch (error) {
        console.log("error");
        // setError(error);
      } finally {
        // add a spinner later if i have time
        // setLoading(false);
      }
    }
    getData();
  }, []);

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
