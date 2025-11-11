// any reducer accept old state , actions => new state

import { combineReducers } from "redux";

//{todos:[]}
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id == action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id == action.todo.id ? (todo = action.todo) : todo
      );
    case "CLEAR_TODOS":
      return (state = []);
    case "CHECKALL_TODOS":
      return state.map((todo) => ({ ...todo, isCompleted: true }));
    case "UNCHECKALL_TODOS":
      return state.map((todo) => ({ ...todo, isCompleted: false }));

    default:
      return state;
  }
};
const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
//ADD_TODO
//DELETE_TODO
//TOGGLE_TODO
//CLEAR_TODOS
//CHECKALL_TODOS
