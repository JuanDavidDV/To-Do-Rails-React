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

  const addTodo = async (todoName) => {
    const newTodo = new ToDoApi();  // Creates instance for ToDosApi class
    const newTodoPost = await newTodo.postTodo(todoName); // Post new Todo to API
    setTodos([newTodoPost, ...todos])
  };

  const deleteTodo = async(todoId) => {
    const selectedTodo = new ToDoApi(); // Creates instance for ToDosApi class
    const deleteTodoById = await selectedTodo.deleteTodo(todoId); // Delete Todo to API
  }

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Todo List App</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
