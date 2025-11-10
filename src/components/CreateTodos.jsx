import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/actions";

const CreateTodos = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const createInpRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() == "") return; //garde close\
    const newTodo = {
      id: Date.now(),
      title,
      isCompleted: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
  };
  return (
    <form className="create-todo" onSubmit={submitHandler}>
      <fieldset>
        <legend>Write a new todo item</legend>
        <input
          ref={createInpRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
