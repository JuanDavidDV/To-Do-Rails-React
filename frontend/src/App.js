import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import ToDoApi from "./utilsJs/API/endpoints";
import { useState, useEffect } from "react";

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const defaultTodos = new ToDoApi(); // Creates instance for ToDosApi class
      const todosData = await defaultTodos.getTodos();  // Returns to do tasks
      setTodos(todosData);
    }
    fetchTodos();
  }, []);

  const addTodo = async (todo_name) => {
    const newTodo = new ToDoApi();  // Creates instance for ToDosApi class
    const newTodoPost = await newTodo.postTodo(todo_name); // Post new comment to API
    setTodos([newTodoPost, ...todos])
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Todo List App</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
