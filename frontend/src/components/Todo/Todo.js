import "./Todo.css"
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {
  return (
    <div className= "todo"> 
      <div className="todo-container">
        <input type="checkbox" className="todo-checkbox"/>
          <h3 className="todo-title">Task 1</h3>          
          <MdDeleteForever size="1.75rem" className="delete-icon" />
      </div>
    </div>
  )
};

export default Todo;
