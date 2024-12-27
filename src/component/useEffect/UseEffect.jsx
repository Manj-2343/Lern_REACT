import React, { useEffect, useState } from "react";
const UseEffect = () => {
  const [value, setValue] = useState(0);
  const [someThing, setSomething] = useState(1);

  useEffect(() => {
    console.log("this is useEffect");
  }, [value]);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setSomething(someThing + 1)}>something</button>
      <button onClick={() => setValue(value + 1)}>click me</button>
    </div>
  );
};

export default UseEffect;
