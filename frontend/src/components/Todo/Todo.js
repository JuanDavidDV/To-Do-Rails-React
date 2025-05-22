import "./Todo.css"
import { MdDeleteForever } from "react-icons/md";

const Todo = ( {todo_name, id, deleteTodo} ) => {
  const handleDelete = () => {
    deleteTodo(id);
  }
  return (
    <div className= "todo"> 
      <div className="todo-container">
        <input type="checkbox" className="todo-checkbox"/>
          <h3 className="todo-title"> {todo_name} </h3>          
          <MdDeleteForever onClick={handleDelete} size="1.75rem" className="delete-icon" />
      </div>
    </div>
  )
};

export default Todo;
