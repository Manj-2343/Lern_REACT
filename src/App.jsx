import React, { useRef } from "react";

const App = () => {
  const inputEl = useRef();
  const handleClick = () => {
    inputEl.current.value = "heelo";
  };
  return (
    <div>
      <input type="text" ref={inputEl} />
      <button onClick={() => handleClick()}>Button</button>
    </div>
  );
};

export default App;
