import Todo from "../Todo/Todo";
import "./TodoList.css"

const TodoList = ({ todos, deleteTodo }) => {
 return (
  <div className="todo-list">
    {todos.map((todo) => {
      return (
        <Todo key={todo.id} id={todo.id} todo_name={todo.todo_name} deleteTodo={deleteTodo} />
      ) 
    })}
  </div>
 )
};

export default TodoList;
