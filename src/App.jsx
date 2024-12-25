import React, { useState } from "react";
import ComponentOne from "./component/newComp/ComponentOne";
import ComponentTwo from "./component/newComp/ComponentTwo";
import ExampleOne from "./component/newComp/ExampleOne";
import ExampleTwo from "./component/newComp/ExampleTwo";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} />
      <ExampleOne />
      <ExampleTwo />
    </div>
  );
};

export default App;
