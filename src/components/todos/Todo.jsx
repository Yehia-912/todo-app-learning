import { useEffect, useRef, useState } from "react";
import TodoDec from "./TodoDec";
import { useDispatch } from "react-redux";
import { editTodo } from "../../redux/actions.js";


const EditTodo = ({ editedTitle, handleEdit, handleTodo }) => {
  let editTodoInp = useRef(null);

  useEffect(() => {
    editTodoInp.current.focus();
  }, []);
  return (
    <form className="edit-container">
      <input
        type="text"
        name=""
        id=""
        className="edit-inp"
        value={editedTitle}
        onChange={handleEdit}
        ref={editTodoInp}
      />
      <button
        type="submit"
        className="save-edit"
        onClick={(e) => {
          e.preventDefault();
          handleTodo();
        }}
      >
        Save
      </button>
    </form>
  );
};

const Todo = ({ todo }) => {
  const [toggler, setToggler] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const dispatch = useDispatch();
  const handleToggler = () => {
    setToggler((toggler) => !toggler);
  };
  const handleEdit = (e) => {
    setEditedTitle(e.target.value);
  };
  const handleTodo = () => {
 
    const newTodo = { ...todo, title: editedTitle };
    dispatch(editTodo(newTodo));
    handleToggler();
  };
  return (
    <li className="todos">
      {!toggler ? (
        <TodoDec todo={todo} handleToggler={handleToggler} />
      ) : (
        <EditTodo
          handleEdit={handleEdit}
          handleTodo={handleTodo}
          editedTitle={editedTitle}
        />
      )}
    </li>
  );
};
export default Todo;
