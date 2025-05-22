import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Todo List App</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
