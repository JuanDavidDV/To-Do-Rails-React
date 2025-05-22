import axios from "axios";

export default class ToDoApi {
  constructor(todoId) {
    this.baseUrl = import.meta.env.BASE_URL;
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
  }
};
