import React, { useState } from "react";

const TOdoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodo([...todo, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div style={{ margin: "10px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your todo"
          value={inputValue}
          onChange={handleChange}
          style={{ padding: "0.5rem 2rem" }}
        />
        <button
          style={{
            backgroundColor: "red",
            padding: "0.5rem 2rem",
            color: "black",
          }}
        >
          Click me
        </button>
      </form>
      {todo.map((t, i) => (
        <li key={i + 1}>{t}</li>
      ))}
    </div>
  );
};

export default TOdoList;
