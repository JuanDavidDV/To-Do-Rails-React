import Todo from "../Todo/Todo";
import "./TodoList.css"

const TodoList = () => {
 return (
  <div className="todo-list">
    <Todo todo_list="Task 1" />
    <Todo todo_list="Task 2"/>
    <Todo todo_list="Task 3"/>
  </div>
 )
};

export default TodoList;
