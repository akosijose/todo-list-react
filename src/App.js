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
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
      };
      setTodoList([...todoList, task]);
    }
  };

  const handleDeleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
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
              <h3>{task.taskName}</h3>
              <button onClick={() => handleDeleteTask(task.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
