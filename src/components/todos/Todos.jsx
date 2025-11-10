import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <ul className="todos-wrapper">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default Todos;
