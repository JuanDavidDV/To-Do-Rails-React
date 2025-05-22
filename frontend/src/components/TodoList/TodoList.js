import Todo from "../Todo/Todo";
import "./TodoList.css"

const TodoList = ({ todos }) => {
 return (
  <div className="todo-list">
    {todos.map((todo) => {
      return (
        <Todo key={todo.id} todo_name={todo.todo_name} />
      ) 
    })}
  </div>
 )
};

export default TodoList;
