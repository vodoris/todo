import { TrashIcon } from "@heroicons/react/24/solid";

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const handleTodoCheck = (event) => {
    updateTodo({ ...todo, completed: event.target.checked });
  };

  const handleTodoTaskChange = (event) => {
    updateTodo({ ...todo, task: event.target.value });
  };

  const handleTodoDelete = () => {
    deleteTodo(todo);
  };

  return (
    <div className="form-control">
      <div className="input-group input-group-sm mb-2">
        <input
          type="checkbox"
          className="input-sm checkbox"
          checked={todo.completed}
          onChange={(e) => handleTodoCheck(e)}
        />
        <input
          type="text"
          className={`input input-sm w-full ${
            todo.completed && "line-through"
          }`}
          disabled={todo.completed}
          value={todo.task}
          onChange={(e) => handleTodoTaskChange(e)}
        />
        <button
          className="btn btn-primary btn-sm"
          onClick={() => handleTodoDelete()}
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
