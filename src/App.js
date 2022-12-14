import { useState } from "react";
import _ from "lodash";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Do laundry', completed: false },
    { id: 2, task: 'Finish project', completed: false },
    { id: 3, task: 'Go for a run', completed: false },
  ]);

  const addTodo = (task) => {
    const newTodo = {
      id: todos.at(-1).id + 1,
      task,
      completed: false
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const updateTodo = (todo) => {
    const newTodos = [...todos];
    const index = _.findIndex(newTodos, ['id', todo.id]);
    newTodos.splice(index, 1, todo);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoList todos={todos} updateTodo={updateTodo} />
      <AddTodo addTodo={addTodo} />
      <hr />
      <div>{JSON.stringify(todos)}</div>
    </div>
  );
}

export default App;
