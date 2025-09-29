import { useState } from "react";
import CreateTodos from "./CreateTodos";
import Todos from "./todos/Todos";
import TodosActions from "./TodosActions";

const fakeAPI = [
  { id: 1, title: "Learn HTML", isDone: false },
  { id: 2, title: "Learn CSS", isDone: true },
  { id: 3, title: "Learn JS", isDone: false },
];
const TodoApp = () => {
  const [todos, setTodos] = useState(fakeAPI);

  const handleCreateTodo = (newTodo) => setTodos((todos)=>[newTodo,...todos])
  const handleEditTodo = (id,newTodo) => setTodos((todos)=>todos.map(todo=>todo.id==id?newTodo:todo))
  const deleteTodo = (id) => setTodos(todos=>todos.filter((todo) =>todo.id !== id))

  const totalOfTodos = todos.length
  const completeTasks = todos.reduce((acc,curr)=>curr.isDone==true?acc+1:acc,0)

  const handleClearance = ()=> setTodos([])
  const handleChecking = (toggler)=> setTodos(todos=>todos.map(todo=>({...todo,isDone:toggler})))


  return (
    <main className="todo-app">
      <CreateTodos addHandler={handleCreateTodo} />
      <TodosActions handleChecking={handleChecking} clearTodos={handleClearance} todosLen={totalOfTodos} hasDone={completeTasks} />
      <Todos handleEditTodo={handleEditTodo} todos={todos} deleteTodo={deleteTodo} />
    </main>
  );
};
export default TodoApp;
