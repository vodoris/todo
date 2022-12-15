import { useState } from "react";

import { PlusIcon } from "@heroicons/react/24/solid";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (event) => {
    setTodo(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-control">
          <div className="input-group input-group-sm">
            <input
              type="checkbox"
              disabled
              className="input-sm checkbox checkbox-primary"
            />
            <input
              type="text"
              className="input input-sm w-full"
              value={todo}
              onChange={(e) => handleOnChange(e)}
            />
            <button
              type="submit"
              disabled={todo.length === 0}
              className="btn btn-primary btn-sm"
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
      <p>{error}</p>
    </div>
  );
};

export default AddTodo;
