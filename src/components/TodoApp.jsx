import { useEffect, useState } from "react";
import CreateTodos from "./CreateTodos";
import Todos from "./todos/Todos";
import TodosActions from "./TodosActions";
import InitialComponent from "./InitialComponent";

localStorage.setItem('todos', JSON.stringify([]));

const TodoApp = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));



  const handleCreateTodo = (newTodo) => setTodos((todos) => [newTodo, ...todos])
  const handleEditTodo = (id, newTodo) => setTodos((todos) => todos.map(todo => todo.id == id ? newTodo : todo))
  const deleteTodo = (id) => setTodos(todos => todos.filter((todo) => todo.id !== id))

  const totalOfTodos = todos.length
  const completeTasks = todos.reduce((acc, curr) => curr.isDone == true ? acc + 1 : acc, 0)

  const handleClearance = () => setTodos([])
  const handleChecking = (toggler) => setTodos(todos => todos.map(todo => ({ ...todo, isDone: toggler })))

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <main className="todo-app">
      <CreateTodos addHandler={handleCreateTodo} />
      {todos.length == 0 ? <InitialComponent /> : (<div className="sd"><TodosActions handleChecking={handleChecking} clearTodos={handleClearance} todosLen={totalOfTodos} hasDone={completeTasks} />
        <Todos handleEditTodo={handleEditTodo} todos={todos} deleteTodo={deleteTodo} /></div>)}
    </main>
  );
};
export default TodoApp;
