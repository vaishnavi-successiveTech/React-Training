"use client";
import { useState } from "react";

const ControlledTodo = () => {
  const [task, setTask] = useState("");         // for input field
  const [tasks, setTasks] = useState([]);       // for the list of tasks

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);  // add new task to the list
      setTask("");                 // clear input field
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h3>Todo List</h3>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", width: "70%", marginRight: "8px" }}
      />

      <button onClick={handleAddTask} style={{ padding: "8px" }}>
        Add
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default ControlledTodo;
