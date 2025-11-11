import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAllTodos, clearTodos, uncheckAllTodos } from "../redux/actions.js";

const TodosActions = () => {
  const [checker, setChecker] = useState(true);
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  let completedTodos = todos.filter((todo) => todo.isCompleted == true).length;

  return (
    <div className="actions-wrapper">
      <div className="process">
        <progress max={todos.length} value={completedTodos} id="progress">
          2/2
        </progress>
        <label htmlFor="progress">
          {completedTodos} / {todos.length} complete
        </label>
      </div>
      <div className="actions">
        <button onClick={() => dispatch(clearTodos())}>clear</button>
        {checker ? (
          <button
            onClick={() => {
              dispatch(checkAllTodos());
              setChecker(false);
            }}
          >
            Check All
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(uncheckAllTodos());
              setChecker(true);
            }}
          >
            Uncheck All
          </button>
        )}
        {/* <button onClick={checkAllTodos}>check all</button> */}
      </div>
    </div>
  );
};

export default TodosActions;
