import React, { useState } from "react";
import ComponentOne from "./component/newComp/ComponentOne";
import ComponentTwo from "./component/newComp/ComponentTwo";
import ExampleOne from "./component/newComp/ExampleOne";
import ExampleTwo from "./component/newComp/ExampleTwo";
import ExampleThree from "./component/newComp/ExampleThree";
import TOdoList from "./component/newComp/TOdoList";
import Profile from "./component/newComp/Profile";
import Switch from "./component/switch/Switch";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Switch />
    </div>
  );
};

export default App;
