import React, { useEffect, useRef, useState } from "react";

const CreateTodos = ({ addHandler }) => {
  const [todo, setTodo] = useState("");
  const createInpRef = useRef(null);
  /*   Effects     */
  useEffect(() => {
    createInpRef.current.focus();
  }, []);
  /** handlers */
  const submitHandler = (e) => {
    e.preventDefault();
    if (todo.trim() == "") return; //garde close\
    const newTodo = {
      id: Date.now(),
      title: todo,
      isDone: false,
    };
    addHandler(newTodo);
    setTodo("");
  };
  return (
    <form className="create-todo" onSubmit={submitHandler}>
      <fieldset>
        <legend>Write a new todo item</legend>
        <input
          ref={createInpRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Learn HTML"
          type="text"
          aria-label="todo-name"
        />
        <button type="submit">Add</button>
      </fieldset>
    </form>
  );
};

export default CreateTodos;
