import React, { useState } from "react";

const ExampleOne = () => {
  //when you add multiple line of code with return you add {}
  // when you have single line of code you do not need {}
  const [count, setCount] = useState(() => {
    const initialCount = 1;
    return initialCount;
  });
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ExampleOne;
