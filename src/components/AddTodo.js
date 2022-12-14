import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("")

  const handleOnChange = event => {
    setTodo(event.target.value);
    setError("");
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (todo.length === 0) {
      setError("Please enter a Todo item.")
      return;
    }
    addTodo(todo);
    event.target.value = "";
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => handleOnChange(e)} />
        <button type="submit">+</button>
      </form>
      <p>{error}</p>
    </div>
  )
}

export default AddTodo;