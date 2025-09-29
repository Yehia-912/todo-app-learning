import React from 'react'
import { BiSolidPencil, BiSolidTrash } from "react-icons/bi";

const TodoDec = ({ todo,handleEditTodo, deleteTodo,handleToggler }) => {
    const isCheckedHandler = () => {
      const newTodo = {
        ...todo,
        isDone: !todo.isDone,
      };
      handleEditTodo(todo.id, newTodo);
    };
    const handleDelete = () => deleteTodo(todo.id);
    return (
      <>
        <div className="todo">
          <input
            onChange={isCheckedHandler}
            type="checkbox"
            id={`todo-${todo.id}`}
            checked={todo.isDone}
          />
          <label htmlFor="check">{todo.title}</label>
        </div>
        <div className="actions todo-actions">
          <button onClick={handleToggler}>
            <BiSolidPencil color="#ffb711" fontSize={24} />
          </button>
          <button onClick={handleDelete}>
            <BiSolidTrash color="red" fontSize={24} />
          </button>
        </div>
      </>
    );
  };
  export default TodoDec;