import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, updateTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} updateTodo={updateTodo} />
      ))}
    </div>
  );
};

export default TodoList;