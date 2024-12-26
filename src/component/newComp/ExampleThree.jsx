import React, { useState } from "react";

const ExampleThree = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>you clicked {counter} time</h1>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
    </div>
  );
};

export default ExampleThree;
