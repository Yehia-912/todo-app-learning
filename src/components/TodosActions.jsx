import React, { useState } from "react";
import { useSelector } from "react-redux";

const TodosActions = ({ clearTodos, handleChecking }) => {

  const todos = useSelector((state) => state.todos);
  let completedTodos = todos.filter((todo) => todo.isCompleted == true).length;

  // if(todosLen == 0) return;
  const [checker, setChecker] = useState(true);
  const checkHandler = () => {
    setChecker((ch) => !ch);
    handleChecking(checker);
  };

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
        <button onClick={clearTodos}>clear</button>
        {checker ? (
          <button onClick={checkHandler}>Check All</button>
        ) : (
          <button onClick={checkHandler}>Uncheck All</button>
        )}
        {/* <button onClick={checkAllTodos}>check all</button> */}
      </div>
    </div>
  );
};

export default TodosActions;
