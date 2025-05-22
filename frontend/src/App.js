import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Todo List App</h1>
        <Todo />
      </div>
    </div>
  );
}

export default App;
