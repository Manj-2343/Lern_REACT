import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  };
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="todo-container">
        <form className="top" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-box"
            placeholder="enter your todos..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn">CLICK HERE</button>
        </form>
        <div className="bottom">
          {todos.map((todo, i) => (
            <>
              <div className="box" key={i}>
                {todo}
              </div>
              <br />
              <button className="close-btn" onClick={() => handleDelete(i)}>
                X
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
