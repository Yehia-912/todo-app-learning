import { useEffect, useRef, useState } from "react";
import TodoDec from "./TodoDec";

const EditTodo = ({ editedTitle, handleEdit, handleTodo }) => {
  let editTodoInp = useRef(null);

  useEffect(() => {
    editTodoInp.current.focus();
  }, []);
  return (
    <div className="edit-container">
      <input
        type="text"
        name=""
        id=""
        className="edit-inp"
        value={editedTitle}
        onChange={handleEdit}
        ref={editTodoInp}
      />
      <button className="save-edit" onClick={handleTodo}>
        Save
      </button>
    </div>
  );
};

const Todo = ({ todo }) => {
  const [toggler, setToggler] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleToggler = () => {
    setToggler((toggler) => !toggler);
  };
  const handleEdit = (e) => {
    setEditedTitle(e.target.value);
  };
  const handleTodo = () => {
    const newTodo = { ...todo, title: editedTitle };
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
