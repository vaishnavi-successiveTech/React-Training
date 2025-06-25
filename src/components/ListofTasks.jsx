"use client";

import { useState, useCallback } from "react";

const ListofTasks=()=> {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

 // add a new task
  const addTodo = () => {
    if (input.trim() === "") return; // remove the fisrt and last space if there is any .

    const newTodo = { // initialize a object intital state of task
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]); // add the new task to the previous one 
    setInput("");
  };

  // Toggle complete status using useCallback
  const toggleComplete = useCallback((id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  }, [todos]);

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "8px" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
            />
            <span
              style={{
                marginLeft: "10px",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            {!todo.completed && (
              <button
                onClick={() => toggleComplete(todo.id)}
                style={{ marginLeft: "10px" }}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

}
export default ListofTasks;