import "./AddTodo.css";
import {useState} from "react";

const AddTodo = ( {addTodo} ) => {

  const [todoInput, setTodoInput] = useState("");

  const handleAdd = () => {
    addTodo(todoInput);
    setTodoInput(""); 
  }

  return (
    <div className="add-todo">
      <input onChange={(e) => setTodoInput(e.target.value)} type="text" className="add-todo-input" />
      <button onClick={handleAdd} className="add-todo-button">Add Todo</button>
    </div>
  )
}

export default AddTodo;
