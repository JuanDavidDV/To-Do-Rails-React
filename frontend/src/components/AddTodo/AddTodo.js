import "./AddTodo.css";

const AddTodo = ( {addTodo} ) => {
  return (
    <div className="add-todo">
      <input type="text" className="add-todo-input" />
      <button className="add-todo-button">Add Todo</button>
    </div>
  )
}

export default AddTodo;
