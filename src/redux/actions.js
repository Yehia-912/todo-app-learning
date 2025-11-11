//ADD_TODO
export const addTodo = (todo) => ({ type: "ADD_TODO", todo });
//DELETE_TODO
export const deleteTodo = (id) => ({ type: "DELETE_TODO", id });
//TOGGLE_TODO
export const toggleTodo = (id) => ({ type: "TOGGLE_TODO", id });
//EDIT_TODO
export const editTodo = (todo) => ({ type: "EDIT_TODO", todo });
//CLEAR_TODOS
export const clearTodos = () => ({ type: "CLEAR_TODOS" });
//CHECKALL_TODOS
export const checkAllTodos = () => ({ type: "CHECKALL_TODOS" });
//UNCHECKALL_TODOS
export const uncheckAllTodos = () => ({ type: "UNCHECKALL_TODOS" });
