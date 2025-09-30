import React, { useState } from "react";

const TodosActions = ({ todosLen, hasDone, clearTodos, handleChecking }) => {
  // if(todosLen == 0) return;
  const [checker, setChecker] = useState(true);
  const checkHandler = () => {
    

    setChecker((ch) => !ch);
    handleChecking(checker);
  };

  
  return (
    <div className="actions-wrapper">
      <div className="process">
        <progress max={todosLen} value={hasDone} id="progress">
          2/2
        </progress>
        <label htmlFor="progress">
          {hasDone} / {todosLen} complete
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
