import React from "react";
import { BiSolidPencil, BiSolidTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";

const TodoDec = ({ todo, handleToggler }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="todo">
        <input
          onChange={() => dispatch(toggleTodo(todo.id))}
          type="checkbox"
          id={`todo-${todo.id}`}
          checked={todo.isCompleted}
        />
        <label htmlFor="check">{todo.title}</label>
      </div>
      <div className="actions todo-actions">
        <button onClick={handleToggler}>
          <BiSolidPencil color="#ffb711" fontSize={24} />
        </button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>
          <BiSolidTrash color="red" fontSize={24} />
        </button>
      </div>
    </>
  );
};
export default TodoDec;
