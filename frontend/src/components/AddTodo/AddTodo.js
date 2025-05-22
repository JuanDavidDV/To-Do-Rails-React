import { MdFaceRetouchingNatural } from "react-icons/md";
import "./AddTodo.css";
import {useState} from "react";

const AddTodo = ( {addTodo} ) => {

  const [todoInput, setTodoInput] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (todoInput.trim() === "") {
      setError("Please enter a task");
      return;
    }

    addTodo(todoInput);
    setTodoInput(""); 
    setError("");
  };

  return (
    <div className="add-todo">
      {error && <p className="add-todo-error">{error}</p>}
      <div className="add-todo-container">
        <input onChange={(e) => setTodoInput(e.target.value)} value={todoInput} type="text" className="add-todo-input" />
        <button onClick={handleAdd} className="add-todo-button">Add Todo</button>
      </div>
    </div>
  )
}

export default AddTodo;
