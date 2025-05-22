import axios from "axios";

export default class ToDoApi {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_BASE_URL;
  }

  async getTodos() {  // GETS all the to do tasks
    try {
      const { data } = await axios.get(this.baseUrl + "todos");
      return data;
    }
    catch(error) {
      console.error(error);
    }
  };

  async postTodo(newTodoName) {   //POST a new to do task
    try {
      const { data } = await axios.post(this.baseUrl + "todos", {"todo_name": newTodoName, "completed": false});
      return data;
    }
    catch(error) {
      console.error(error);
    }
  };

  async deleteTodo(todoId) {    //DELETE a to do task
    try {
      const { data } = await axios.delete(this.baseUrl + "todos/" + todoId );
      return data;
    }
    catch(error) {
      console.error(error);
    }
  };

  async completedTodo(todoId, completed) {   //UPDATE a to do task
    try {
      const { data } = await axios.patch(this.baseUrl + "todos/" + todoId + "/update_completed", {"completed": completed});
      return data;
    }
    catch(error) {
      console.error(error);
    }
  };
};
