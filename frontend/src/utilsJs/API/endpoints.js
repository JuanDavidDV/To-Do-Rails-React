import axios from "axios";

export default class ToDoApi {
  constructor(todoId) {
    this.baseUrl = process.env.REACT_APP_API_BASE_URL;
    this.todoId = todoId;
  }

  async getTodos() {
    try {
      const { data } = await axios.get(this.baseUrl + "todos");
      return data;
    }
    catch(error) {
      console.error(error);
    }
  };

  async postTodo(newTodoName) {
    try {
      const { data } = await axios.post(this.baseUrl + "todos", {"todo_name": newTodoName, "completed": false});
      return data;
    }
    catch(error) {
      console.error(error);
    }
  };

  async deleteTodo(todoId) {
    try {
      const { data } = await axios.delete(this.baseUrl + "todos/" + todoId );
      return data;
    }
    catch(error) {
      console.error(error);
    }
  };
};
