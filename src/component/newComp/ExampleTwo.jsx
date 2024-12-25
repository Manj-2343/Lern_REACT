import React, { useState } from "react";

const ExampleTwo = () => {
  const [randomNumber, setRandomNum] = useState(() =>
    Math.floor(Math.random() * 100)
  );
  const handleClick = () => {
    const myNewNumber = Math.floor(Math.random() * 100);
    setRandomNum(myNewNumber);
  };
  return (
    <div>
      <h1>MY Random num is :{randomNumber}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ExampleTwo;
