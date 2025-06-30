// TodoList

"use client";

import { useState } from "react";
 const ToDoList=()=> {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(""); // whatever the user give the input
  const addTodo = () => {
    // add new todo in the input list
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]); // use the spread operator to distribute the todos  and add the new one
    setInput("");
  };

  // Toggle complete status

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        // return the todo if the id is not same
        return todo;
      }
    });
    setTodos(updatedTodos);
  };
  // for deleting the todos

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id!==id);
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h2> Todo List </h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;