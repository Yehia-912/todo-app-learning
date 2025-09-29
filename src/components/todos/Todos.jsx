import React from "react";
import Todo from "./Todo";
;
const Todos = ({todos,handleEditTodo,deleteTodo }) => {
  return (
    <ul className="todos-wrapper">
      {todos.map(todo=><Todo key={todo.id} todo={todo} handleEditTodo={handleEditTodo} deleteTodo={deleteTodo}/>)} 
    </ul>
  );
};

export default Todos;
