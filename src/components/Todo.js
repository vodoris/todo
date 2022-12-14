const Todo = ({ todo, updateTodo }) => {

  const handleTodoCheck = event => {
    updateTodo({ ...todo, completed: event.target.checked });
  }

  // const handleTodoUpdate = event => {
  //   updateTodo(event);
  // }

  return (
    <div>
      <input type="checkbox" checked={todo.complete} onChange={(e) => handleTodoCheck(e)} />
      <span>{todo.task}</span>
      {/* <input type="text" value={todo.task} onChange={(e) => handleTodoUpdate(e)} /> */}
    </div>
  )
}

export default Todo;