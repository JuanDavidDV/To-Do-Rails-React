import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { useState, useEffect } from "react";
import ToDoApi from "./utilsJs/API/endpoints";

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

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Todo List App</h1>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
