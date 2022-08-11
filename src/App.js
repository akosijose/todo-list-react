import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask === "") {
      alert("Please add task");
    } else {
      const newTodoList = [...todoList, newTask];
      setTodoList(newTodoList);
      // console.log(todoList);
    }
  };

  const handleDeleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      // --------- simple way -----------
      return task !== taskName;

      // ------------ if statement ----------
      // if (task === taskName) {
      //   return false;
      // } else {
      //   return true;
      // }
    });

    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleInputChange} type="text" />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return (
            <div key={key}>
              <h3>{task}</h3>
              <button onClick={() => handleDeleteTask(task)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
