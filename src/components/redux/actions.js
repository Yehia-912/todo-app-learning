//ADD_TODO
const addTodo = (todo) => ({ type: "ADD_TODO", todo });
//DELETE_TODO
const deleteTodo = (id) => ({ type: "DELETE_TODO", id });
//TOGGLE_TODO
const toggleTodo = (id) => ({ type: "TOGGLE_TODO", id });

//CLEAR_TODOS

//CHECKALL_TODOS
export {addTodo,toggleTodo,deleteTodo}