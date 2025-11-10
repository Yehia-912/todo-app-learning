//Just studing for our future and to bring you alot of things Nounah:💕😊
import { useEffect, useState } from "react";
import CreateTodos from "./CreateTodos";
import Todos from "./todos/Todos";
import TodosActions from "./TodosActions";
import InitialComponent from "./InitialComponent";
import { useSelector } from "react-redux";

/**
 * useRef() is an important hook to use when I need to store a value during the re-render 
 * but I'am not expected to be shown in the UI 
 * 
 * 1-We use it with setInterval to save its ID and use is to clear interval
 * 2-We can use it to select DOM element by using ref attribute pssing with ref name at the element
 *   * When we access the dom we should use use Effect
 */

// if (!localStorage.getItem("todos")) {
//   localStorage.setItem("todos", JSON.stringify([]));
// }

const TodoApp = () => {
  const todos = useSelector(state => state.todos)

  // const handleCreateTodo = (newTodo) =>
  //   setTodos((todos) => [newTodo, ...todos]);
  // const handleEditTodo = (id, newTodo) =>
  //   setTodos((todos) => todos.map((todo) => (todo.id == id ? newTodo : todo)));
  // const deleteTodo = (id) =>
  //   setTodos((todos) => todos.filter((todo) => todo.id !== id));

  // const totalOfTodos = todos.length;
  // const completeTasks = todos.reduce(
  //   (acc, curr) => (curr.isDone == true ? acc + 1 : acc),
  //   0
  // );

  // const handleClearance = () => setTodos([]);
  // const handleChecking = (toggler) =>
  //   setTodos((todos) => todos.map((todo) => ({ ...todo, isDone: toggler })));

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);


  return (
    <main className="todo-app">
      <CreateTodos  />
      {todos.length == 0 ? (
        <InitialComponent />
      ) : (
        <div className="sd">
          <TodosActions  />
          <Todos />
        </div>
      )}
    </main>
  );
};
export default TodoApp;
