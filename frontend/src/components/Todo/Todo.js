import "./Todo.css"
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import ToDoApi from "../../utilsJs/API/endpoints";

const Todo = ( {todo_name, id, deleteTodo, completed} ) => {

  const [isChecked, setIsChecked] = useState(completed);

  const handleDelete = async () => {
    await deleteTodo(id);
  };

  const handleUpdate = async () => {
    const selectedTodoCompleted = new ToDoApi();
    const updatedTodoCompleted = await selectedTodoCompleted.completedTodo(id, !isChecked);
    setIsChecked(!isChecked)
  };

  return (
    <div className= "todo"> 
      <div className="todo-container">
        <input type="checkbox" checked={isChecked} onClick={handleUpdate} className="todo-checkbox"/>
          <h3 className="todo-title"> {todo_name} </h3>          
          <MdDeleteForever onClick={handleDelete} size="1.75rem" className="delete-icon" />
      </div>
    </div>
  )
};

export default Todo;
